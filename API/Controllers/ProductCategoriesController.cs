using System.Text.RegularExpressions;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public partial class ProductCategoriesController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly StoreContext _context;

        public ProductCategoriesController(IUnitOfWork unitOfWork, IMapper mapper, StoreContext context)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductCategoryDto>>> GetProductCategories(
            [FromQuery] string? kind = null,
            [FromQuery] string? parentId = null,
            [FromQuery] bool? isUsed = null,
            [FromQuery] string? search = null,
            [FromQuery] bool tree = false)
        {
            ProductKind? kindFilter = null;
            if (!string.IsNullOrWhiteSpace(kind))
            {
                if (!TryParseKind(kind, out var parsed))
                    return BadRequest(new ApiResponse(400, "Ngành hàng không hợp lệ"));
                kindFilter = parsed;
            }

            var spec = new ProductCategoriesWithSpec(kindFilter, parentId, isUsed, search);
            var categories = await _unitOfWork.Repository<ProductCategory>().ListAsync(spec);
            var ordered = categories.OrderBy(c => c.SortOrder).ThenBy(c => c.Name, StringComparer.OrdinalIgnoreCase).ToList();
            var dtos = _mapper.Map<List<ProductCategoryDto>>(ordered);

            var counts = await CountProductsAsync(kindFilter);
            foreach (var dto in dtos)
                dto.ProductCount = counts.TryGetValue(dto.Id, out var count) ? count : 0;

            if (!tree) return Ok(dtos);

            var byId = dtos.ToDictionary(d => d.Id);
            var roots = new List<ProductCategoryDto>();
            foreach (var dto in dtos)
            {
                if (dto.ParentId != null && byId.TryGetValue(dto.ParentId, out var parent))
                    parent.Children.Add(dto);
                else
                    roots.Add(dto);
            }
            return Ok(roots);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductCategoryDto>> GetProductCategory(string id)
        {
            var category = await _unitOfWork.Repository<ProductCategory>().GetEntityWithSpec(new ProductCategoriesWithSpec(id));
            if (category == null) return NotFound(new ApiResponse(404));
            var dto = _mapper.Map<ProductCategoryDto>(category);
            var counts = await CountProductsAsync(category.Kind);
            dto.ProductCount = counts.TryGetValue(category.Id, out var count) ? count : 0;
            return Ok(dto);
        }

        [HttpPost]
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ProductCategoryDto>> Create([FromBody] CreateProductCategoryDto dto)
        {
            Normalize(dto);
            var error = await ValidateAsync(dto, null);
            if (error != null) return BadRequest(new ApiResponse(400, error));

            var category = _mapper.Map<CreateProductCategoryDto, ProductCategory>(dto);
            category.Id = Guid.NewGuid().ToString();
            _unitOfWork.Repository<ProductCategory>().Add(category);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Không thể tạo danh mục"));

            var created = await _unitOfWork.Repository<ProductCategory>().GetEntityWithSpec(new ProductCategoriesWithSpec(category.Id));
            return CreatedAtAction(nameof(GetProductCategory), new { id = category.Id }, _mapper.Map<ProductCategoryDto>(created));
        }

        [HttpPut("{id}")]
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductCategoryDto>> Update(string id, [FromBody] UpdateProductCategoryDto dto)
        {
            if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
            var category = await _unitOfWork.Repository<ProductCategory>().GetByIdAsync(id);
            if (category == null) return NotFound(new ApiResponse(404));

            Normalize(dto);
            if (dto.Kind != category.Kind)
                return BadRequest(new ApiResponse(400, "Không thể đổi ngành hàng của danh mục"));
            var error = await ValidateAsync(dto, category);
            if (error != null) return BadRequest(new ApiResponse(400, error));

            _mapper.Map(dto, category);
            _unitOfWork.Repository<ProductCategory>().Update(category);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Không thể cập nhật danh mục"));

            var updated = await _unitOfWork.Repository<ProductCategory>().GetEntityWithSpec(new ProductCategoriesWithSpec(id));
            return Ok(_mapper.Map<ProductCategoryDto>(updated));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Delete(string id)
        {
            var category = await _unitOfWork.Repository<ProductCategory>().GetByIdAsync(id);
            if (category == null) return NotFound(new ApiResponse(404));

            if (await _context.ProductCategories.AnyAsync(x => x.ParentId == id && x.IsUsed))
                return BadRequest(new ApiResponse(400, "Không thể xoá: danh mục vẫn còn danh mục con đang sử dụng"));

            var productCount = await CountProductsInCategoryAsync(id);
            if (productCount > 0)
                return BadRequest(new ApiResponse(400, $"Không thể xoá: còn {productCount} sản phẩm đang thuộc danh mục này"));

            category.IsUsed = false;
            category.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<ProductCategory>().Update(category);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Không thể xoá danh mục"));
            return Ok();
        }

        private static bool TryParseKind(string value, out ProductKind kind)
        {
            return Enum.TryParse(value.Trim(), true, out kind) && Enum.IsDefined(kind);
        }

        private static void Normalize(CreateProductCategoryDto dto)
        {
            dto.Name = (dto.Name ?? string.Empty).Trim();
            dto.Slug = (dto.Slug ?? string.Empty).Trim().ToLowerInvariant();
            dto.ParentId = string.IsNullOrWhiteSpace(dto.ParentId) ? null : dto.ParentId.Trim();
            dto.Description ??= string.Empty;
            dto.ImageUrl ??= string.Empty;
            dto.Metadata ??= new Dictionary<string, string>();
        }

        /// <summary>Kiểm tra nghiệp vụ; trả về thông báo lỗi hoặc null nếu hợp lệ.</summary>
        private async Task<string?> ValidateAsync(CreateProductCategoryDto dto, ProductCategory? existing)
        {
            if (!Enum.IsDefined(dto.Kind)) return "Ngành hàng không hợp lệ";
            if (dto.Name.Length == 0 || dto.Name.Length > 200) return "Tên danh mục là bắt buộc và tối đa 200 ký tự";
            if (dto.Slug.Length == 0 || dto.Slug.Length > 200 || !SlugRegex().IsMatch(dto.Slug))
                return "Slug là bắt buộc, tối đa 200 ký tự, chỉ gồm chữ thường không dấu, số và dấu gạch ngang";

            var siblings = await _context.ProductCategories.AsNoTracking()
                .Where(x => x.Kind == dto.Kind)
                .ToListAsync();

            if (siblings.Any(x => x.Slug == dto.Slug && x.Id != existing?.Id))
                return "Slug đã tồn tại trong ngành hàng này";

            if (dto.ParentId == null) return null;

            var byId = siblings.ToDictionary(x => x.Id);
            if (!byId.TryGetValue(dto.ParentId, out var parent))
            {
                var exists = await _context.ProductCategories.AnyAsync(x => x.Id == dto.ParentId);
                return exists ? "Danh mục cha phải cùng ngành hàng" : "Danh mục cha không tồn tại";
            }

            var selfId = existing?.Id;
            if (selfId != null)
            {
                if (parent.Id == selfId) return "Danh mục không thể là cha của chính nó";
                if (ProductCategoryTree.SelfAndDescendantIds(siblings, selfId).Contains(parent.Id))
                    return "Không thể chọn danh mục con/cháu làm danh mục cha";
            }

            // Độ sâu của cha (gốc = 1) + 1 + chiều cao cây con đang di chuyển không được vượt quá 3.
            var parentDepth = DepthOf(parent, byId);
            var subtreeHeight = selfId == null ? 1 : HeightOf(selfId, siblings);
            if (parentDepth + subtreeHeight > ProductCategoryTree.MaxDepth)
                return $"Danh mục chỉ được lồng tối đa {ProductCategoryTree.MaxDepth} cấp";

            return null;
        }

        private static int DepthOf(ProductCategory category, Dictionary<string, ProductCategory> byId)
        {
            var depth = 1;
            var current = category;
            var guard = 0;
            while (current.ParentId != null && byId.TryGetValue(current.ParentId, out var next) && guard++ < 10)
            {
                depth++;
                current = next;
            }
            return depth;
        }

        private static int HeightOf(string id, List<ProductCategory> all)
        {
            var childrenByParent = all.Where(c => c.ParentId != null).ToLookup(c => c.ParentId!);
            int Height(string nodeId, int guard) =>
                guard > 10 ? 1 : 1 + childrenByParent[nodeId].Select(c => Height(c.Id, guard + 1)).DefaultIfEmpty(0).Max();
            return Height(id, 0);
        }

        private async Task<Dictionary<string, int>> CountProductsAsync(ProductKind? kind)
        {
            var counts = new Dictionary<string, int>();

            void Merge(IEnumerable<(string? CategoryId, int Count)> rows)
            {
                foreach (var (categoryId, count) in rows)
                {
                    if (categoryId == null) continue;
                    counts[categoryId] = counts.GetValueOrDefault(categoryId) + count;
                }
            }

            if (kind is null or ProductKind.Bike)
                Merge((await _context.ElectricBikeProducts.AsNoTracking()
                    .Where(p => p.IsUsed && p.CategoryId != null)
                    .GroupBy(p => p.CategoryId)
                    .Select(g => new { g.Key, Count = g.Count() })
                    .ToListAsync()).Select(x => (x.Key, x.Count)));
            if (kind is null or ProductKind.Machine)
                Merge((await _context.AgriculturalMachineProducts.AsNoTracking()
                    .Where(p => p.IsUsed && p.CategoryId != null)
                    .GroupBy(p => p.CategoryId)
                    .Select(g => new { g.Key, Count = g.Count() })
                    .ToListAsync()).Select(x => (x.Key, x.Count)));
            if (kind is null or ProductKind.Appliance)
                Merge((await _context.ElectricalApplianceProducts.AsNoTracking()
                    .Where(p => p.IsUsed && p.CategoryId != null)
                    .GroupBy(p => p.CategoryId)
                    .Select(g => new { g.Key, Count = g.Count() })
                    .ToListAsync()).Select(x => (x.Key, x.Count)));

            return counts;
        }

        private async Task<int> CountProductsInCategoryAsync(string id)
        {
            return await _context.ElectricBikeProducts.CountAsync(p => p.IsUsed && p.CategoryId == id)
                + await _context.AgriculturalMachineProducts.CountAsync(p => p.IsUsed && p.CategoryId == id)
                + await _context.ElectricalApplianceProducts.CountAsync(p => p.IsUsed && p.CategoryId == id);
        }

        [GeneratedRegex("^[a-z0-9]+(?:-[a-z0-9]+)*$")]
        private static partial Regex SlugRegex();
    }
}
