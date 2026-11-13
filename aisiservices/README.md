# AISI Services — TJTM EGG Agent Registry

GitHub Pages-compatible AISI Services landing page, searchable agent directory, editable JSON registry, browser-only roster importer, and dependency-free JavaScript SDK.

## Files

- `index.html` — the AISI Services site and searchable/category-filterable registry.
- `agents.json` — registry records and metadata.
- `sdk/index.js` — ES module SDK (`createRegistry`, `fetchRegistry`, `parseRosterText`, `exportRegistryJSON`).
- `import.html` — browser-only roster text importer; pasted text is processed locally, not uploaded.

## Important completeness note

`agents.json` is a starter transcription and is **not the complete roster**. The conversation source is long and inconsistently formatted; the importer can help convert the full pasted source, but it is heuristic. Paste the complete roster into the import page, download its JSON draft, inspect entries and duplicates, assign categories, then replace `agents.json` after review. Missing GPT URLs are left blank rather than guessed.

Access labels reproduce the supplied list. Showing “Only me” on this public directory does not change the GPT's own access settings. Do not add credentials or private conversation content to this public repository.

## SDK example

```js
import { fetchRegistry } from './sdk/index.js';
const registry = await fetchRegistry('./agents.json');
console.log(registry.search('archive', { access: 'Everyone' }));
console.log(registry.summary());
```

This directory does not replace the repository home page. If GitHub Pages is enabled for the repository root, the project route is `/aisiservices/`; confirm the repository Pages source and domain settings in GitHub before announcing the live URL. A repository file commit is not itself a Pages or Cloudflare deployment.

Human source authority and final editorial approval: TJ Morris.
