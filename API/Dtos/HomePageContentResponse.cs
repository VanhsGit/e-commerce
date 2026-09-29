using Core.HomeContent;

namespace API.Dtos;

public sealed record HomePageContentResponse(HomePageContentDocument Content, DateTime UpdatedAt);
