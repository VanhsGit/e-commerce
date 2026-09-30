using System.Collections.Generic;
using Core.Entities;

namespace Core.Specification
{
    public class ElectricalApplianceProductsWithSpec : BaseSpecipication<ElectricalApplianceProduct>
    {
        public ElectricalApplianceProductsWithSpec(
            string? companyId = null,
            string? brandId = null,
            ElectricalApplianceType? type = null,
            string? search = null,
            bool? isUsed = null,
            IReadOnlyCollection<string>? categoryIds = null) : base(x =>
                (string.IsNullOrEmpty(companyId) || x.CompanyId == companyId) &&
                (string.IsNullOrEmpty(brandId) || x.BrandId == brandId) &&
                (!type.HasValue || x.Type == type.Value) &&
                (!isUsed.HasValue || x.IsUsed == isUsed.Value) &&
                (categoryIds == null || (x.CategoryId != null && categoryIds.Contains(x.CategoryId))) &&
                (string.IsNullOrEmpty(search) ||
                    x.Name.ToLower().Contains(search.ToLower()) ||
                    x.Brand.ToLower().Contains(search.ToLower()) ||
                    x.Model.ToLower().Contains(search.ToLower()) ||
                    x.Description.ToLower().Contains(search.ToLower()) ||
                    x.Company.Name.ToLower().Contains(search.ToLower())))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddInclude(x => x.CategoryEntity);
            AddInclude("CategoryEntity.Parent");
            AddOrderBy(x => x.Name);
        }

        public ElectricalApplianceProductsWithSpec(string id, bool includeInactive = false)
            : base(x => x.Id == id && (includeInactive || x.IsUsed))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddInclude(x => x.CategoryEntity);
            AddInclude("CategoryEntity.Parent");
        }
    }
}
