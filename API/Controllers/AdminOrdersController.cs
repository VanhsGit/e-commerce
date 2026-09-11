using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Dtos;
using Core.Entities.OrderAggregate;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    [Route("api/admin/orders")]
    public class AdminOrdersController : ControllerBase
    {
        private readonly StoreContext _context;
        public AdminOrdersController(StoreContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AdminOrderDto>>> List(CancellationToken cancellationToken)
        {
            var orders = await Query().OrderByDescending(x => x.OrderDate).ToListAsync(cancellationToken);
            return Ok(orders.Select(ToDto));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AdminOrderDto>> Get(int id, CancellationToken cancellationToken)
        {
            var order = await Query().FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
            return order == null ? NotFound() : Ok(ToDto(order));
        }

        [HttpPost]
        public async Task<ActionResult<AdminOrderDto>> Create(SaveAdminOrderDto dto, CancellationToken cancellationToken)
        {
            var deliveryMethod = await _context.DeliveryMethods
                .FirstOrDefaultAsync(x => x.Id == dto.DeliveryMethodId && x.IsUsed, cancellationToken);
            if (deliveryMethod == null) return BadRequest("Delivery method is invalid or inactive.");
            if (dto.OrderItems == null || dto.OrderItems.Count == 0) return BadRequest("At least one order item is required.");

            var order = new Order
            {
                BuyerEmail = dto.BuyerEmail.Trim(),
                ShipToAddress = ToAddress(dto.ShipToAddress),
                DeliveryMethod = deliveryMethod,
                OrderItems = dto.OrderItems.Select(ToOrderItem).ToList(),
                Subtotal = dto.Subtotal ?? dto.OrderItems.Sum(x => x.Price * x.Quantity),
                Status = dto.Status,
                PaymentIntentId = dto.PaymentIntentId ?? string.Empty,
                IsUsed = dto.IsUsed
            };
            _context.Orders.Add(order);
            await _context.SaveChangesAsync(cancellationToken);
            return CreatedAtAction(nameof(Get), new { id = order.Id }, ToDto(order));
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<AdminOrderDto>> Update(int id, SaveAdminOrderDto dto, CancellationToken cancellationToken)
        {
            var order = await Query(tracking: true).FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
            if (order == null) return NotFound();
            var deliveryMethod = await _context.DeliveryMethods
                .FirstOrDefaultAsync(x => x.Id == dto.DeliveryMethodId, cancellationToken);
            if (deliveryMethod == null) return BadRequest("Delivery method does not exist.");

            order.BuyerEmail = dto.BuyerEmail.Trim();
            order.ShipToAddress = ToAddress(dto.ShipToAddress);
            order.DeliveryMethod = deliveryMethod;
            order.Status = dto.Status;
            order.PaymentIntentId = dto.PaymentIntentId ?? string.Empty;
            order.IsUsed = dto.IsUsed;

            if (dto.OrderItems != null)
            {
                _context.OrderItems.RemoveRange(order.OrderItems);
                order.OrderItems = dto.OrderItems.Select(ToOrderItem).ToList();
                order.Subtotal = dto.Subtotal ?? dto.OrderItems.Sum(x => x.Price * x.Quantity);
            }
            else if (dto.Subtotal.HasValue)
            {
                order.Subtotal = dto.Subtotal.Value;
            }

            await _context.SaveChangesAsync(cancellationToken);
            return Ok(ToDto(order));
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            var order = await Query(tracking: true).FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
            if (order == null) return NotFound();
            order.IsUsed = false;
            foreach (var item in order.OrderItems) item.IsUsed = false;
            await _context.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        private IQueryable<Order> Query(bool tracking = false)
        {
            var query = _context.Orders.Include(x => x.DeliveryMethod).Include(x => x.OrderItems).AsQueryable();
            return tracking ? query : query.AsNoTracking();
        }

        private static OrderItem ToOrderItem(SaveAdminOrderItemDto item) => new(
            new ProductItemOrdered(item.ProductId, item.ProductName.Trim(), item.PictureUrl ?? string.Empty)
            {
                IsUsed = item.IsUsed
            },
            item.Price,
            item.Quantity)
        {
            IsUsed = item.IsUsed
        };

        private static Address ToAddress(AddressDto address) => new(
            address.FirstName,
            address.LastName,
            address.Street,
            address.City,
            address.State,
            address.Zipcode)
        {
            IsUsed = true
        };

        private static AdminOrderDto ToDto(Order order) => new()
        {
            Id = order.Id,
            BuyerEmail = order.BuyerEmail,
            OrderDate = order.OrderDate,
            ShipToAddress = new AddressDto
            {
                FirstName = order.ShipToAddress.FirstName,
                LastName = order.ShipToAddress.LastName,
                Street = order.ShipToAddress.Street,
                City = order.ShipToAddress.City,
                State = order.ShipToAddress.State,
                Zipcode = order.ShipToAddress.Zipcode
            },
            DeliveryMethodId = order.DeliveryMethod.Id,
            DeliveryMethodName = order.DeliveryMethod.ShortName,
            ShippingPrice = order.DeliveryMethod.Price,
            OrderItems = order.OrderItems.Select(item => new AdminOrderItemDto
            {
                Id = item.Id,
                ProductId = item.ItemOrdered.ProductItemId,
                ProductName = item.ItemOrdered.ProductName,
                PictureUrl = item.ItemOrdered.PictureUrl,
                Price = item.Price,
                Quantity = item.Quantity,
                IsUsed = item.IsUsed
            }).ToList(),
            Subtotal = order.Subtotal,
            Total = order.GetTotal(),
            Status = order.Status,
            PaymentIntentId = order.PaymentIntentId,
            IsUsed = order.IsUsed
        };
    }
}
