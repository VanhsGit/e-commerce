namespace Core.Entities
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public bool IsUsed { get; set; } = true;
    }
}
