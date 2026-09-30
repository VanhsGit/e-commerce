namespace Core.Entities;

public sealed class CategoryPageContent : BaseEntity
{
    public const string BikeId = "bike";
    public const string MachineId = "machine";
    public const string ApplianceId = "appliance";

    public string ContentJson { get; set; } = string.Empty;
    public DateTime UpdatedAt { get; set; }
}
