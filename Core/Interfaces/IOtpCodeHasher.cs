namespace Core.Interfaces
{
    public interface IOtpCodeHasher
    {
        string Hash(string normalizedEmail, string code);
        bool Verify(string normalizedEmail, string code, string expectedHash);
    }
}
