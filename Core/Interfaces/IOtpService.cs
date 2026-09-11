using System.Threading;
using System.Threading.Tasks;
using Core.Entities.Identity;

namespace Core.Interfaces
{
    public interface IOtpService
    {
        Task RequestAsync(string email, string? remoteIp, CancellationToken cancellationToken = default);
        Task<AppUser?> VerifyAsync(string email, string code, CancellationToken cancellationToken = default);
    }
}
