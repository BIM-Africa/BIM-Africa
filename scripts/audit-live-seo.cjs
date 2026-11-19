const fs = require('node:fs');
const origin = 'https://bim.africa';
async function inspect(url, userAgent) {
  const hops = [];
  let current = url;
  for (let hop = 0; hop < 8; hop++) {
    const response = await fetch(current, { redirect: 'manual', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': userAgent } });
    const location = response.headers.get('location');
    hops.push({ url: current, status: response.status, ...(location ? { location } : {}) });
    if ([301, 302, 303, 307, 308].includes(response.status) && location) {
      await response.body?.cancel();
      const next = new URL(location, current).href;
      if (hops.some(hop => hop.url === next)) return { requested: url, hops, error: 'Redirect loop' };
      current = next;
      continue;
    }
    const body = await response.text();
    const rendered = body.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<style\b[\s\S]*?<\/style>/g, '');
    const meta = [...rendered.matchAll(/<meta\b[^>]*>/g)].map(match => Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(attr => [attr[1], attr[2]])));
    const robotsMeta = meta.filter(tag => ['robots', 'googlebot'].includes(tag.name)).map(tag => ({ name: tag.name, content: tag.content }));
    return { requested: url, hops, title: rendered.match(/<title>(.*?)<\/title>/s)?.[1], canonical: rendered.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1], main: /<main\b/.test(rendered), h1Count: [...rendered.matchAll(/<h1\b/g)].length, robotsMeta, robotsHeader: response.headers.get('x-robots-tag'), internalLinks: [...rendered.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(match => new URL(match[1].replaceAll('&amp;', '&'), current)).filter(link => link.origin === origin).map(link => link.pathname) };
  }
  return { requested: url, hops, error: 'Too many redirects' };
}
(async () => {
  const sitemap = await fetch(origin + '/sitemap.xml', { signal: AbortSignal.timeout(15000) });
  const xml = await sitemap.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1].replaceAll('&amp;', '&'));
  const results = [];
  const regular = 'Mozilla/5.0 (compatible; BIM-Africa-SEO-Audit/1.0)';
  for (let i = 0; i < urls.length; i += 3) {
    results.push(...await Promise.all(urls.slice(i, i + 3).map(url => inspect(url, regular).catch(error => ({ requested: url, error: error.message })))));
  }
  const variants = await Promise.all(['http://bim.africa/', 'https://www.bim.africa/', origin + '/DigitalSupportOutsourcing', origin + '/index.php', origin + '/index.html'].map(url => inspect(url, regular).catch(error => ({ requested: url, error: error.message }))));
  const googlebot = await inspect(origin + '/', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
  fs.mkdirSync('seo-reports', { recursive: true });
  fs.writeFileSync('seo-reports/live.json', JSON.stringify({ checkedAt: new Date().toISOString(), sitemapStatus: sitemap.status, urls: results, variants, simulatedGooglebot: googlebot }, null, 2));
  console.log(JSON.stringify({ sitemapStatus: sitemap.status, urls: results.length, issues: results.filter(row => row.error || row.hops?.at(-1)?.status !== 200), homepage: results.find(row => new URL(row.requested).pathname === '/'), variants, simulatedGooglebot: googlebot }, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
