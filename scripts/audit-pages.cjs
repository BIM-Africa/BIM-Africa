const fs = require('node:fs');
const path = require('node:path');
const base = path.resolve('.next/server/app');
const origin = 'https://bim.africa';
const results = [];
function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
}
function plain(text) {
  return text.replace(/<[^>]+>/g, ' ').replace(/&(?:amp|quot|#x27|apos|lt|gt|nbsp);/g, ' ').replace(/\s+/g, ' ').trim();
}
const sitemapBody = fs.readFileSync(path.join(base, 'sitemap.xml.body'), 'utf8');
const sitemapRoutes = new Set([...sitemapBody.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname));
const pages = files(base).filter(file => {
  if (!file.endsWith('.html')) return false;
  const route = '/' + path.relative(base, file).replaceAll('\\', '/').replace(/\.html$/, '').replace(/^index$/, '');
  const metaFile = file.replace(/\.html$/, '.meta');
  // ISR also persists negative 404 results. They are not public landing pages;
  // still fail the audit if a missing URL is incorrectly listed in the sitemap.
  if (fs.existsSync(metaFile) && JSON.parse(fs.readFileSync(metaFile, 'utf8')).status === 404 && !sitemapRoutes.has(route)) return false;
  return true;
});
const routes = new Set(pages.map(file => '/' + path.relative(base, file).replaceAll('\\', '/').replace(/\.html$/, '').replace(/^index$/, '')));
const titles = new Map();
const descriptions = new Map();
for (const file of pages) {
  const route = '/' + path.relative(base, file).replaceAll('\\', '/').replace(/\.html$/, '').replace(/^index$/, '');
  if (route.startsWith('/_')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const body = html.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<style\b[\s\S]*?<\/style>/g, '');
  const tags = [...body.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(m => attrs(m[0]));
  const title = plain(body.match(/<title>(.*?)<\/title>/s)?.[1] || '');
  const description = tags.find(tag => tag.name === 'description')?.content;
  const canonical = tags.filter(tag => tag.rel === 'canonical');
  const h1 = [...body.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map(m => plain(m[1]));
  const errors = [];
  const warnings = [];
  if (!title) errors.push('Missing title');
  if (!description) errors.push('Missing description');
  if (h1.length !== 1 || !h1[0]) errors.push(`Expected one nonempty H1, got ${h1.length}`);
  if (canonical.length !== 1 || new URL(canonical[0].href).href !== new URL(origin + route).href) errors.push('Canonical mismatch');
  if ([...body.matchAll(/<main\b/g)].length !== 1 || !body.includes('id="main-content"')) errors.push('Missing or duplicate main landmark');
  for (const match of body.matchAll(/<img\b[^>]*>/g)) {
    if (!Object.hasOwn(attrs(match[0]), 'alt')) errors.push('Image missing alt attribute');
  }
  if (tags.some(tag => tag.name === 'robots' && /noindex/.test(tag.content))) errors.push('Public page is noindex');
  if (title.length > 65) warnings.push(`Title is long (${title.length})`);
  if (description?.length > 170) warnings.push(`Description is long (${description.length})`);
  for (const [value, group, label] of [[title, titles, 'title'], [description, descriptions, 'description']]) {
    if (!value) continue;
    if (group.has(value)) warnings.push(`Duplicate ${label} with ${group.get(value)}`);
    group.set(value, route);
  }
  const links = [...body.matchAll(/<a\b[^>]*>/g)].map(m => attrs(m[0])).filter(tag => tag.href);
  for (const { href } of links) {
    const url = new URL(href.replaceAll('&amp;', '&'), origin + route);
    if (url.origin !== origin || url.pathname === '/') continue;
    if (!routes.has(decodeURIComponent(url.pathname)) && !fs.existsSync(path.join('public', decodeURIComponent(url.pathname)))) {
      errors.push(`Unresolved internal link: ${href}`);
    }
  }
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  const schemaTypes = [];
  for (const script of scripts) {
    try {
      const parsed = JSON.parse(script[1]);
      const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
      nodes.forEach(node => schemaTypes.push(node['@type']));
    } catch { errors.push('Invalid JSON-LD'); }
  }
  if (!schemaTypes.includes('WebSite') || !schemaTypes.includes('Organization')) errors.push('Missing business/site schema');
  if (route !== '/' && !schemaTypes.includes('BreadcrumbList')) errors.push('Missing breadcrumb schema');
  if (['/WebsiteStrategy', '/CyberSecurity', '/DigitalSupport'].includes(route) && !schemaTypes.includes('Service')) errors.push('Missing service schema');
  results.push({ route, title, descriptionLength: description?.length, h1, schemaTypes, errors: [...new Set(errors)], warnings });
}
const report = { generatedAt: new Date().toISOString(), pages: results.length, errors: results.reduce((n, r) => n + r.errors.length, 0), results };
fs.mkdirSync('seo-reports', { recursive: true });
fs.writeFileSync('seo-reports/pages.json', JSON.stringify(report, null, 2));
for (const page of results) console.log(`${page.route}: ${page.errors.length ? 'FAIL ' + page.errors.join('; ') : 'PASS'}${page.warnings.length ? ' | ' + page.warnings.join('; ') : ''}`);
console.log(`${report.pages} pages, ${report.errors} errors. Report: seo-reports/pages.json`);
if (report.errors) process.exitCode = 1;
