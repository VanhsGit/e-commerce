using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class SwaggerServiceExtension
    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {
            return services;
        }

        public static IApplicationBuilder UseSwaggerDocumentaion(this IApplicationBuilder app)
        {
            return app;
        }
    }
}
