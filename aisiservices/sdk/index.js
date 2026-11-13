/**
 * TJTM EGG / AISI Services registry SDK.
 * Fetches agents.json and exposes search/filter helpers.
 */
const clean = (value) => String(value ?? '').trim();
const normalize = (value) => clean(value).toLocaleLowerCase();
const slugify = (value) => normalize(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function createRegistry(input = []) {
  const source = Array.isArray(input) ? input : input?.agents;
  if (!Array.isArray(source)) throw new TypeError('Expected an array or an object containing an agents array.');

  const agents = source.map((agent) => ({
    ...agent,
    id: slugify(agent.id || agent.name),
    name: clean(agent.name),
    description: clean(agent.description),
    category: clean(agent.category) || 'Uncategorized',
    access: clean(agent.access) || 'Unspecified',
    url: clean(agent.url)
  }));

  const ids = new Set();
  for (const agent of agents) {
    if (!agent.name) throw new TypeError('All agent records must include a name.');
    if (ids.has(agent.id)) throw new TypeError(`Duplicate agent id: ${agent.id}`);
    ids.add(agent.id);
  }

  return Object.freeze({
    all: () => agents.map((agent) => ({ ...agent })),
    get: (id) => agents.find((agent) => agent.id === slugify(id)) ?? null,
    search(query = '', filters = {}) {
      const q = normalize(query);
      const category = normalize(filters.category);
      const access = normalize(filters.access);
      return agents.filter((agent) => {
        const needle = normalize([agent.name, agent.description, agent.category, agent.access].join(' '));
        const matchesQuery = !q || needle.includes(q);
        const matchesCategory = !category || category === 'all' || normalize(agent.category) === category;
        const matchesAccess = !access || access === 'all' || normalize(agent.access) === access;
        return matchesQuery && matchesCategory && matchesAccess;
      }).map((agent) => ({ ...agent }));
    },
    categories: () => [...new Set(agents.map((agent) => agent.category))].sort((a, b) => a.localeCompare(b)),
    accessLevels: () => [...new Set(agents.map((agent) => agent.access))].sort((a, b) => a.localeCompare(b)),
    summary() {
      const byCategory = {};
      for (const agent of agents) {
        byCategory[agent.category] = (byCategory[agent.category] || 0) + 1;
      }
      return { total: agents.length, categories: byCategory };
    }
  });
}

export async function fetchRegistry(url = './agents.json', fetchImpl = globalThis.fetch) {
  if (typeof fetchImpl !== 'function') throw new TypeError('A Fetch implementation is required.');
  const response = await fetchImpl(url, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Registry request failed: HTTP ${response.status}`);
  return createRegistry(await response.json());
}

export function parseRosterText(raw) {
  const accessPattern = /^(Only me|Anyone with a link|Everyone|Public)$/i;
  const ignorePattern = /^(GPT Icon|Migrate to plugin|\d+\+? Chats?|\d+ Chats?)$/i;
  const rows = [];
  let pending = [];

  const flush = (access) => {
    const values = pending.map(clean).filter((line) => line && !ignorePattern.test(line));
    pending = [];
    if (!values.length) return;
    const name = values.shift();
    rows.push({
      id: slugify(name),
      name,
      description: values.join(' '),
      category: 'Needs review',
      access,
      url: ''
    });
  };

  for (const rawLine of String(raw ?? '').split(/\r?\n/)) {
    const line = clean(rawLine);
    if (!line || ignorePattern.test(line)) continue;
    if (accessPattern.test(line)) flush(line);
    else pending.push(line);
  }

  return rows;
}

export function exportRegistryJSON(records, registryName = 'TJTM EGG Agent Registry') {
  const list = Array.isArray(records) ? records : records?.agents;
  if (!Array.isArray(list)) throw new TypeError('Expected an array or registry object.');
  return JSON.stringify({ schemaVersion: 1, registry: registryName, completeness: 'human review required', agents: list }, null, 2);
}
