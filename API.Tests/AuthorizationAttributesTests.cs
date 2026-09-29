using System.Reflection;
using API.Controllers;
using API.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace API.Tests;

/// <summary>
/// Locks in the endpoint -> role mapping decided for role-based authorization: which
/// controllers/actions require which roles, and which public GETs stay anonymous. A
/// regression here (e.g. someone reverting an [Authorize(Roles=...)] back to a bare
/// [Authorize], or dropping it entirely) would silently reopen or lock down an endpoint,
/// so this is asserted by reflection rather than relying on manual review.
/// </summary>
public sealed class AuthorizationAttributesTests
{
    private static AuthorizeAttribute? ClassAuthorize<T>() =>
        typeof(T).GetCustomAttribute<AuthorizeAttribute>();

    private static AuthorizeAttribute? MethodAuthorize<T>(string methodName) =>
        typeof(T).GetMethod(methodName, BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly)
            ?.GetCustomAttribute<AuthorizeAttribute>();

    [Fact]
    public void AdminUsersController_RequiresAdminOnTheWholeController()
    {
        var classAttribute = ClassAuthorize<AdminUsersController>();
        Assert.NotNull(classAttribute);
        Assert.Equal(AppRoles.Admin, classAttribute!.Roles);
    }

    [Fact]
    public void EntityImagesController_RequiresBackOfficeOnTheWholeController()
    {
        var classAttribute = ClassAuthorize<EntityImagesController>();
        Assert.NotNull(classAttribute);
        Assert.Equal(AppRoles.BackOffice, classAttribute!.Roles);
    }

    [Fact]
    public void HomeContentController_PutRequiresContentEditors_GetIsPublic()
    {
        Assert.Null(MethodAuthorize<HomeContentController>(nameof(HomeContentController.Get)));

        var put = MethodAuthorize<HomeContentController>(nameof(HomeContentController.Put));
        Assert.NotNull(put);
        Assert.Equal(AppRoles.ContentEditors, put!.Roles);
    }

    [Theory]
    [InlineData(typeof(BrandsController), "GetBrands", "GetBrand", "CreateBrand", "UpdateBrand", "DeleteBrand")]
    [InlineData(typeof(CompaniesController), "GetCompanies", "GetCompany", "CreateCompany", "UpdateCompany", "DeleteCompany")]
    [InlineData(typeof(AgriculturalMachineProductsController), "GetAgriculturalMachineProducts", "GetAgriculturalMachineProduct", "Create", "Update", "Delete")]
    [InlineData(typeof(ElectricBikeProductsController), "GetElectricBikeProducts", "GetElectricBikeProduct", "Create", "Update", "Delete")]
    [InlineData(typeof(ElectricalApplianceProductsController), "GetElectricalApplianceProducts", "GetElectricalApplianceProduct", "Create", "Update", "Delete")]
    public void CatalogController_WritesRequireBackOffice_ReadsArePublic(
        Type controllerType, string listMethod, string getMethod, string createMethod, string updateMethod, string deleteMethod)
    {
        Assert.Null(controllerType.GetCustomAttribute<AuthorizeAttribute>());

        var list = controllerType.GetMethod(listMethod)!.GetCustomAttribute<AuthorizeAttribute>();
        var get = controllerType.GetMethod(getMethod)!.GetCustomAttribute<AuthorizeAttribute>();
        Assert.Null(list);
        Assert.Null(get);

        foreach (var writeMethod in new[] { createMethod, updateMethod, deleteMethod })
        {
            var attribute = controllerType.GetMethod(writeMethod)!.GetCustomAttribute<AuthorizeAttribute>();
            Assert.NotNull(attribute);
            Assert.Equal(AppRoles.BackOffice, attribute!.Roles);
        }
    }
}
