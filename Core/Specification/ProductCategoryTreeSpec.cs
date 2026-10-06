using Core.Entities;

namespace Core.Specification
{
    /// <summary>
    /// Chi de suy ra quan he cha/con cua mot nganh hang: khong Include Parent,
    /// khong tracking. Dung khi loc san pham theo danh muc - luc do chi can
    /// Id va ParentId, khong can du lieu hien thi.
    /// </summary>
    public class ProductCategoryTreeSpec : BaseSpecipication<ProductCategory>
    {
        public ProductCategoryTreeSpec(ProductKind kind) : base(x => x.Kind == kind)
        {
            ApplyNoTracking();
        }
    }
}
