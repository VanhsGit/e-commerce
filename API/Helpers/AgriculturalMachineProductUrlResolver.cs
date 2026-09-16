using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class AgriculturalMachineProductUrlResolver : IValueResolver<AgriculturalMachineProduct, AgriculturalMachineProductDto, string>
    {
        private readonly IConfiguration _config;

        public AgriculturalMachineProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(AgriculturalMachineProduct source, AgriculturalMachineProductDto destination, string destMember,
            ResolutionContext context)
        {
            return ImageUrlNormalizer.Normalize(source.PictureUrl, _config["ApiUrl"]);
        }
    }
}
