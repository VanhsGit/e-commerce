using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Core.Entities.Identity;
using Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Xunit;

namespace API.Tests;

/// <summary>
/// Verifies that roles passed to TokenService.CreateToken round-trip through a real JWT:
/// issued with JwtSecurityTokenHandler.CreateToken (as TokenService does) and validated
/// with the exact TokenValidationParameters API.Extensions.IdentityServiceExtension
/// configures for JwtBearer, so ClaimsPrincipal.IsInRole(...) — which is what
/// [Authorize(Roles = "...")] and User.IsInRole rely on — works for the resulting token.
/// This guards against claim-type mapping regressions (JwtRegisteredClaimNames vs.
/// ClaimTypes, inbound/outbound claim maps) that would otherwise make role-based
/// authorization silently pass tokens with no usable role claims.
/// </summary>
public sealed class TokenServiceTests
{
    private static IConfiguration BuildConfig() =>
        new ConfigurationBuilder()
            .AddInMemoryCollection(new Dictionary<string, string?>
            {
                ["Token:Key"] = "a-very-long-secret-key-for-my-ecommerce-jwt-token-hs512-2026-secure-key-123456789",
                ["Token:Issuer"] = "https://localhost:5001"
            })
            .Build();

    private static ClaimsPrincipal ValidateToken(string token, IConfiguration config)
    {
        var validationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"]!)),
            ValidIssuer = config["Token:Issuer"],
            ValidateIssuer = true,
            ValidateAudience = false
        };

        var handler = new JwtSecurityTokenHandler();
        return handler.ValidateToken(token, validationParameters, out _);
    }

    [Fact]
    public void CreateToken_WithRoles_RoundTripsAsRoleClaimsThatIsInRoleRecognizes()
    {
        var config = BuildConfig();
        var tokenService = new TokenService(config);
        var user = new AppUser { Email = "admin@example.com", DisplayName = "Admin User" };

        var token = tokenService.CreateToken(user, new[] { "Admin", "Manager" });
        var principal = ValidateToken(token, config);

        Assert.True(principal.IsInRole("Admin"));
        Assert.True(principal.IsInRole("Manager"));
        Assert.False(principal.IsInRole("Staff"));
    }

    [Fact]
    public void CreateToken_WithNoRoles_ProducesTokenWithNoRoleClaims()
    {
        var config = BuildConfig();
        var tokenService = new TokenService(config);
        var user = new AppUser { Email = "plain@example.com", DisplayName = "Plain User" };

        var token = tokenService.CreateToken(user, Array.Empty<string>());
        var principal = ValidateToken(token, config);

        Assert.False(principal.IsInRole("Admin"));
        Assert.Empty(principal.FindAll(ClaimTypes.Role));
    }

    [Fact]
    public void CreateToken_StillCarriesEmailAndDisplayNameClaims()
    {
        // JwtSecurityTokenHandler inbound-maps the short "email"/"given_name" JWT claim
        // names to their long ClaimTypes.* URIs on validation (DefaultInboundClaimTypeMap),
        // which is what API.Extensions.ClaimsPrincipalExtension.RetriveEmailFromPrincipal
        // and AccountController rely on to identify the caller — so assert against those,
        // not the short JwtRegisteredClaimNames the token was written with.
        var config = BuildConfig();
        var tokenService = new TokenService(config);
        var user = new AppUser { Email = "someone@example.com", DisplayName = "Someone" };

        var token = tokenService.CreateToken(user, new[] { "User" });
        var principal = ValidateToken(token, config);

        Assert.Equal("someone@example.com", principal.FindFirst(ClaimTypes.Email)?.Value);
        Assert.Equal("Someone", principal.FindFirst(ClaimTypes.GivenName)?.Value);
    }
}
