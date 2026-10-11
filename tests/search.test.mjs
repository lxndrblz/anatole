// Unit tests for the pure parts of assets/js/anatole-search.js: text
// normalisation, ranking, snippets and link validation. Run with `npm test`
// (Node 18 or later; no dependencies).
//
// The script is a browser file, not a module. It exports its helpers only
// when a CommonJS `module` exists, so it is evaluated here with one.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../assets/js/anatole-search.js', import.meta.url), 'utf8');
const sandbox = { module: { exports: {} }, URL, Intl };
vm.runInNewContext(source, sandbox);
const { normalize, tokenize, matchQuality, toTerm, rank, prepare, siteHref, snippetParts, createSegment } =
  sandbox.module.exports;

// Values created inside the vm context have that context's prototypes, so
// compare through JSON rather than by prototype identity.
const plain = (value) => JSON.parse(JSON.stringify(value));
const terms = (query) => tokenize(query).map(toTerm);
const titles = (docs, query, limit = 10) => plain(rank(docs.map(prepare), terms(query), limit).map((doc) => doc.title));

test('normalize folds case, accents, ligatures and full-width forms', () => {
  assert.equal(normalize('Café RÉSUMÉ'), 'cafe resume');
  assert.equal(normalize('ﬁle'), 'file');
  assert.equal(normalize('ｆｕｌｌ'), 'full');
  assert.equal(normalize('Straße'), normalize('STRASSE'));
  assert.equal(normalize('ISPARTA'), normalize('ısparta'));
  assert.equal(normalize('İstanbul'), 'istanbul');
});

test('normalize folds Arabic and Persian variants of the same word', () => {
  assert.equal(normalize('كتاب علي'), 'کتاب علی');
  assert.equal(normalize('مدرسة'), 'مدرسه');
  assert.equal(normalize('خانۀ'), 'خانه');
  assert.equal(normalize('می‌شود'), normalize('میشود'));
  assert.equal(normalize('مُحَمَّد'), 'محمد');
  assert.equal(normalize('كتـــاب'), 'کتاب');
  assert.equal(normalize('۱۲۳ ٤٥٦'), '123 456');
});

test('tokenize splits on anything that is not a letter, mark or digit', () => {
  assert.deepEqual(plain(tokenize('Hello, TSN/5G world!')), ['hello', 'tsn', '5g', 'world']);
  assert.deepEqual(plain(tokenize('شبکه‌های حساس به زمان')), ['شبکههای', 'حساس', 'به', 'زمان']);
  assert.deepEqual(plain(tokenize('  ')), []);
  assert.deepEqual(plain(tokenize('🚀 !!! --')), []);
});

test('tokenize keeps Indic words whole', () => {
  // The vowel signs are spacing marks; splitting on them broke words apart.
  assert.equal(tokenize('हिंदी भाषा').length, 2);
  assert.equal(tokenize('தமிழ்').length, 1);
});

test('matchQuality reports the best occurrence, not the first', () => {
  assert.equal(matchQuality('subnetworking and networking basics', 'networking'), 3);
  assert.equal(matchQuality('networks', 'network'), 2);
  assert.equal(matchQuality('subnetwork', 'network'), 1);
  assert.equal(matchQuality('unrelated', 'network'), 0);
});

test('a title match outranks a tag match, which outranks a body match', () => {
  const docs = [
    { title: 'Body only', text: 'a note about networking' },
    { title: 'Tag only', tags: ['networking'] },
    { title: 'Subnetworking and networking basics' },
  ];
  assert.deepEqual(titles(docs, 'networking'), ['Subnetworking and networking basics', 'Tag only', 'Body only']);
});

test('every query word must match, in any order', () => {
  const docs = [
    { title: 'iPhone battery', text: 'replacing a phone battery' },
    { title: 'Survey', text: 'a survey of networking' },
  ];
  assert.deepEqual(titles(docs, 'battery survey'), []);
  assert.deepEqual(titles(docs, 'phone battery'), ['iPhone battery']);
  assert.deepEqual(titles(docs, 'battery phone'), ['iPhone battery']);
});

test('a single letter only matches as a whole word', () => {
  const docs = [{ title: 'Learning C++' }, { title: 'Clean code' }, { title: 'Plan B' }];
  assert.deepEqual(titles(docs, 'c++'), ['Learning C++']);
  assert.deepEqual(titles(docs, 'b'), ['Plan B']);
});

test('a single character still matches inside text written without spaces', () => {
  assert.deepEqual(titles([{ title: '我的猫很可爱' }, { title: '网络' }], '猫'), ['我的猫很可爱']);
});

test('queries match across spellings and scripts', () => {
  const docs = [{ title: 'زمان‌بندی 5G', tags: ['۵G'], text: 'در این نوشته بررسی می‌کنیم.' }];
  assert.equal(titles(docs, 'زمانبندی').length, 1);
  assert.equal(titles(docs, 'ميكنيم').length, 1);
  assert.equal(titles(docs, '5g').length, 1);
  assert.equal(titles([{ title: 'Résumé tips' }], 'resume').length, 1);
});

test('rank keeps index order for equal scores and honours the limit', () => {
  const docs = [{ title: 'Alpha one' }, { title: 'Alpha two' }, { title: 'Alpha three' }];
  assert.deepEqual(titles(docs, 'alpha'), ['Alpha one', 'Alpha two', 'Alpha three']);
  assert.deepEqual(titles(docs, 'alpha', 2), ['Alpha one', 'Alpha two']);
});

test('prepare tolerates missing and mistyped fields', () => {
  assert.deepEqual(titles([{}, { title: 5, tags: 'x', text: ['a'] }], '5'), ['5']);
  assert.equal(prepare({}).url, '');
});

const snippet = (text, query, lang = 'en') =>
  plain(snippetParts(text, normalize(text), terms(query), createSegment(lang)));
const shown = (result) => result.parts.map((part) => part.text).join('');
const marked = (result) => result.parts.filter((part) => part.hit).map((part) => part.text);

test('snippet shows a short window around the first match', () => {
  const text = `${'filler '.repeat(200)}the needle sits here ${'filler '.repeat(200)}`;
  const result = snippet(text, 'needle');
  assert.ok(shown(result).length <= 180);
  assert.deepEqual(marked(result), ['needle']);
  assert.equal(result.clippedStart, true);
  assert.equal(result.clippedEnd, true);
});

test('snippet of a short text is the whole text, unclipped', () => {
  const result = snippet('A short note about Hugo.', 'hugo');
  assert.equal(shown(result), 'A short note about Hugo.');
  assert.deepEqual(marked(result), ['Hugo']);
  assert.equal(result.clippedStart, false);
  assert.equal(result.clippedEnd, false);
});

test('snippet stays short in text written without spaces', () => {
  const text = `${'网络时间敏感性工业系统'.repeat(100)}搜索引擎${'可靠低延迟调度算法'.repeat(100)}`;
  const result = snippet(text, '搜索', 'zh');
  assert.ok(shown(result).length <= 180);
  assert.ok(shown(result).includes('搜索'));
});

test('snippet finds a match late in text whose length changes when normalised', () => {
  const text = `${'می‌خواهیم الگوریتم‌های زمان‌بندی را بررسی کنیم. '.repeat(60)}واژهٔ یکتا اینجاست.`;
  assert.deepEqual(marked(snippet(text, 'یکتا', 'fa')), ['یکتا']);
});

test('snippet marks a single-letter query only where it is a whole word', () => {
  assert.deepEqual(marked(snippet('Clean code in C and Rust', 'c')), ['C']);
});

test('snippet never splits a surrogate pair', () => {
  const text = `${'😀'.repeat(150)} needle ${'😀'.repeat(150)}`;
  const loneSurrogate = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;
  for (const part of snippet(text, 'needle').parts) assert.equal(loneSurrogate.test(part.text), false);
});

const here = { href: 'https://example.org/blog/post/', origin: 'https://example.org' };

test('siteHref resolves paths on the same site', () => {
  assert.equal(siteHref('/post/a/', here), 'https://example.org/post/a/');
  assert.equal(siteHref('/fa/پست/', here), 'https://example.org/fa/%D9%BE%D8%B3%D8%AA/');
});

test('siteHref rejects anything that leaves the site or is not http(s)', () => {
  const hostile = [
    'javascript:alert(1)',
    ' javascript:alert(1)',
    'java\tscript:alert(1)',
    'java\nscript:alert(1)',
    'JaVaScRiPt:alert(1)',
    '\u0001javascript:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'blob:https://example.org/x',
    '//evil.example/',
    '/\\evil.example/x',
    '\\\\evil.example/x',
    'https://evil.example/',
    'https://example.org@evil.example/',
    '',
    null,
    42,
  ];
  for (const url of hostile) assert.equal(siteHref(url, here), null, JSON.stringify(url));
});

test('siteHref rejects every link on a page that is not served over http(s)', () => {
  assert.equal(siteHref('/post/a/', { href: 'file:///site/index.html', origin: 'null' }), null);
});
