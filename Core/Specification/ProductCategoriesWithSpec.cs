using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specification
{
    public class ProductCategoriesWithSpec : BaseSpecipication<ProductCategory>
    {
        public ProductCategoriesWithSpec(
            ProductKind? kind = null,
            string? parentId = null,
            bool? isUsed = null,
            string? search = null)
            : base(Filter(kind, parentId, isUsed, search))
        {
            AddInclude(x => x.Parent!);
            AddOrderBy(x => x.SortOrder);
            ApplyNoTracking();
        }

        public ProductCategoriesWithSpec(string id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Parent!);
            ApplyNoTracking();
        }

        private static Expression<Func<ProductCategory, bool>> Filter(
            ProductKind? kind,
            string? parentId,
            bool? isUsed,
            string? search)
        {
            var term = string.IsNullOrWhiteSpace(search) ? null : search.Trim().ToLower();
            return x =>
                (!kind.HasValue || x.Kind == kind.Value) &&
                (string.IsNullOrEmpty(parentId) || x.ParentId == parentId) &&
                (!isUsed.HasValue || x.IsUsed == isUsed.Value) &&
                (term == null ||
                    x.Name.ToLower().Contains(term) ||
                    x.Slug.ToLower().Contains(term));
        }
    }
}
