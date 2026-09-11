# Passwordless OTP Authentication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace password login with a secure two-step email OTP flow whose development sender logs codes.

**Architecture:** OTP challenges live in the Identity database and are managed by an isolated service that hashes, expires, supersedes, throttles, and consumes codes. Controllers expose generic responses, while Angular owns the two-step interaction and existing JWT storage.

**Tech Stack:** .NET 10, ASP.NET Core Identity/JWT/rate limiting, EF Core 10, cryptographic HMAC, Angular 20, Jasmine/Karma.

**Spec:** `docs/superpowers/specs/2026-09-11-passwordless-otp-design.md`

## Global Constraints

- OTP codes are six digits, expire after five minutes, permit five attempts, and are single use.
- Codes are hash-only in the database and logged only in Development.
- Request/verification errors do not reveal user existence or activation.
- Password login is removed.
- JWT-authenticated access rejects inactive or missing users.

---

### Task 1: OTP challenge persistence and hashing

**Files:**
- Create: `Core/Entities/Identity/OtpChallenge.cs`
- Create: `Core/Interfaces/IOtpCodeHasher.cs`
- Create: `Infrastructure/Identity/OtpCodeHasher.cs`
- Modify: `Infrastructure/Identity/AppIdentityDbContext.cs`
- Create: `Infrastructure/Identity/Config/OtpChallengeConfiguration.cs`
- Create: `Infrastructure/Identity/Migrations/20260911101500_AddOtpChallenges.cs`
- Modify: `Infrastructure/Identity/Migrations/AppIdentityDbContextModelSnapshot.cs`
- Create: `Tests/Infrastructure.Tests/OtpCodeHasherTests.cs`

**Interfaces:**
- Produces: `string Hash(string normalizedEmail, string code)` and `bool Verify(string normalizedEmail, string code, string hash)`.
- Produces: `DbSet<OtpChallenge> OtpChallenges`.

- [ ] **Step 1: Write failing hash tests**

```csharp
[Fact]
public void Hash_does_not_contain_plain_code_and_verifies_only_matching_email()
{
    var hash = _hasher.Hash("USER@EXAMPLE.COM", "123456");
    hash.Should().NotContain("123456");
    _hasher.Verify("USER@EXAMPLE.COM", "123456", hash).Should().BeTrue();
    _hasher.Verify("OTHER@EXAMPLE.COM", "123456", hash).Should().BeFalse();
}
```

- [ ] **Step 2: Run and verify tests fail because hasher is absent**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter OtpCodeHasherTests`

- [ ] **Step 3: Implement HMAC-based hashing, fixed-time comparison, entity mapping, and indexes**

```csharp
var payload = Encoding.UTF8.GetBytes($"{normalizedEmail}:{code}");
var digest = HMACSHA256.HashData(_key, payload);
return Convert.ToBase64String(digest);
```

- [ ] **Step 4: Generate migration and rerun tests**

Run: `dotnet ef migrations add AddOtpChallenges --project Infrastructure --startup-project API --context AppIdentityDbContext --output-dir Identity/Migrations`

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter OtpCodeHasherTests`

- [ ] **Step 5: Commit**

```bash
git add Core Infrastructure Tests/Infrastructure.Tests
git commit -m "feat: add secure OTP challenge persistence"
```

### Task 2: OTP service, logging sender, and throttling

**Files:**
- Create: `Core/Interfaces/IOtpSender.cs`
- Create: `Core/Interfaces/IOtpService.cs`
- Create: `Infrastructure/Services/OtpService.cs`
- Create: `Infrastructure/Services/LoggingOtpSender.cs`
- Create: `Infrastructure/Services/OtpOptions.cs`
- Modify: `API/Startup.cs`
- Modify: `API/appsettings.Development.json`
- Create: `Tests/Infrastructure.Tests/OtpServiceTests.cs`

**Interfaces:**
- Produces: `Task RequestAsync(string email, string? remoteIp, CancellationToken cancellationToken)`.
- Produces: `Task<AppUser?> VerifyAsync(string email, string code, CancellationToken cancellationToken)`.
- Produces: `Task SendAsync(string email, string code, CancellationToken cancellationToken)`.

- [ ] **Step 1: Write failing lifecycle tests**

```csharp
[Fact]
public async Task New_request_supersedes_previous_challenge()
{
    await _service.RequestAsync(_user.Email!, "127.0.0.1", default);
    await _clock.AdvanceAsync(TimeSpan.FromSeconds(61));
    await _service.RequestAsync(_user.Email!, "127.0.0.1", default);
    _db.OtpChallenges.Count(x => x.IsUsed).Should().Be(1);
}

[Fact]
public async Task Code_is_consumed_once()
{
    var code = await RequestAndCaptureCode();
    (await _service.VerifyAsync(_user.Email!, code, default)).Should().NotBeNull();
    (await _service.VerifyAsync(_user.Email!, code, default)).Should().BeNull();
}
```

- [ ] **Step 2: Run and verify lifecycle tests fail**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter OtpServiceTests`

- [ ] **Step 3: Implement code generation, lifecycle, attempt limits, throttling, and development sender registration**

Use `RandomNumberGenerator.GetInt32(0, 1_000_000).ToString("D6")`. Register `LoggingOtpSender` only from `ConfigureDevelopmentServices`; production requires an explicit sender registration.

- [ ] **Step 4: Run lifecycle tests and build**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter OtpServiceTests`

Run: `dotnet build skinet.sln`

- [ ] **Step 5: Commit**

```bash
git add Core Infrastructure API Tests/Infrastructure.Tests
git commit -m "feat: implement OTP lifecycle and development sender"
```

### Task 3: Account OTP endpoints and inactive-user enforcement

**Files:**
- Create: `API/Dtos/RequestOtpDto.cs`
- Create: `API/Dtos/VerifyOtpDto.cs`
- Remove: `API/Dtos/LoginDto.cs`
- Modify: `API/Controllers/AccountController.cs`
- Modify: `API/Extensions/IdentityServiceExtension.cs`
- Create: `API/Middleware/ActiveUserMiddleware.cs`
- Modify: `API/Startup.cs`
- Create: `Tests/API.Tests/OtpAuthenticationTests.cs`

**Interfaces:**
- Produces: `POST /api/account/request-otp`.
- Produces: `POST /api/account/verify-otp` returning `UserDto` with JWT.
- Removes: `POST /api/account/login` password contract.

- [ ] **Step 1: Write failing endpoint/security tests**

```csharp
[Fact]
public async Task Request_returns_same_response_for_known_and_unknown_email()
{
    var known = await _client.PostAsJsonAsync("/api/account/request-otp", new { email = _user.Email });
    var unknown = await _client.PostAsJsonAsync("/api/account/request-otp", new { email = "missing@example.com" });
    known.StatusCode.Should().Be(unknown.StatusCode);
    await known.Content.ReadAsStringAsync().Should().Be(await unknown.Content.ReadAsStringAsync());
}

[Fact]
public async Task Jwt_for_deactivated_user_is_rejected()
{
    _user.IsUsed = false;
    await _users.UpdateAsync(_user);
    (await _client.WithBearer(_existingToken).GetAsync("/api/account")).StatusCode.Should().Be(HttpStatusCode.Unauthorized);
}
```

- [ ] **Step 2: Run and verify endpoint tests fail**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter OtpAuthenticationTests`

- [ ] **Step 3: Implement DTOs/endpoints, remove password endpoint, and enforce active users**

The request endpoint always returns `202 Accepted` with `{ message: "If the account is available, an OTP has been sent." }`. Verification returns generic 401 on failure and `UserDto` on success.

- [ ] **Step 4: Run authentication tests and backend build**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter OtpAuthenticationTests`

Run: `dotnet build skinet.sln`

- [ ] **Step 5: Commit**

```bash
git add API Tests/API.Tests
git commit -m "feat: replace password login with OTP"
```

### Task 4: Two-step Angular login

**Files:**
- Modify: `client/src/app/account/account.service.ts`
- Modify: `client/src/app/account/login/login.component.ts`
- Modify: `client/src/app/account/login/login.component.html`
- Create: `client/src/app/account/login/login.component.spec.ts`
- Modify: `client/src/app/admin/users/*`

**Interfaces:**
- Produces: `requestOtp(email: string)` and `verifyOtp(email: string, code: string)`.
- Removes: `login({ email, password })` and all password inputs.

- [ ] **Step 1: Write failing login-flow tests**

```typescript
it('requests a code then verifies and navigates to returnUrl', () => {
  account.requestOtp.and.returnValue(of({ message: 'accepted' }));
  account.verifyOtp.and.returnValue(of(user));
  component.email = 'user@example.com';
  component.requestCode();
  expect(component.step()).toBe('verify');
  component.code = '123456';
  component.verifyCode();
  expect(router.navigateByUrl).toHaveBeenCalledWith('/admin');
});

it('never renders a password input', () => {
  expect(fixture.nativeElement.querySelector('input[type=password]')).toBeNull();
});
```

- [ ] **Step 2: Run and verify login tests fail**

Run: `npm test -- --include src/app/account/login/login.component.spec.ts`

- [ ] **Step 3: Implement two-step UI, resend cooldown, change-email action, token persistence, and password-free admin user form**

Use a six-character numeric input, disable resend for 60 seconds, clear timers on destroy, and retain the route `returnUrl`.

- [ ] **Step 4: Run Angular tests and build**

Run: `npm test`

Run: `npm run build`

- [ ] **Step 5: Run full verification and commit**

Run: `dotnet test skinet.sln`

Run: `dotnet build skinet.sln`

Run: `npm test`

Run: `npm run build`

```bash
git add client/src/app
git commit -m "feat: add passwordless OTP login experience"
```
