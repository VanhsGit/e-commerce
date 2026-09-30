namespace Core.Entities;

public sealed class SiteSettings : BaseEntity
{
    public const string SingletonId = "site";

    public string ContentJson { get; set; } = string.Empty;
    public DateTime UpdatedAt { get; set; }
}
