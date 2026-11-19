const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const options = { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX };
const content = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/content.ts', 'utf8'), { compilerOptions: options }).outputText, { exports: content, URL });
let mode = 'found';
const blog = { _id: 'abcdef123456abcdef123456', slug: 'website-design-mauritius', title: 'Website design', desc: 'Default article description', extraDesc: 'Main article content', seoTitle: 'Custom search title', seoDescription: 'Custom search description', author: 'Hassan Omar', createdAt: '2025-01-01', updatedAt: '2025-01-02', img: 'https://res.cloudinary.com/example/image.jpg' };
const library = {
  SITE_URL: 'https://bim.africa',
  blogUrl: slug => 'https://bim.africa/blog/' + slug,
  excerpt: text => text,
  getAllBlogs: async () => [blog],
  getBlogBySlug: async () => mode === 'found' ? blog : null,
  getBlogById: async () => mode === 'legacy' ? blog : null,
};
const exportsObject = {};
const code = ts.transpileModule(fs.readFileSync('src/app/blog/[slug]/page.tsx', 'utf8'), { compilerOptions: options }).outputText;
vm.runInNewContext(code, {
  exports: exportsObject,
  require: id => {
    if (id === 'react') return { cache: fn => fn };
    if (id === 'next/navigation') return { notFound: () => { throw Error('NOT_FOUND'); }, permanentRedirect: url => { throw Error('REDIRECT ' + url); } };
    if (id === './ArticleView') return { default: () => null };
    if (id === '@/lib/blogs') return library;
    if (id === '@/lib/content') return content;
    if (id === '@/lib/site') return { ORGANIZATION_ID: 'https://bim.africa/#organization' };
    return require(id);
  },
});
(async () => {
  const props = { params: Promise.resolve({ slug: blog.slug }) };
  const metadata = await exportsObject.generateMetadata(props);
  assert.equal(metadata.title, blog.seoTitle);
  assert.equal(metadata.description, blog.seoDescription);
  assert.equal(metadata.openGraph.title, blog.seoTitle);
  assert.equal(metadata.twitter.description, blog.seoDescription);
  assert.equal(metadata.alternates.canonical, library.blogUrl(blog.slug));
  const rendered = await exportsObject.default(props);
  const schema = JSON.parse(rendered.props.children[0].props.dangerouslySetInnerHTML.__html);
  assert.equal(schema[0].author['@type'], 'Person');
  assert.equal(schema[0].author.name, blog.author);
  assert.equal(schema[0].datePublished, '2025-01-01T00:00:00.000Z');
  blog.seoTitle = '';
  blog.seoDescription = '';
  const fallback = await exportsObject.generateMetadata(props);
  assert.equal(fallback.title, 'Website design | BIM Africa');
  assert.equal(fallback.description, blog.desc);
  mode = 'missing';
  assert.equal((await exportsObject.generateMetadata(props)).robots.index, false);
  await assert.rejects(() => exportsObject.default(props), /NOT_FOUND/);
  mode = 'legacy';
  await assert.rejects(() => exportsObject.default({ params: Promise.resolve({ slug: blog._id }) }), /REDIRECT \/blog\/website-design-mauritius/);
  console.log('PASS: actual article metadata overrides/fallbacks, social tags, canonical, author/date schema, missing articles and legacy ID redirects.');
})().catch(error => { console.error(error); process.exitCode = 1; });
