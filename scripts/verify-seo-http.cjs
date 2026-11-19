const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.SEO_TEST_URL || 'http://127.0.0.1:3101';
(async () => {
  for (const [route, target] of [
    ['/about?ref=audit', '/About?ref=audit'],
    ['/index.php?ref=audit', '/?ref=audit'],
    ['/websitestrategy', '/WebsiteStrategy'],
    ['/WebsiteStrategy/', '/WebsiteStrategy'],
    ['/DigitalSupportOutsourcing', '/DigitalSupport'],
    ['/Blog/THE-ROLE-OF-SEO-IN-MODERN-WEBSITE-DESIGN', '/blog/the-role-of-seo-in-modern-website-design'],
  ]) {
    const res = await fetch(base + route, { redirect: 'manual' });
    assert.equal(res.status, 308, route);
    assert.equal(new URL(res.headers.get('location'), base).pathname + new URL(res.headers.get('location'), base).search, target);
  }
  for (const route of ['/unknown-page-seo-audit', '/blog/not-a-real-post-seo-audit']) {
    const res = await fetch(base + route);
    assert.equal(res.status, 404, route);
    const body = await res.text();
    assert.match(body, /name="robots" content="noindex/);
    assert.match(body, /Page not found/);
  }
  const sitemap = await fetch(base + '/sitemap.xml');
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const route = new URL(match[1]).pathname;
    const response = await fetch(base + route, { redirect: 'manual' });
    assert.equal(response.status, 200, `Sitemap URL: ${route}`);
  }
  const robots = await fetch(base + '/robots.txt');
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/bim.africa\/sitemap.xml/);
  const invalidWebhook = await fetch(base + '/api/revalidate', { method: 'POST' });
  assert.equal(invalidWebhook.status, 401);
  const www = await new Promise((resolve, reject) => {
    const http = require('node:http');
    http.get(base + '/WebsiteStrategy?ref=audit', { headers: { host: 'www.bim.africa' } }, res => {
      res.resume();
      resolve({ status: res.statusCode, location: res.headers.location });
    }).on('error', reject);
  });
  assert.equal(www.status, 308);
  assert.equal(www.location, 'https://bim.africa/WebsiteStrategy?ref=audit');
  fs.mkdirSync('seo-reports', { recursive: true });
  fs.writeFileSync('seo-reports/http.json', JSON.stringify({ passed: true, base, checkedAt: new Date().toISOString() }, null, 2));
  console.log('PASS: permanent redirects, query preservation, missing-page/article 404 + noindex, all sitemap URLs HTTP 200, robots and webhook authentication.');
})().catch(error => { console.error(error); process.exitCode = 1; });
