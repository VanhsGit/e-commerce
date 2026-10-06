using Core.Entities;
using Core.Interfaces;
using Core.Specification;

namespace API.Helpers
{
    public static class ProductCategoryTree
    {
        public const int MaxDepth = 3;

        /// <summary>Id của danh mục và toàn bộ hậu duệ (duyệt cây trong bộ nhớ).</summary>
        public static List<string> SelfAndDescendantIds(IEnumerable<ProductCategory> categories, string rootId)
        {
            var childrenByParent = categories
                .Where(c => c.ParentId != null)
                .ToLookup(c => c.ParentId!);
            var result = new List<string>();
            var visited = new HashSet<string>();
            var stack = new Stack<string>();
            stack.Push(rootId);
            while (stack.Count > 0)
            {
                var id = stack.Pop();
                if (!visited.Add(id)) continue;
                result.Add(id);
                foreach (var child in childrenByParent[id]) stack.Push(child.Id);
            }
            return result;
        }

        /// <summary>Danh sách id dùng để lọc sản phẩm; null nếu không lọc theo danh mục.</summary>
        public static async Task<IReadOnlyCollection<string>?> ResolveFilterIdsAsync(
            IUnitOfWork unitOfWork, ProductKind kind, string? categoryId)
        {
            if (string.IsNullOrWhiteSpace(categoryId)) return null;
            var categories = await unitOfWork.Repository<ProductCategory>()
                .ListAsync(new ProductCategoryTreeSpec(kind));
            return SelfAndDescendantIds(categories, categoryId);
        }

        /// <summary>Kiểm tra danh mục gán cho sản phẩm: phải tồn tại, đúng ngành hàng. Trả về thông báo lỗi hoặc null.</summary>
        public static async Task<string?> ValidateProductCategoryAsync(
            IUnitOfWork unitOfWork, ProductKind kind, string? categoryId)
        {
            if (string.IsNullOrWhiteSpace(categoryId)) return null;
            var category = await unitOfWork.Repository<ProductCategory>().GetByIdAsync(categoryId);
            if (category == null) return "Danh mục không tồn tại";
            if (category.Kind != kind) return "Danh mục không thuộc ngành hàng của sản phẩm";
            return null;
        }
    }
}
