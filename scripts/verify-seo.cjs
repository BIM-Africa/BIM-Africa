const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const content = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/content.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText, { exports: content, URL });
assert.equal(content.contentHref('www.bim.africa'), 'https://www.bim.africa');
assert.equal(content.contentHref('wa.me/message/test'), 'https://wa.me/message/test');
assert.equal(content.contentHref('/WebsiteStrategy'), '/WebsiteStrategy');
assert.equal(content.contentHref('mailto:info@bim.africa'), 'mailto:info@bim.africa');
assert.equal(content.contentHref('#section'), '#section');
assert.equal(content.contentHref('https://'), '');
assert.equal(content.isoDate('invalid'), undefined);
assert.equal(content.isoDate('2999-01-01'), undefined);
assert.equal(content.isoDate('2025-01-01'), '2025-01-01T00:00:00.000Z');
const source = fs.readFileSync('src/lib/blogs.ts', 'utf8');
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const exportsObject = {};
let requests = [];
let mode = 'pages';
const context = { exports: exportsObject, process, AbortSignal, require: id => id === './site' ? { SITE_URL: 'https://bim.africa' } : require(id), fetch: async (url) => {
  requests.push(url);
  if (mode === 'error') return { ok: false, status: 503 };
  if (mode === 'invalid') return { ok: true, json: async () => ({ error: 'bad response' }) };
  if (mode === 'single') return { ok: true, json: async () => ({ _id: '1', slug: 'test', seoTitle: 'Custom search title', seoDescription: 'Custom search description' }) };
  if (mode === 'loop') return { ok: true, json: async () => ({ blogs: [{ _id: '1', slug: 'first' }], pagination: { hasNext: true } }) };
  const page = new URL(url).searchParams.get('page');
  return { ok: true, json: async () => ({ blogs: page === '1'
    ? [{ _id: '1', slug: 'first', seoTitle: 'Custom title', seoDescription: 'Custom description' }]
    : [{ _id: '2', slug: 'second' }, { _id: '1', slug: 'first' }], pagination: { hasNext: page === '1' } }) };
}};
vm.runInNewContext(code, context);
(async () => {
  const blogs = await exportsObject.getAllBlogs();
  assert.equal(requests.length, 2);
  assert.equal(blogs.length, 2);
  assert.equal(blogs[1].slug, 'second');
  assert.equal(exportsObject.excerpt('<p>Website **design** [Mauritius](/service)</p>'), 'Website design Mauritius');
  mode = 'error';
  await assert.rejects(exportsObject.getAllBlogs, /503/);
  mode = 'invalid';
  await assert.rejects(exportsObject.getAllBlogs, /Unexpected/);
  mode = 'loop';
  await assert.rejects(exportsObject.getAllBlogs, /did not advance/);
  mode = 'single';
  const single = await exportsObject.getBlogBySlug('test');
  assert.equal(single.seoTitle, 'Custom search title');
  assert.equal(single.seoDescription, 'Custom search description');
  console.log('PASS: pagination, deduplication, plain-text metadata, and failure propagation.');
  if (fs.existsSync('.next/server/app/index.html')) {
    const home = fs.readFileSync('.next/server/app/index.html', 'utf8');
    assert.match(home, /<title>Web Design Mauritius/);
    assert.match(home, /Website Design/);
    const support = fs.readFileSync('.next/server/app/DigitalSupport.html', 'utf8');
    assert.match(support, /rel="canonical" href="https:\/\/bim.africa\/DigitalSupport"/);
    assert.match(support, /property="og:url" content="https:\/\/bim.africa\/DigitalSupport"/);
    assert.doesNotMatch(support, /www\.bim\.africa\/DigitalSupportOutsourcing/);
    const about = fs.readFileSync('.next/server/app/About.html', 'utf8');
    assert.match(about, /property="og:title" content="About BIM Africa/);
    const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    assert.equal(urls.length, new Set(urls).size);
    assert.ok(urls.every(url => url.startsWith('https://bim.africa/')));
    assert.ok(urls.some(url => url.includes('/blog/')));
    const manifest = JSON.parse(fs.readFileSync('.next/routes-manifest.json', 'utf8'));
    assert.ok(manifest.redirects.some(rule => rule.source === '/DigitalSupportOutsourcing' && rule.statusCode === 308));
    console.log(`PASS: production HTML canonicals/social metadata, redirects and ${urls.length} sitemap URLs.`);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
