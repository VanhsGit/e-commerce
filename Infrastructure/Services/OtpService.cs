using System;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Core.Interfaces;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Infrastructure.Services
{
    public class OtpService : IOtpService
    {
        private readonly AppIdentityDbContext _context;
        private readonly UserManager<AppUser> _users;
        private readonly IOtpCodeHasher _hasher;
        private readonly IOtpSender _sender;
        private readonly OtpOptions _options;
        private readonly TimeProvider _timeProvider;

        public OtpService(
            AppIdentityDbContext context,
            UserManager<AppUser> users,
            IOtpCodeHasher hasher,
            IOtpSender sender,
            IOptions<OtpOptions> options,
            TimeProvider timeProvider)
        {
            _context = context;
            _users = users;
            _hasher = hasher;
            _sender = sender;
            _options = options.Value;
            _timeProvider = timeProvider;
        }

        public async Task<string?> RequestAsync(string email, string? remoteIp, CancellationToken cancellationToken = default)
        {
            var normalizedEmail = _users.NormalizeEmail(email);
            var user = await _users.FindByEmailAsync(email);
            if (user == null || !user.IsUsed || string.IsNullOrWhiteSpace(normalizedEmail)) return null;

            var now = _timeProvider.GetUtcNow();
            var cooldownFrom = now.AddSeconds(-_options.CooldownSeconds);
            var windowFrom = now.AddMinutes(-_options.WindowMinutes);

            if (await _context.OtpChallenges.AnyAsync(
                    x => x.NormalizedEmail == normalizedEmail && x.CreatedAt >= cooldownFrom,
                    cancellationToken)) return null;

            if (await _context.OtpChallenges.CountAsync(
                    x => x.NormalizedEmail == normalizedEmail && x.CreatedAt >= windowFrom,
                    cancellationToken) >= _options.MaxRequestsPerWindow) return null;

            if (!string.IsNullOrWhiteSpace(remoteIp) && await _context.OtpChallenges.CountAsync(
                    x => x.RequestIp == remoteIp && x.CreatedAt >= windowFrom,
                    cancellationToken) >= _options.MaxRequestsPerWindow) return null;

            var active = await _context.OtpChallenges
                .Where(x => x.NormalizedEmail == normalizedEmail && x.IsUsed)
                .ToListAsync(cancellationToken);
            foreach (var challenge in active) challenge.IsUsed = false;

            var code = RandomNumberGenerator.GetInt32(0, 1_000_000).ToString("D6");
            _context.OtpChallenges.Add(new OtpChallenge
            {
                NormalizedEmail = normalizedEmail,
                CodeHash = _hasher.Hash(normalizedEmail, code),
                CreatedAt = now,
                ExpiresAt = now.AddMinutes(_options.ExpiryMinutes),
                MaxAttempts = _options.MaxAttempts,
                RequestIp = remoteIp,
                IsUsed = true
            });
            await _context.SaveChangesAsync(cancellationToken);
            await _sender.SendAsync(user.Email!, code, cancellationToken);
            return code;
        }

        public async Task<AppUser?> VerifyAsync(
            string email,
            string code,
            CancellationToken cancellationToken = default)
        {
            var normalizedEmail = _users.NormalizeEmail(email);
            if (string.IsNullOrWhiteSpace(normalizedEmail) || string.IsNullOrWhiteSpace(code)) return null;

            var user = await _users.FindByEmailAsync(email);
            if (user == null || !user.IsUsed) return null;

            var now = _timeProvider.GetUtcNow();
            var challenge = await _context.OtpChallenges
                .Where(x => x.NormalizedEmail == normalizedEmail && x.IsUsed && x.ConsumedAt == null)
                .OrderByDescending(x => x.CreatedAt)
                .FirstOrDefaultAsync(cancellationToken);

            if (challenge == null || challenge.ExpiresAt <= now || challenge.AttemptCount >= challenge.MaxAttempts)
            {
                if (challenge != null)
                {
                    challenge.IsUsed = false;
                    await _context.SaveChangesAsync(cancellationToken);
                }
                return null;
            }

            challenge.AttemptCount++;
            if (!_hasher.Verify(normalizedEmail, code.Trim(), challenge.CodeHash))
            {
                if (challenge.AttemptCount >= challenge.MaxAttempts) challenge.IsUsed = false;
                await _context.SaveChangesAsync(cancellationToken);
                return null;
            }

            challenge.ConsumedAt = now;
            challenge.IsUsed = false;
            await _context.SaveChangesAsync(cancellationToken);
            return user;
        }
    }
}
