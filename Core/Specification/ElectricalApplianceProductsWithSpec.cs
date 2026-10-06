using System;
using System.Collections.Generic;
using System.Linq.Expressions;
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
            IReadOnlyCollection<string>? categoryIds = null)
            : base(Filter(companyId, brandId, type, search, isUsed, categoryIds))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddInclude(x => x.CategoryEntity);
            AddInclude("CategoryEntity.Parent");
            AddOrderBy(x => x.Name);
            ApplyNoTracking();
        }

        public ElectricalApplianceProductsWithSpec(string id, bool includeInactive = false)
            : base(x => x.Id == id && (includeInactive || x.IsUsed))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddInclude(x => x.CategoryEntity);
            AddInclude("CategoryEntity.Parent");
            ApplyNoTracking();
        }

        /// <summary>
        /// Dung dieu kien loc. Tu khoa tim kiem duoc ha chu thuong mot lan o day
        /// thay vi goi ToLower() lap lai trong bieu thuc, nen cau SQL sinh ra chi
        /// mang theo mot tham so duy nhat.
        /// </summary>
        private static Expression<Func<ElectricalApplianceProduct, bool>> Filter(
            string? companyId,
            string? brandId,
            ElectricalApplianceType? type,
            string? search,
            bool? isUsed,
            IReadOnlyCollection<string>? categoryIds)
        {
            var term = string.IsNullOrWhiteSpace(search) ? null : search.Trim().ToLower();
            return x =>
                (string.IsNullOrEmpty(companyId) || x.CompanyId == companyId) &&
                (string.IsNullOrEmpty(brandId) || x.BrandId == brandId) &&
                (!type.HasValue || x.Type == type.Value) &&
                (!isUsed.HasValue || x.IsUsed == isUsed.Value) &&
                (categoryIds == null || (x.CategoryId != null && categoryIds.Contains(x.CategoryId))) &&
                (term == null ||
                    x.Name.ToLower().Contains(term) ||
                    x.Brand.ToLower().Contains(term) ||
                    x.Model.ToLower().Contains(term) ||
                    x.Description.ToLower().Contains(term) ||
                    x.Company.Name.ToLower().Contains(term));
        }
    }
}
