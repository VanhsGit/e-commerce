namespace Core.Entities;

public sealed class HomePageContent : BaseEntity
{
    public const string SingletonId = "home";

    public string ContentJson { get; set; } = string.Empty;
    public DateTime UpdatedAt { get; set; }
}
