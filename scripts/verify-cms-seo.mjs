import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const backend = path.resolve('../BIM-Africa-Backend');
const { default: Blog } = await import(pathToFileURL(path.join(backend, 'models/blogs.js')));
const { addBlog, updateBlog } = await import(pathToFileURL(path.join(backend, 'controllers/admin.controller.js')));
const originals = { exists: Blog.exists, save: Blog.prototype.save, findById: Blog.findById, findByIdAndUpdate: Blog.findByIdAndUpdate, fetch: globalThis.fetch };
const previousEnv = { FRONTEND_URL: process.env.FRONTEND_URL, REVALIDATE_SECRET: process.env.REVALIDATE_SECRET };
let saved;
let updated;
let webhook;
function response() {
  return { statusCode: 200, body: undefined, status(code) { this.statusCode = code; return this; }, json(body) { this.body = body; return this; } };
}
try {
  process.env.FRONTEND_URL = 'https://frontend.example';
  process.env.REVALIDATE_SECRET = 'local-test-only';
  globalThis.fetch = async (url, options) => { webhook = { url, options }; return { ok: true }; };
  Blog.exists = async () => null;
  Blog.prototype.save = async function () { saved = this.toObject(); return saved; };
  Blog.findById = async () => ({ _id: '123', slug: 'stable-url', title: 'Original' });
  Blog.findByIdAndUpdate = async (id, fields) => { updated = fields; return { _id: id, slug: 'stable-url', ...fields }; };
  const invalid = response();
  await addBlog({ body: { title: 'Example', seoTitle: ['invalid'] } }, invalid);
  assert.equal(invalid.statusCode, 400);
  const tooLong = response();
  await updateBlog({ params: { id: '123' }, body: { seoDescription: 'x'.repeat(321) } }, tooLong);
  assert.equal(tooLong.statusCode, 400);
  const created = response();
  await addBlog({ body: { title: 'New Website Article', seoTitle: 'Custom search title', seoDescription: 'Custom description' } }, created);
  assert.equal(created.statusCode, 201);
  assert.equal(saved.slug, 'new-website-article');
  assert.equal(saved.seoTitle, 'Custom search title');
  assert.ok(webhook.options.signal instanceof AbortSignal);
  assert.deepEqual(JSON.parse(webhook.options.body).slugs, ['new-website-article']);
  const edited = response();
  await updateBlog({ params: { id: '123' }, body: { title: 'Changed title', slug: 'should-not-change', seoTitle: '', seoDescription: 'Updated description' } }, edited);
  assert.equal(edited.statusCode, 200);
  assert.equal(updated.slug, undefined);
  assert.equal(updated.seoTitle, '');
  assert.equal(updated.seoDescription, 'Updated description');
  assert.deepEqual(JSON.parse(webhook.options.body).slugs, ['stable-url']);
  console.log('PASS: CMS SEO validation, create/update fields, stable slugs and revalidation payloads (database/network mocked).');
} finally {
  Blog.exists = originals.exists;
  Blog.prototype.save = originals.save;
  Blog.findById = originals.findById;
  Blog.findByIdAndUpdate = originals.findByIdAndUpdate;
  globalThis.fetch = originals.fetch;
  for (const [key, value] of Object.entries(previousEnv)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
}
