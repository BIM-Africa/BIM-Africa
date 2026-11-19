const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const moduleRoot = process.argv[2];
if (!moduleRoot) throw Error('Pass the external audit-tool node_modules directory containing puppeteer-core and axe-core.');
const puppeteer = require(path.join(moduleRoot, 'puppeteer-core'));
const base = process.env.SEO_TEST_URL || 'http://127.0.0.1:3101';
const desktop = process.env.SEO_DESKTOP === '1';
(async () => {
  const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, headless: true, args: ['--no-sandbox'] });
  const results = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: desktop ? 1440 : 390, height: desktop ? 1000 : 844, deviceScaleFactor: 1 });
    const routes = JSON.parse(fs.readFileSync('seo-reports/pages.json')).results.map(row => row.route);
    for (const route of routes) {
      await page.goto(base + route, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.addScriptTag({ path: path.join(moduleRoot, 'axe-core/axe.min.js') });
      const result = await page.evaluate(async () => {
        const result = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'] } });
        return {
          violations: result.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.map(n => ({ html: n.html, target: n.target, failure: n.failureSummary })) })),
          overflow: document.documentElement.scrollWidth > innerWidth,
          brokenImages: [...document.images].filter(img => img.complete && !img.naturalWidth).map(img => img.src),
        };
      });
      results.push({ route, ...result });
      console.log(`${route}: ${result.violations.length} accessibility violations; overflow=${result.overflow}; broken images=${result.brokenImages.length}`);
      const prefix = desktop ? 'desktop-' : 'mobile-';
      if (['/', '/WebsiteStrategy', '/About', '/blog'].includes(route)) await page.screenshot({ path: 'seo-reports/' + prefix + (route.slice(1) || 'home') + '.png', fullPage: true });
      if (['/', '/WebsiteStrategy'].includes(route)) await page.screenshot({ path: 'seo-reports/' + prefix + (route.slice(1) || 'home') + '-viewport.png' });
    }
    if (!desktop) {
    await page.goto(base, { waitUntil: 'networkidle2' });
    await page.click('[aria-label="Toggle menu"]');
    await page.waitForSelector('#mobile-navigation');
    assert.ok(await page.$eval('#mobile-navigation', el => el.contains(document.activeElement)), 'Opening menu moves focus inside');
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !document.getElementById('mobile-navigation'));
    assert.equal(await page.$eval('[aria-label="Toggle menu"]', el => el.getAttribute('aria-expanded')), 'false');
    }
    await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
    await page.goto(base, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'seo-reports/desktop-home.png', fullPage: true });
    fs.writeFileSync('seo-reports/browser' + (desktop ? '-desktop' : '') + '.json', JSON.stringify({ checkedAt: new Date().toISOString(), results, menuKeyboardPassed: desktop ? undefined : true }, null, 2));
    console.log(`Completed ${desktop ? 'desktop' : 'mobile'} browser checks. Screenshots and report saved.`);
    if (results.some(result => result.violations.length || result.overflow || result.brokenImages.length)) process.exitCode = 1;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
