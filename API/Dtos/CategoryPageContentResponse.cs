using Core.PageContent;

namespace API.Dtos;

public sealed record CategoryPageContentResponse(CategoryPageContentDocument Content, DateTime UpdatedAt);
