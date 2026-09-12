using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Company, CompanyDto>();
            CreateMap<CreateCompanyDto, Company>()
                .ForMember(d => d.CreatedAt, o => o.MapFrom(_ => DateTime.UtcNow))
                .ForMember(d => d.UpdatedAt, o => o.MapFrom(_ => DateTime.UtcNow));

            CreateMap<Brand, BrandDto>();
            CreateMap<CreateBrandDto, Brand>()
                .ForMember(d => d.CreatedAt, o => o.MapFrom(_ => DateTime.UtcNow))
                .ForMember(d => d.UpdatedAt, o => o.MapFrom(_ => DateTime.UtcNow));

            CreateMap<ElectricBikeProduct, ElectricBikeProductDto>()
                .ForMember(d => d.CompanyName, o => o.MapFrom(s => s.Company.Name))
                .ForMember(d => d.BrandName, o => o.MapFrom(s => s.BrandEntity.Name))
                .ForMember(d => d.CategoryName, o => o.MapFrom(s => s.Category == ElectricBikeCategory.ElectricBikeModel
                    ? "Xe điện hoàn chỉnh"
                    : "Phụ tùng xe điện"))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ElectricBikeProductUrlResolver>());
            CreateMap<CreateElectricBikeProductDto, ElectricBikeProduct>()
                .ForMember(d => d.CreatedAt, o => o.MapFrom(_ => DateTime.UtcNow))
                .ForMember(d => d.UpdatedAt, o => o.MapFrom(_ => DateTime.UtcNow));
            CreateMap<UpdateElectricBikeProductDto, ElectricBikeProduct>()
                .ForMember(d => d.UpdatedAt, o => o.MapFrom(_ => DateTime.UtcNow));

            CreateMap<AgriculturalMachineProduct, AgriculturalMachineProductDto>()
                .ForMember(d => d.CompanyName, o => o.MapFrom(s => s.Company.Name))
                .ForMember(d => d.BrandName, o => o.MapFrom(s => s.BrandEntity.Name))
                .ForMember(d => d.CategoryName, o => o.MapFrom(s => s.Category == AgriculturalMachineCategory.MachineModel
                    ? "Máy nông nghiệp"
                    : "Phụ tùng nông nghiệp"))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<AgriculturalMachineProductUrlResolver>());
            CreateMap<CreateAgriculturalMachineProductDto, AgriculturalMachineProduct>()
                .ForMember(d => d.CreatedAt, o => o.MapFrom(_ => DateTime.UtcNow))
                .ForMember(d => d.UpdatedAt, o => o.MapFrom(_ => DateTime.UtcNow));
            CreateMap<UpdateAgriculturalMachineProductDto, AgriculturalMachineProduct>()
                .ForMember(d => d.UpdatedAt, o => o.MapFrom(_ => DateTime.UtcNow));

            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
        }
    }
}
