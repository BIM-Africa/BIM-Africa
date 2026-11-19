# Search Console and PageSpeed screenshot review

## What the supplied evidence establishes

- Page indexing: 10 indexed URLs, 26 excluded URLs, eight reasons. The report shows a last update of 13 November 2026; it is not a current live test of the new local code.
- Sitemap: `https://bim.africa/sitemap.xml`, submitted 8 October 2026, last read 16 November 2026, **Success**, 21 discovered pages.
- PageSpeed: the supplied live-site reports were captured on 19 November at approximately 12:52–12:53 PM GMT+5. The screenshot still shows the old “Real Businesses. Real Work.” homepage. Desktop performance is 100; mobile examples show 76/79 with LCP 6.1 seconds. Accessibility is 88, while SEO and best practices are 100.
- “No Data” is the real-user/CrUX section, not an assertion that the site fails Core Web Vitals. Insufficient eligible field samples can leave this section empty. Lab scores remain available and vary with device, network, cache and environment.

## Every indexing category reviewed

| Reason | URLs | Assessment and action |
| --- | ---: | --- |
| Page with redirect | 3 | Expected for HTTP/www/legacy aliases when the destination is correct. Verify final destination and indexing of that canonical page; do not remove useful redirects to make the exclusion disappear. The category's Failed validation label alone does not prove a broken redirect. |
| Alternate page with proper canonical tag | 2 | Usually expected duplicate exclusion. Verify the canonical target is the intended page. No need to index both variants. |
| Not found (404) | 1 | Redirect only if there is a genuinely equivalent replacement. Removed/unknown URLs can correctly remain 404. Local internal links and sitemap URLs were checked; the supplied screenshot does not name this URL. |
| Blocked due to access forbidden (403) | 1 | The later screenshot identifies `https://bim.africa/index.php`. Live requests with browser and Googlebot user-agent strings both return 403 with `server: Vercel` and `x-vercel-mitigated: deny`. A permanent legacy-homepage redirect to `/` is added locally. The hosting mitigation must also be reviewed; an application redirect cannot prove the edge block is resolved. Do not weaken authentication or globally bypass a firewall. |
| Redirect error | 1 | Needs the exact URL to trace loops, invalid targets or excessive chains. Local canonical/legacy redirects passed runtime tests. |
| Duplicate without user-selected canonical | 1 | Inspect Google's selected canonical and the affected URL. Local public pages now have a single self-canonical, consistent internal links and a canonical-only sitemap. |
| Crawled—currently not indexed | 2 | Crawl access alone does not establish indexing eligibility or content value. Inspect the page, selected canonical, rendered content and overlap. Server-rendered article content, unique metadata and internal linking have been verified locally; affected URLs are still needed for a page-specific content decision. |
| Discovered—currently not indexed | 15 | Google knows these URLs but has not indexed/crawled them as reported. The successful sitemap already supports discovery. Improve useful content and linking, ensure reliable access, and inspect priority canonical pages after deployment. Indexing cannot be forced. “Passed” validation does not mean these 15 URLs are indexed. |

The 26 excluded entries plus 10 indexed entries represent 36 URLs known to the domain property. They are not necessarily 36 distinct current sitemap pages. A domain property can also include protocol/host variants, subdomains, removed URLs and old article identifiers. The exact examples are required before mapping the 26 exclusions onto the 21 canonical sitemap URLs.

## Live verification performed after receiving the screenshots

The read-only network check in `seo-reports/live.json` found:

- All 21 URLs listed in the live sitemap return HTTP 200. No current 403/5xx was reproduced among those canonical URLs.
- `http://bim.africa/` and `https://www.bim.africa/` each redirect once with HTTP 308 to `https://bim.africa/`, which returns 200. No root redirect loop was reproduced.
- The live homepage returns 200 for a simulated Googlebot user-agent as well. This is a limited diagnostic, not proof that a real Google crawler IP is permitted by every firewall rule.
- The live homepage still has the old title and lacks a main landmark. The deployed site therefore does not yet contain the local accessibility/content fixes.
- The live legacy `/DigitalSupportOutsourcing` URL returns 404. The local permanent redirect to `/DigitalSupport` is implemented and runtime-tested, but is not yet deployed. This live 404 is not assumed to be the unnamed GSC 404 example.

## PageSpeed items and their handling

| Supplied item | Handling in the local changes |
| --- | --- |
| Contrast failures | Measured red/white and badge/sidebar failures corrected; automated mobile/desktop accessibility checks passed on all 21 pages. |
| Unnamed links / identical links with different purposes | Specific service/link labels, social labels, visible fallback text for empty Markdown links, and real destination links added. |
| Heading order | Corrected home/service/about/sidebar hierarchy and retained one article H1. |
| Missing main landmark | Added a single main landmark and skip-link target to public page templates. |
| Accessibility tree not well formed | The control/link naming and ARIA fixes address the reported accessibility causes; separately verify Lighthouse's agentic-tree audit rather than adding artificial WebMCP integrations. |
| Large image delivery / LCP | Responsive hero sizes, below-fold lazy loading and background compression from 546,132 to 39,650 bytes. Final local mobile performance is 94, LCP 2.9s, TBT 130ms and CLS 0. LCP has improved but is still above the 2.5s “good” threshold in this lab run. |
| Unused JavaScript | Static home/about content moved to server components, shared menu animation runtime replaced with CSS, analytics loading deferred until page load. Remaining framework/analytics code is not removed just to alter the score. |
| Legacy JavaScript / render-blocking CSS | Framework-generated compatibility code and the main stylesheet remain. Advisory savings are not all independent hard failures; removing required CSS or compatibility support without validation is not a sound fix. |
| CSP/HSTS/COOP/XFO/Trusted Types under manual checks | These are additional security reviews, not proof of five failures in a report whose Best Practices score is 100. Review hosting policy and actual integrations before imposing a strict policy that could break analytics, translation or captcha. |
| Structured data under manual checks | JSON-LD parsing and expected entity types passed locally. The manual-check item is not itself a report of invalid markup. Use Google's Rich Results Test on deployed canonical URLs for eligible rich-result types. |

## Next concrete steps

1. Deploy the prepared frontend, backend and admin changes. Re-test the public site after deployment; local scores are not live PageSpeed scores.
2. Keep the currently successful sitemap. Confirm it remains 200 and lists the intended canonical URLs after deployment; an already successful submission does not need repeated submissions to force indexing.
3. Inspect `/`, `/WebsiteStrategy`, `/CyberSecurity`, `/DigitalSupport` and the Mauritius-cost article in Search Console. Check the indexed version, Google-selected canonical and live rendered content. Request indexing for important corrected pages after deployment.
4. Apply Validate Fix only to categories where an actual defect was corrected. Expected redirect/alternate exclusions can remain. Do not use the Removals tool to “fix” normal discovery delays.
5. The 403 example has now been supplied and investigated. In Vercel's firewall/security request logs, inspect the deny event for `/index.php` and the matching rule. Configure the intended legacy redirect so this public alias can reach `/`, then verify the actual live 308 and 200 destination before starting new GSC validation. The redirect-error, duplicate, 404 and crawled/discovered example lists are still needed for their precise per-URL remedies.
6. Check field Core Web Vitals when eligible data exists, plus Manual Actions and Security Issues. Measure equal query/page/country windows after Google re-crawls the updated site.

## Primary references

- [Google: Page indexing report and category meanings](https://support.google.com/webmasters/answer/7440203?hl=en)
- [Google: URL Inspection and selected canonicals](https://support.google.com/webmasters/answer/9012289/)
- [Google: PageSpeed lab and real-user data](https://developers.google.com/speed/docs/insights/v5/about)
- [Vercel: firewall evaluation happens before application routing](https://vercel.com/docs/how-vercel-cdn-works)

## Additional Lighthouse verification

The corrected local build was separately audited with Lighthouse 13.6.0's accessibility, SEO and Agentic Browsing categories. All three scored 100. The specific `agent-accessibility-tree` audit and `identical-links-same-purpose` audit both passed. See `seo-reports/agentic-final.json`.

## Post-push live verification — 19 November 2026

The user reported pushing the changes. A fresh live check now confirms the updated frontend:

- Homepage title is now “Web Design Mauritius, Cybersecurity & Digital Support | BIM Africa”, with the main landmark present.
- All 21 current sitemap URLs return HTTP 200. The sitemap itself returns 200.
- `/robots.txt` returns 200, permits public pages, excludes `/api/`, and declares the correct sitemap.
- HTTP and www root variants permanently redirect to the HTTPS apex homepage.
- `/DigitalSupportOutsourcing` now permanently redirects to `/DigitalSupport`, whose canonical is correct.
- **`/index.php` now returns HTTP 308 to `/`, with no `x-vercel-mitigated` header. The previous live 403 is no longer reproduced.** Earlier sections describe the historical investigation, not the current response. No firewall rule change is claimed by this audit.

Next: inspect the legacy URL and destination in GSC, then start new validation for the historical 403 category. Request indexing for the intended canonical homepage/service/article URLs, not for the redirect aliases. GSC counts can continue to reflect older crawls until processed. These checks confirm the public frontend deployment; backend/admin deployment and the real publishing flow still require their own verification.

## Latest supplied indexing screenshots

- The overview now shows **11 indexed and 26 excluded** URLs. This is 37 known URLs, including historical/alternate URLs; it does not mean all 26 are current canonical sitemap pages that should be indexed.
- The 403 `/index.php` validation started on 19 November and shows one pending, zero failed. Its listed last crawl is still 16 November. Current live testing confirms `/index.php` returns 308 to `/`; the validation is pending Google's processing, not confirmed passed.
- The 404 example is now identified as **`https://bim.africa/index.html`**. The screenshot shows one pending, zero failed, and a 16 November last crawl. A fresh live request still returns 404. A specific permanent redirect `/index.html` to `/` has now been added locally, with a query-preservation regression check. This additional change needs a new deployment before the 404 category can be expected to validate successfully.
- After deployment, `/index.php` and `/index.html` should be treated as redirect aliases, not additional URLs to request indexing for. The canonical homepage is the indexing target. It is acceptable for GSC to list these aliases under “Page with redirect”.

## Discovered URL examples now supplied

The screenshots show 14 distinct readable URL examples out of 15; the first row on the first examples page is cropped. Visible URLs include `/CaseStudy3`, `/CyberSecurity`, `/DigitalSupport`, `/PrivacyPolicy`, `/TermsofService`, `/articles`, `/blog`, `/contactus`, `/service`, and five articles about Singapore website cost, e-commerce readiness, SEO in website design, small-business websites and mobile-responsive design.

A fresh live check confirms all 14 visible examples return 200, have a matching self-canonical and no meta/header noindex. Every example is in the current sitemap. The current graph of the 21 checked sitemap pages also shows:

- `/CyberSecurity`, `/DigitalSupport`, `/blog`, `/contactus` and `/service` each have links from 20 other checked pages.
- Each of the five visible article examples has links from eight other checked pages.
- `/CaseStudy3` has links from two other checked pages.
- `/articles` has **zero incoming links from another checked public page**. A visible “Browse all articles” link has now been added to `/blog` locally. Deploy this additional link; it improves discovery but does not guarantee indexing. The static audit now detects unlinked public pages as a regression.

The last-crawled values are N/A in the screenshots; this is consistent with the report's discovered-but-not-crawled classification. The 2024 “Validation passed” date is historical and does not establish that these current 15 examples are indexed.

After the additional link is deployed, prioritise GSC live tests/indexing requests for `/service`, `/CyberSecurity`, `/DigitalSupport`, `/contactus`, `/blog`, and the useful article/case-study pages. Policy/terms pages are lower business priorities. Request the canonical pages, not old aliases. Do not bulk-change URLs or add noindex merely to reduce the exclusion counter. The unreadable 15th example and the two crawled-but-not-indexed examples are still needed for their individual assessment.

Latest live alias check also confirms `/index.html` now redirects 308 to `/`, alongside `/index.php`; both historical homepage-alias fixes are deployed.
