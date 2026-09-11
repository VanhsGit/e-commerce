# Passwordless OTP Authentication Design

## Scope

This phase replaces password login with a two-step email OTP flow. During development the OTP is written to application logs. The delivery boundary allows SMTP or another provider to be introduced later without changing controller contracts.

## User Model

`AppUser` remains an ASP.NET Identity user so normalization, uniqueness, claims helpers, and existing foreign context behavior remain available. Users are created with `UserManager.CreateAsync(user)` and no password. Existing password hashes may remain in the database but are never checked by the login API.

An inactive user cannot request a usable OTP, verify an OTP, refresh their current session, or access authenticated APIs once token validation resolves the user state. User creation is managed from the authenticated admin workspace and only requires email plus optional display name.

## OTP Record

Store OTP challenges in the Identity database with:

- ID, normalized email, hashed code, created/expiry timestamps, attempt count, maximum attempts, consumed timestamp, request IP where available, and `IsUsed`.

Codes are six decimal digits, expire after five minutes, are single use, and allow five verification attempts. Generating a new challenge invalidates earlier active challenges for the same normalized email. Only a keyed cryptographic hash of the code is stored. Expired, consumed, superseded, or attempt-exhausted records cannot authenticate.

## Flow

`POST /api/account/request-otp` accepts an email. It always returns the same accepted response so callers cannot enumerate users. For an existing active user it creates a challenge and sends the code through `IOtpSender`; for unknown/inactive users it performs no delivery.

The development `LoggingOtpSender` logs the recipient and code at information level. It is registered only for Development. Production startup must fail with a clear configuration error until a real `IOtpSender` is configured, preventing accidental OTP logging in production.

`POST /api/account/verify-otp` accepts email and code. On success it atomically consumes the challenge and returns the existing user/JWT response. Invalid requests return a generic unauthorized response. Verification increments the attempt count atomically enough to prevent parallel reuse; the successful path marks the challenge consumed before issuing a token.

Request throttling applies per normalized email and remote IP. The initial policy permits one request per 60 seconds and five requests per 15 minutes. API responses include a generic retry interval without revealing whether a user exists.

## Angular Login

The login page becomes a two-step experience. Step one submits email and always moves to the OTP entry state after an accepted response. Step two submits the six-digit code, stores the returned JWT through `AccountService`, and returns to the requested URL. Users can resend when the cooldown ends or change the email to restart.

The UI never displays a development OTP. Developers read it from backend logs. Password fields and password validation are removed from login and admin user creation.

## Compatibility and Security

The old password login endpoint is removed rather than kept as an undocumented bypass. JWT structure remains compatible with the current Angular guard. JWT validation is extended so authenticated access resolves the user and rejects inactive/missing users; this closes the gap where a previously issued seven-day token could outlive user deactivation.

OTP values are never returned in API responses or persisted in plaintext. Logs are development-only and must not be enabled for production. Error responses do not distinguish unknown email, inactive user, expired challenge, or wrong code.

## Testing

Backend tests cover no-password user creation, generic request responses, hashing, expiry, supersession, attempt limits, single use, inactive users, throttling, parallel verification, and token issuance. Angular tests cover both steps, resend cooldown, generic errors, successful token storage, and return URL handling. Full .NET and Angular builds are required.

