using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RequestOtpDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
    }

    public class VerifyOtpDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required, RegularExpression("^[0-9]{6}$")]
        public string Code { get; set; } = string.Empty;
    }

    public class OtpAcceptedDto
    {
        public string Message { get; set; } = "If the account is available, an OTP has been sent.";
        public int RetryAfterSeconds { get; set; } = 60;
    }
}
