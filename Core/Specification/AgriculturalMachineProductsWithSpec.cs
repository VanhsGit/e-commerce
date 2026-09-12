using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;

namespace Core.Specification
{
    public class AgriculturalMachineProductsWithSpec : BaseSpecipication<AgriculturalMachineProduct>
    {
        public AgriculturalMachineProductsWithSpec(string? companyId, string? brandId, bool includeInactive = false) : base(x =>
            (string.IsNullOrEmpty(companyId) || x.CompanyId == companyId) &&
            (string.IsNullOrEmpty(brandId) || x.BrandId == brandId) &&
            (includeInactive || x.IsUsed)
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
