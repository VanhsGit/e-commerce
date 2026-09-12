using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;

namespace Core.Specification
{
    public class ElectricBikeProductsWithSpec : BaseSpecipication<ElectricBikeProduct>
    {
        public ElectricBikeProductsWithSpec(string? companyId, string? brandId, bool includeInactive = false) : base(x =>
            (string.IsNullOrEmpty(companyId) || x.CompanyId == companyId) &&
            (string.IsNullOrEmpty(brandId) || x.BrandId == brandId) &&
            (includeInactive || x.IsUsed)
        )
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddOrderBy(x => x.Name);
        }

        public ElectricBikeProductsWithSpec(string id, bool includeInactive = false) : base(x => x.Id == id && (includeInactive || x.IsUsed))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
        }
    }
}
