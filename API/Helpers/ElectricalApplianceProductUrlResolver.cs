using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ElectricalApplianceProductUrlResolver
        : IValueResolver<ElectricalApplianceProduct, ElectricalApplianceProductDto, string>
    {
        private readonly IConfiguration _config;

        public ElectricalApplianceProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(
            ElectricalApplianceProduct source,
            ElectricalApplianceProductDto destination,
            string destMember,
            ResolutionContext context)
        {
            return ImageUrlNormalizer.Normalize(source.PictureUrl, _config["ApiUrl"]) ?? string.Empty;
        }
    }
}
