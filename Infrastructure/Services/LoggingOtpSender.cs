using System;
using System.Threading;
using System.Threading.Tasks;
using Core.Interfaces;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Services
{
    public class LoggingOtpSender : IOtpSender
    {
        private readonly ILogger<LoggingOtpSender> _logger;
        private readonly IHostEnvironment _environment;

        public LoggingOtpSender(ILogger<LoggingOtpSender> logger, IHostEnvironment environment)
        {
            _logger = logger;
            _environment = environment;
        }

        public Task SendAsync(string email, string code, CancellationToken cancellationToken = default)
        {
            if (!_environment.IsDevelopment())
                throw new InvalidOperationException("A production IOtpSender must be configured before OTP login can be used.");
            _logger.LogInformation("Development OTP for {Email}: {OtpCode}", email, code);
            return Task.CompletedTask;
        }
    }
}
