using System;
using System.Security.Cryptography;
using System.Text;
using Core.Interfaces;
using Infrastructure.Services;
using Microsoft.Extensions.Options;

namespace Infrastructure.Identity
{
    public class OtpCodeHasher : IOtpCodeHasher
    {
        private readonly byte[] _key;

        public OtpCodeHasher(IOptions<OtpOptions> options)
        {
            if (string.IsNullOrWhiteSpace(options.Value.HashKey) || options.Value.HashKey.Length < 32)
                throw new InvalidOperationException("Otp:HashKey must contain at least 32 characters.");
            _key = Encoding.UTF8.GetBytes(options.Value.HashKey);
        }

        public string Hash(string normalizedEmail, string code)
        {
            using var hmac = new HMACSHA256(_key);
            return Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes($"{normalizedEmail}:{code}")));
        }

        public bool Verify(string normalizedEmail, string code, string expectedHash)
        {
            try
            {
                return CryptographicOperations.FixedTimeEquals(
                    Convert.FromBase64String(Hash(normalizedEmail, code)),
                    Convert.FromBase64String(expectedHash));
            }
            catch (FormatException)
            {
                return false;
            }
        }
    }
}
