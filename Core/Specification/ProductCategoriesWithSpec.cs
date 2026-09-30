using Core.Entities;

namespace Core.Specification
{
    public class ProductCategoriesWithSpec : BaseSpecipication<ProductCategory>
    {
        public ProductCategoriesWithSpec(
            ProductKind? kind = null,
            string? parentId = null,
            bool? isUsed = null,
            string? search = null) : base(x =>
                (!kind.HasValue || x.Kind == kind.Value) &&
                (string.IsNullOrEmpty(parentId) || x.ParentId == parentId) &&
                (!isUsed.HasValue || x.IsUsed == isUsed.Value) &&
                (string.IsNullOrEmpty(search) ||
                    x.Name.ToLower().Contains(search.ToLower()) ||
                    x.Slug.ToLower().Contains(search.ToLower())))
        {
            AddInclude(x => x.Parent!);
            AddOrderBy(x => x.SortOrder);
        }

        public ProductCategoriesWithSpec(string id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Parent!);
        }
    }
}
