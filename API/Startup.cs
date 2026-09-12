using System;
using System.IO;
using API.Extensions;
using API.Helpers;
using API.Middleware;
using AutoMapper;
using Infrastructure.Data;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;
using Microsoft.Net.Http.Headers;
using StackExchange.Redis;
using Infrastructure.Services;


namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IWebHostEnvironment _env;

        public Startup(IConfiguration config, IWebHostEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureDevelopmentServices(IServiceCollection services)
        {
            services.AddDbContext<StoreContext>(x =>
            {
                x.UseNpgsql(_config.GetConnectionString("DefaultConnection"));
            });

            services.AddDbContext<AppIdentityDbContext>(x =>
                {
                    x.UseNpgsql(_config.GetConnectionString("DefaultConnection"));
                });

            ConfigureServices(services);
        }

        public void ConfigureProductionServices(IServiceCollection services)
        {
            var defaultConnection = _config.GetConnectionString("DefaultConnection");

            services.AddDbContext<StoreContext>(x =>
            {
                x.UseNpgsql(defaultConnection);
            });

            services.AddDbContext<AppIdentityDbContext>(x =>
                {
                    x.UseNpgsql(defaultConnection);
                });

            ConfigureServices(services);
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<MediaStorageOptions>(_config.GetSection(MediaStorageOptions.SectionName));
            services.Configure<OtpOptions>(_config.GetSection(OtpOptions.SectionName));
            services.AddAutoMapper(typeof(MappingProfiles));
            services.AddControllers();
            

            services.AddSingleton<IConnectionMultiplexer>(c =>
            {
                var configuaration = ConfigurationOptions.Parse(_config.GetConnectionString("Redis"), true);
                return ConnectionMultiplexer.Connect(configuaration);
            });

            services.AddApplicationServices();

            services.AddIdentityServices(_config);

            services.AddSwaggerDocumentation();

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy",
                    policy => { policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200", "https://localhost:4200"); });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}

            app.UseMiddleware<ExceptionMiddleware>();

            app.UseStatusCodePagesWithReExecute("/errors/{0}");

            app.UseHttpsRedirection();

            app.UseRouting();

            StaticFileOptions BuildNoCacheStaticFileOptions(string? requestPath, PhysicalFileProvider provider)
            {
                var opts = new StaticFileOptions
                {
                    FileProvider = provider,
                    OnPrepareResponse = ctx =>
                    {
                        var headers = ctx.Context.Response.Headers;
                        headers[HeaderNames.CacheControl] = "no-cache, no-store, must-revalidate";
                        headers[HeaderNames.Pragma] = "no-cache";
                        headers[HeaderNames.Expires] = "0";
                    }
                };
                if (!string.IsNullOrEmpty(requestPath)) opts.RequestPath = requestPath;
                return opts;
            }

            var wwwroot = Path.Combine(env.ContentRootPath, "wwwroot");
            if (Directory.Exists(wwwroot))
            {
                app.UseStaticFiles(BuildNoCacheStaticFileOptions(null, new PhysicalFileProvider(wwwroot)));
            }
            else
            {
                app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = ctx =>
                    {
                        var headers = ctx.Context.Response.Headers;
                        headers[HeaderNames.CacheControl] = "no-cache, no-store, must-revalidate";
                        headers[HeaderNames.Pragma] = "no-cache";
                        headers[HeaderNames.Expires] = "0";
                    }
                });
            }

            var mediaOptions = app.ApplicationServices.GetRequiredService<IOptions<MediaStorageOptions>>().Value;
            var mediaRoot = Path.GetFullPath(Path.IsPathRooted(mediaOptions.RootPath)
                ? mediaOptions.RootPath
                : Path.Combine(env.ContentRootPath, mediaOptions.RootPath));
            Directory.CreateDirectory(mediaRoot);
            app.UseStaticFiles(BuildNoCacheStaticFileOptions(
                mediaOptions.RequestPath,
                new PhysicalFileProvider(mediaRoot)));
            app.UseStaticFiles(BuildNoCacheStaticFileOptions(
                "/content",
                new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Content"))));

            app.Use(async (context, next) =>
            {
                context.Response.OnStarting(() =>
                {
                    var path = context.Request.Path.Value ?? string.Empty;
                    var contentType = context.Response.ContentType ?? string.Empty;
                    var isHtml = path.EndsWith(".html", StringComparison.OrdinalIgnoreCase)
                                   || contentType.StartsWith("text/html", StringComparison.OrdinalIgnoreCase);
                    if (isHtml || path == "/" || path.Length == 0)
                    {
                        var headers = context.Response.Headers;
                        headers[HeaderNames.CacheControl] = "no-cache, no-store, must-revalidate";
                        headers[HeaderNames.Pragma] = "no-cache";
                        headers[HeaderNames.Expires] = "0";
                    }
                    return Task.CompletedTask;
                });
                await next();
            });

            app.UseCors("CorsPolicy");

            app.UseAuthentication();

            app.UseMiddleware<ActiveUserMiddleware>();

            app.UseAuthorization();

            app.UseSwaggerDocumentaion();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = Path.Combine(env.ContentRootPath, "..", "client");
                spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                {
                    OnPrepareResponse = ctx =>
                    {
                        var headers = ctx.Context.Response.Headers;
                        headers[HeaderNames.CacheControl] = "no-cache, no-store, must-revalidate";
                        headers[HeaderNames.Pragma] = "no-cache";
                        headers[HeaderNames.Expires] = "0";
                    }
                };
                if (_env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });
        }
    }
}
