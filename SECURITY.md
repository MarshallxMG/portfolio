# Security Policy

This is a personal portfolio site: static pages, no backend, no database,
no authentication, and no API keys or secrets in the codebase or bundle.

## Reporting a vulnerability
If you find a security issue (e.g. a CSP bypass, dependency vulnerability,
or anything else), please email **manasgoel2003@gmail.com** with details.
Please don't open a public GitHub issue for security reports.

## Hardening in place
- Strict `Content-Security-Policy` (no third-party scripts/styles/frames/iframes)
- `X-Frame-Options: DENY` + `frame-ancestors 'none'` (anti-clickjacking)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling camera/mic/geolocation/etc.
- `Strict-Transport-Security` (HSTS) in production
- `X-Powered-By` header removed
- All external links use `rel="noopener noreferrer"`
- Dependencies tracked via `npm audit`; no known high/critical vulnerabilities
