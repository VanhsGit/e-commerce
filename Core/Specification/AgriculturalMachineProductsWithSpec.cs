using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;

namespace Core.Specification
{
    public class AgriculturalMachineProductsWithSpec : BaseSpecipication<AgriculturalMachineProduct>
    {
        public AgriculturalMachineProductsWithSpec(int? companyId, int? brandId, bool includeInactive = false) : base(x =>
            (!companyId.HasValue || x.CompanyId == companyId.Value) &&
            (!brandId.HasValue || x.BrandId == brandId.Value) &&
            (includeInactive || x.IsUsed)
        )
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddOrderBy(x => x.Name);
        }

        public AgriculturalMachineProductsWithSpec(int id, bool includeInactive = false) : base(x => x.Id == id && (includeInactive || x.IsUsed))
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
        }
    }
}
