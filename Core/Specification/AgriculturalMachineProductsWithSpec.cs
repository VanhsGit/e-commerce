using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;

namespace Core.Specification
{
    public class AgriculturalMachineProductsWithSpec : BaseSpecipication<AgriculturalMachineProduct>
    {
        public AgriculturalMachineProductsWithSpec(
            string? companyId = null,
            string? brandId = null,
            AgriculturalMachineCategory? category = null,
            string? search = null,
            bool? isUsed = null) : base(x =>
                (string.IsNullOrEmpty(companyId) || x.CompanyId == companyId) &&
                (string.IsNullOrEmpty(brandId) || x.BrandId == brandId) &&
                (!category.HasValue || x.Category == category.Value) &&
                (!isUsed.HasValue || x.IsUsed == isUsed.Value) &&
                (string.IsNullOrEmpty(search) ||
                    x.Name.ToLower().Contains(search.ToLower()) ||
                    (x.Brand != null && x.Brand.ToLower().Contains(search.ToLower())) ||
                    (x.Model != null && x.Model.ToLower().Contains(search.ToLower())) ||
                    (x.Description != null && x.Description.ToLower().Contains(search.ToLower())) ||
                    (x.Company.Name != null && x.Company.Name.ToLower().Contains(search.ToLower())) ||
                    (x.EngineType != null && x.EngineType.ToLower().Contains(search.ToLower())))
            )
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddOrderBy(x => x.Name);
        }

        public AgriculturalMachineProductsWithSpec(string id, bool includeInactive = false) : base(x => x.Id == id && (includeInactive || x.IsUsed))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
        }
    }
}
