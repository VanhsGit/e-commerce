using API.Errors;
using API.Helpers;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace API.Controllers;

[ApiController]
[Route("api/qr")]
[AllowAnonymous]
public sealed class QrController(IUnitOfWork unitOfWork, IOptionsSnapshot<QrRedirectOptions> options) : ControllerBase
{
    [HttpGet("products/{kind}/{id}")]
    [ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]
    [ProducesResponseType(StatusCodes.Status302Found)]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Product(string kind, string id)
    {
        var normalizedKind = kind.ToLowerInvariant();
        BaseEntity? product = normalizedKind switch
        {
            "bike" => await unitOfWork.Repository<ElectricBikeProduct>().GetByIdAsync(id),
            "machine" => await unitOfWork.Repository<AgriculturalMachineProduct>().GetByIdAsync(id),
            "appliance" => await unitOfWork.Repository<ElectricalApplianceProduct>().GetByIdAsync(id),
            _ => null,
        };
        if (product == null || !product.IsUsed)
            return NotFound(new ApiResponse(404, "Không tìm thấy sản phẩm"));

        // Chỉ lấy đích từ cấu hình máy chủ, không nhận URL chuyển hướng từ query string.
        return Redirect(options.Value.ProductUrl(normalizedKind, product.Id));
    }
}
