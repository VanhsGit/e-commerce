using System;

namespace Core.Entities
{
    public class BaseEntity
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public bool IsUsed { get; set; } = true;
    }
}
