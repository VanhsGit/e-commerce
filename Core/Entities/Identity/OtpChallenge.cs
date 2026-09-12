using System;

namespace Core.Entities.Identity
{
    public class OtpChallenge
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string NormalizedEmail { get; set; } = string.Empty;
        public string CodeHash { get; set; } = string.Empty;
        public DateTimeOffset CreatedAt { get; set; }
        public DateTimeOffset ExpiresAt { get; set; }
        public int AttemptCount { get; set; }
        public int MaxAttempts { get; set; } = 5;
        public DateTimeOffset? ConsumedAt { get; set; }
        public string? RequestIp { get; set; }
        public bool IsUsed { get; set; } = true;
    }
}
