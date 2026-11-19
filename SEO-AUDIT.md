# BIM Africa SEO audit — 19 November 2026

## Search Console evidence

The supplied three-month report shows 10 clicks, 492 impressions, 2% CTR and average position 9.9. The seven-day report shows 2 clicks, 40 impressions, 5% CTR and position 9.7. These overlapping windows do not establish a traffic decline. Average position is an aggregate, not evidence that every target keyword ranks on page one.

“Website design mauritius” has 51 impressions and no clicks in the supplied table; branding-related queries also appear. Low volume and missing page-level/query-level positions prevent attributing the result to any one technical defect.

## Confirmed issues and implemented changes

| Area | Finding | Change |
| --- | --- | --- |
| Canonical | `/DigitalSupport` overrode its layout canonical with `https://www.bim.africa/DigitalSupportOutsourcing`, a different host and route | Correct page canonical and Open Graph URL; permanent legacy route redirect; www-host redirect |
| Homepage relevance | H1 was “Real Businesses. Real Work.” and opening copy did not explain website design in Mauritius | Descriptive service/location H1, introduction, title and description; service page title targets website design/development |
| About title | Similar service wording to other landing pages | Distinct About title |
| Social metadata | Several static pages inherited the root's generic social text | Shared helper supplies each page's title, description, canonical URL and share image |
| Sitemap dates | Every static URL claimed the same hardcoded date without evidence of modification | Omit unknown static lastmod; validate dynamic dates |
| Sitemap reliability | API errors were swallowed, allowing an incomplete static-only sitemap to be cached | Propagate failures so an existing successful ISR sitemap can be retained; first build/request still requires a healthy API |
| Blog discovery | Single request with limit=1000 imposed a ceiling | Follow backend pagination and deduplicate slugs; fail on malformed API responses |
| CMS SEO | Admin offered keywords, but no independent search title/description | Optional `seoTitle` and `seoDescription` fields throughout admin, backend model/validation and frontend metadata; existing posts retain automatic fallbacks |
| Metadata text | Excerpts could contain HTML tags | Strip HTML alongside Markdown when deriving descriptions |
| Admin/API indexing | Admin HTML lacked noindex; API had no indexing header | Admin robots meta and backend `X-Robots-Tag: noindex, nofollow`; authentication remains separate |

## Already present / live observations

- Live `https://bim.africa/robots.txt` and `/sitemap.xml` returned HTTP 200 when fetched during the audit. They were not missing.
- Blog articles already use server rendering/ISR, article metadata, BlogPosting/Breadcrumb structured data, slug canonicals, legacy Mongo ID redirects and real not-found handling. Those features were retained.
- Root Organization schema and a generated Open Graph image already exist.
- Backend already calls the secret-protected frontend revalidation endpoint after blog writes; local source inspection cannot prove production environment configuration.
- Live homepage content matches the broad source structure. Public crawler access does not expose private Search Console indexing reports or Core Web Vitals.

## Validation

- Frontend production build passed: all 27 generated pages, including 7 article paths.
- Admin production build passed. Existing bundle-size/browser-data warnings remain.
- Backend changed files passed Node syntax checks.
- TypeScript and focused frontend ESLint checks passed.
- `node scripts/verify-seo.cjs` checks pagination, deduplication, plain-text excerpts, failure propagation and, when a build exists, generated metadata, sitemap and redirects.
- No production data was modified to test publishing. Custom SEO save/edit needs a staging smoke test after deploying backend and admin together.

## Deployment and Search Console follow-through

1. Deploy backend, admin and frontend changes. Local changes do not change the live site until deployed.
2. Confirm backend `FRONTEND_URL=https://bim.africa`, matching `REVALIDATE_SECRET` on frontend/backend, and the frontend's correct `NEXT_PUBLIC_API_URL`. Do not expose the revalidation secret in public client environment variables.
3. Save/edit a staging article with custom SEO fields; verify the returned API fields and resulting HTML title, description, social text and canonical. Check create/update/delete refresh article lists and sitemap.
4. Verify the www redirect at the hosting layer as well; hosting can intercept requests before Next.js. Check the legacy support URL returns a permanent redirect, canonical pages return 200, and missing articles return 404.
5. Submit `https://bim.africa/sitemap.xml` in Search Console; inspect the homepage, WebsiteStrategy, DigitalSupport and a blog URL. Review Pages indexing exclusions and Google's selected canonicals.
6. Obtain a Search Console export with query + page + country + position for equal comparison windows, plus indexing and Core Web Vitals reports. Review relevant queries separately from portfolio-client queries.

## Content priorities requiring business direction

- Focus the existing WebsiteStrategy page on the demonstrated web design/development demand. Strengthen it with real process details, supported pricing context, project examples and FAQs from actual enquiries.
- Branding queries appear, but the current site positions the company around websites, cybersecurity and support. Confirm whether branding is still sold before creating branding landing pages; do not invent services or target unrelated queries merely because they appear in Search Console.
- “Medical tourism” may be discovery through the healthcare portfolio case study. Query/page mapping is required before treating it as a defect.
- Relevant local business listings, credible project evidence and useful Mauritius-focused content require ongoing work beyond metadata changes. No ranking or traffic outcome can be guaranteed from this audit.

## References

- [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google sitemap guidance: canonical URLs and accurate lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google JavaScript SEO: titles, descriptions and status codes](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

## Extended audit and implementation

The follow-up review covers all 21 currently generated public pages, including all seven blog articles. This is the verified local build, not a claim that Google has indexed every page or that the production deployment has changed.

Additional fixes:

- Recovered differently cased static URLs with permanent redirects to the existing canonical paths. Query strings are preserved. Existing published path casing remains stable.
- Added a permanent `/index.php` legacy-homepage redirect after the supplied GSC example identified that URL. Live requests are blocked at Vercel's edge with 403 and `x-vercel-mitigated: deny`; the hosting deny rule must be investigated before this can be called resolved in production.
- Fixed the cybersecurity WhatsApp link that was resolving as a path inside this website, and bare domains pasted into Markdown links. Empty article links now have visible destination text; malformed HTTP links cannot crash rendering.
- Added linked Organization, WebSite, WebPage, BreadcrumbList and service entities using real company information. No invented address, review rating, certification or pricing was added to schema.
- Showed article authors and publication/update dates consistently with article structured data. Invalid/future timestamps are omitted from schema.
- Added contextual service links in articles and site-wide service links in the footer; added practical website questions and links to actual case studies.
- Moved static home/about content to server components and removed unnecessary below-fold image priority. Map imagery now uses Next.js image optimisation and lazy loading; hero images have responsive sizes. Analytics downloads wait until page load.
- Replaced the shared navigation's animation-library dependency with small native CSS animations, retaining keyboard focus/Escape behavior and supporting reduced-motion preferences.
- Optimised the SVG background's embedded image encoding: each SVG fell from 546,132 to 39,650 bytes. A lossless first pass preserved visible pixels; the final quality-90 decorative-texture encoding measured an RMS pixel difference of 0.475/255 and was visually reviewed. The script limits high-quality compression to an RMS difference of at most 1/255 and avoids repeated recompression.
- Corrected the site manifest identity, main landmarks, skip navigation, heading order, mobile menu focus/Escape handling, button/link names, form labels and measured contrast failures. Screenshot review also corrected mobile stat-label wrapping.
- Added a useful custom 404 page while retaining real HTTP 404 and noindex responses.
- Made blog API pagination stable, detected non-advancing pagination, and bounded data fetch/revalidation timeouts.
- Fixed admin API handling that could report failed saves as successful. Existing custom SEO field validation and create/update propagation are covered with mocked CMS tests.

### Verification scope

- `npm run build`: passed; 27 generated routes/pages including metadata routes and seven article paths.
- `npm run check:seo`: all 21 public pages passed with zero errors. Checks include title/description, unique canonical, one nonempty H1, main landmark, image alt attributes, internal links, JSON-LD and required service/breadcrumb/site entities.
- Runtime HTTP checks: sitemap URLs return 200; missing pages/articles return 404 with noindex; static casing, legacy support and www redirects are permanent; query strings survive redirects; invalid revalidation credentials return 401.
- Mobile and desktop browser checks: all 21 pages passed the configured axe WCAG A/AA/best-practice checks with zero detected violations, broken images or horizontal overflow. Mobile menu focus and Escape behavior passed. Automated accessibility checks do not replace manual assistive-technology testing.
- Admin production build and mocked CMS SEO validation/create/update/stable-slug/webhook tests passed. Production database writes were not performed.
- Full frontend lint passed with zero errors; 50 non-blocking warnings remain, primarily unused code/imports. Existing browser-data and admin bundle-size build warnings remain.

The initial local mobile Lighthouse run scored SEO 100, accessibility 88, best practices 100 and performance 64. An intermediate run improved accessibility to 100 and performance to 79. These are lab measurements, not Search Console field Core Web Vitals or Google ranking scores.

### Design/reference lock

The existing BIM Africa homepage, About page and service-detail layouts are the implementation references. The existing CyberSecurity/DigitalSupport native question patterns informed the website FAQ section. The Refero skill's copywriting guide supplied the clarity-first content check. The black/red layout is retained; white-label red surfaces are slightly darker where contrast testing required it.

### Remaining external checks

- The additional Search Console indexing and sitemap screenshots have now been supplied and analysed below. Affected URL examples, selected-canonical details, field Core Web Vitals, manual actions and security reports remain unavailable.
- Deploy all three applications and run a staging publish/edit/delete smoke test with the actual shared revalidation configuration. Local code changes do not update production.
- Confirm hosting-level www/HTTPS behavior, preview-deployment indexing policy and the live environment variables without exposing secrets.
- Confirm the primary market and whether branding/graphic design remain current paid services. No speculative branding landing pages were created.
- Review existing business rating/experience claims and portfolio/client details with the business owner for ongoing accuracy. Existing claims were not converted into review schema.
- The existing backend contact endpoint acknowledges a validated request but does not store or deliver the message. This is a separate lead-handling gap, not a search-indexing defect; a successful form response must not be treated as proof of a delivered sales enquiry. A mail/storage implementation needs the business's delivery requirements and service configuration.
- Rankings, impressions and enquiries require subsequent measurement; a technical audit cannot guarantee first-page placement for every query.

See `SEO-KEYWORD-PLAN.md` for the query-to-page plan and priorities based on the supplied Search Console data. Generated JSON reports and screenshots are stored locally in `seo-reports/` and excluded from version control.


### Final local measurement

Measured 2026-11-19T08:26:20.630Z on the local production homepage with Lighthouse mobile defaults.

| Category | Score |
| --- | ---: |
| performance | 94/100 |
| accessibility | 100/100 |
| best-practices | 100/100 |
| seo | 100/100 |

LCP: 2.9 s; total blocking time: 130 ms; CLS: 0. These are local lab results, not production field Core Web Vitals or guaranteed rankings.
