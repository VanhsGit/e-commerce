using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;

namespace Core.Specification
{
    public class AgriculturalMachineProductsWithSpec : BaseSpecipication<AgriculturalMachineProduct>
    {
        public AgriculturalMachineProductsWithSpec(int? companyId, int? brandId) : base(x =>
            (!companyId.HasValue || x.CompanyId == companyId.Value) &&
            (!brandId.HasValue || x.BrandId == brandId.Value)
        )
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
            AddOrderBy(x => x.Name);
        }

        public AgriculturalMachineProductsWithSpec(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Company);
            AddInclude(x => x.BrandEntity);
        }
    }
}
