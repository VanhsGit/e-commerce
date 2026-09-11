using System.Threading;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IOtpSender
    {
        Task SendAsync(string email, string code, CancellationToken cancellationToken = default);
    }
}
