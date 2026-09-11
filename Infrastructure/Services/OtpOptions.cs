namespace Infrastructure.Services
{
    public class OtpOptions
    {
        public const string SectionName = "Otp";
        public string HashKey { get; set; } = string.Empty;
        public int ExpiryMinutes { get; set; } = 5;
        public int MaxAttempts { get; set; } = 5;
        public int CooldownSeconds { get; set; } = 60;
        public int MaxRequestsPerWindow { get; set; } = 5;
        public int WindowMinutes { get; set; } = 15;
    }
}
