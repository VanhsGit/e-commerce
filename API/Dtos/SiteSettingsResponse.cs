using Core.PageContent;

namespace API.Dtos;

public sealed record SiteSettingsResponse(SiteSettingsDocument Content, DateTime UpdatedAt);
