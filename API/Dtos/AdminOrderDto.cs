using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities.OrderAggregate;

namespace API.Dtos
{
    public class AdminOrderDto
    {
        public int Id { get; set; }
        public string BuyerEmail { get; set; } = string.Empty;
        public DateTimeOffset OrderDate { get; set; }
        public AddressDto ShipToAddress { get; set; } = new();
        public int DeliveryMethodId { get; set; }
        public string DeliveryMethodName { get; set; } = string.Empty;
        public decimal ShippingPrice { get; set; }
        public List<AdminOrderItemDto> OrderItems { get; set; } = new();
        public decimal Subtotal { get; set; }
        public decimal Total { get; set; }
        public OrderStatus Status { get; set; }
        public string PaymentIntentId { get; set; } = string.Empty;
        public bool IsUsed { get; set; }
    }

    public class AdminOrderItemDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string PictureUrl { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public bool IsUsed { get; set; }
    }

    public class SaveAdminOrderDto
    {
        [Required, EmailAddress] public string BuyerEmail { get; set; } = string.Empty;
        [Required] public AddressDto ShipToAddress { get; set; } = new();
        [Range(1, int.MaxValue)] public int DeliveryMethodId { get; set; }
        public List<SaveAdminOrderItemDto>? OrderItems { get; set; }
        public decimal? Subtotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; } = string.Empty;
        public bool IsUsed { get; set; } = true;
    }

    public class SaveAdminOrderItemDto
    {
        [Range(1, int.MaxValue)] public int ProductId { get; set; }
        [Required] public string ProductName { get; set; } = string.Empty;
        public string PictureUrl { get; set; } = string.Empty;
        [Range(0, double.MaxValue)] public decimal Price { get; set; }
        [Range(1, int.MaxValue)] public int Quantity { get; set; } = 1;
        public bool IsUsed { get; set; } = true;
    }
}
