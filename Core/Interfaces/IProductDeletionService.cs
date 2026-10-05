using Core.Entities;

namespace Core.Interfaces;

public interface IProductDeletionService
{
    Task<bool> DeleteAsync<T>(string id, CancellationToken cancellationToken = default) where T : BaseEntity;
}
