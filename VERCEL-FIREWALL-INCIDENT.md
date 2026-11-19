# BIM Africa: legacy /index.php blocked before application routing

Verified: 19 November 2026, 14:37–14:38 Asia/Karachi (09:37–09:38 UTC).

Status: unresolved; no production configuration changes made.

## Project

- Team: rahul-mohabirs-projects (`team_SSG0WkgemC8EHO5UYAhWMH4D`)
- Project: bim-africa (`prj_AiWVqdNZazbfs8THtHooPh31SMBR`)
- Production deployment reported by Vercel: `dpl_AZBaaT82AvhvnkaVkCtcvvk3bbYF`
- Production domain: https://bim.africa

## Reproduction

```powershell
curl.exe -sS -i https://bim.africa/index.php
curl.exe -sS -I https://bim.africa/
curl.exe -sS -I https://www.bim.africa/index.php
curl.exe -sS -I https://bim.africa/test-legacy.php
```

Observed responses:

| URL | Status | Relevant headers |
| --- | --- | --- |
| https://bim.africa/index.php | 403 | `X-Vercel-Mitigated: deny`; `X-Vercel-Id: bom1::g2frt-1795081107353-5c91858cb943` |
| https://bim.africa/ | 200 | `X-Matched-Path: /`; `X-Vercel-Cache: HIT` |
| https://www.bim.africa/index.php | 308 | `Location: https://bim.africa/index.php` |
| https://bim.africa/test-legacy.php | 403 | `X-Vercel-Mitigated: deny`; `X-Vercel-Id: bom1::vgvhs-1795081108896-c6e007e9cf34` |

The GET response body for /index.php is Forbidden, with the Vercel request ID.

## Configuration inspected

Active firewall configuration version 6, ID `waf_fYrQqZpgUenl`:

- Firewall enabled.
- No custom rules (`rules: []`).
- No IP rules (`ips: []`).
- Enabled CRS categories (gen, rce, xss, sqli) use log actions.
- PHP CRS category inactive, action log.
- Bot Protection active, action log.
- AI Bots deny setting inactive.
- Deployment Authentication applies to deployment URLs, excluding custom domains.

Local next.config.ts already contains a permanent redirect from /index.php to /. The user reports it tested locally. Its presence in the production deployment has not been verified; the mitigation must be cleared before the public redirect can be validated.

## Assessment

The observed mitigation header, empty custom/IP rules, log-only enabled protections, and matching behavior on another PHP path strongly suggest platform-level filtering. The precise internal rule could not be identified with the connected tools. The observability query did not return results (API 400).

Vercel documents platform-wide filtering before Deployment Protection, project WAF, and application handling:
https://vercel.com/docs/vercel-firewall/firewall-concepts

Custom WAF bypass does not override system-level mitigations:
https://vercel.com/docs/vercel-firewall/vercel-waf/rule-configuration

## Ready-to-send support request

Subject: False-positive platform mitigation blocks legitimate legacy /index.php redirect on bim.africa

Please investigate the request IDs above and identify the platform mitigation returning 403 for the legitimate legacy URL https://bim.africa/index.php. We need public GET/HEAD requests to reach the configured permanent redirect to https://bim.africa/, including search crawlers and historical inbound links. Please remove the false positive or provide a supported path-specific exception. The project's active firewall configuration has no custom rules or IP blocks and its enabled protections only log. Please preserve general DDoS protection. A project-wide temporary mitigation pause or an IP-only bypass would not provide the required permanent public URL behavior.

Support portal: https://vercel.com/help
Firewall dashboard: https://vercel.com/rahul-mohabirs-projects/bim-africa/firewall

## Acceptance check after mitigation is corrected

1. Confirm the existing local redirect is present in the intended production deployment.
2. GET and HEAD /index.php must return a permanent redirect (301 or 308) to / or https://bim.africa/.
3. Following that redirect must end at the homepage with 200.
4. Repeat for www.bim.africa/index.php and an ordinary query string.
5. Confirm ordinary application URLs still work.
