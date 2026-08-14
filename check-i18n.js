// Checks that the translation table and the pages agree.
// Run with: node check-i18n.js
//
// Three things go wrong over time, and all three had:
//   1. a page uses a key that does not exist -> that text never translates
//   2. a page has text with no data-i18n at all -> that text never translates
//   3. the English string drifted from the text in the HTML -> switching back
//      to English silently rewrites the page

const fs = require('fs');
const path = require('path');

const pages = [
  'index.html',
  'about.html',
  'pages/llm/overview.html',
  'pages/llm/careers.html',
  'pages/quantum/overview.html',
  'pages/quantum/careers.html',
  'pages/robotics/overview.html',
  'pages/robotics/careers.html',
];

// Pull the translations object straight out of main.js. It cannot be required
// because main.js expects a browser, so we cut out the literal and evaluate it.
function loadTranslations() {
  const src = fs.readFileSync(path.join(__dirname, 'main.js'), 'utf8');
  const start = src.indexOf('const translations = {');
  const end = src.indexOf('function applyTranslations');
  const literal = src.slice(start + 'const translations ='.length, end).trim().replace(/;$/, '');
  return new Function('return ' + literal)();
}

// Grabs every data-i18n element and the text sitting directly inside it.
function tagsIn(html) {
  const found = [];
  const re = /data-i18n=["']([^"']+)["'][^>]*>([^<]*)</g;
  let m;
  while ((m = re.exec(html)) !== null) {
    found.push({ key: m[1], text: m[2] });
  }
  return found;
}

function normalise(text) {
  return text
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

const translations = loadTranslations();
const problems = [];
const usedKeys = new Set();

for (const page of pages) {
  const html = fs.readFileSync(path.join(__dirname, page), 'utf8');

  for (const { key, text } of tagsIn(html)) {
    usedKeys.add(key);

    if (!(key in translations.en)) {
      problems.push(`${page}: key "${key}" is missing from the English table`);
      continue;
    }
    if (!(key in translations.el)) {
      problems.push(`${page}: key "${key}" is missing from the Greek table`);
    }
    if (normalise(translations.en[key]) !== normalise(text)) {
      problems.push(
        `${page}: key "${key}" has drifted\n` +
        `    page says: ${normalise(text)}\n` +
        `    table says: ${normalise(translations.en[key])}`
      );
    }
  }
}

for (const key of Object.keys(translations.en)) {
  if (!usedKeys.has(key)) problems.push(`unused key in table: "${key}"`);
}
for (const key of Object.keys(translations.el)) {
  if (!(key in translations.en)) problems.push(`Greek key with no English pair: "${key}"`);
}

if (problems.length === 0) {
  console.log(`OK - ${usedKeys.size} keys, ${pages.length} pages, English and Greek agree.`);
} else {
  console.log(`${problems.length} problem(s):\n`);
  for (const p of problems) console.log('  ' + p);
  process.exitCode = 1;
}
