using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ElectricBikeProductUrlResolver : IValueResolver<ElectricBikeProduct, ElectricBikeProductDto, string>
    {
        private readonly IConfiguration _config;

        public ElectricBikeProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(ElectricBikeProduct source, ElectricBikeProductDto destination, string destMember,
            ResolutionContext context)
        {
            return ImageUrlNormalizer.Normalize(source.PictureUrl, _config["ApiUrl"]);
        }
    }
}
