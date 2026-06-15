// Cloudflare Worker for tjmorrisacir.us
// Purpose: serve the TJ Morris ACIR AI IT Tech Web splash page at the edge.
// Deploy as a Worker, then add a Custom Domain for tjmorrisacir.us in Cloudflare.

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("TJ Morris ACIR worker online", {
        status: 200,
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>TJ Morris ACIR | AI IT Tech Web Services</title>
  <meta name="description" content="TJ Morris ACIR AI IT Tech Web Services — archive-aware AI, web publishing, domain routing, GitHub Pages, Cloudflare, ontology, media, and digital continuity support." />
  <style>
    :root { --bg:#07111f; --text:#f5f8ff; --muted:#b8c5db; --line:rgba(255,255,255,.18); --accent:#9ee7ff; --accent2:#d7b8ff; --gold:#ffd88a; }
    * { box-sizing: border-box; } body { margin:0; font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:var(--text); background:radial-gradient(circle at 20% 10%,rgba(158,231,255,.22),transparent 32%),radial-gradient(circle at 78% 18%,rgba(215,184,255,.18),transparent 30%),var(--bg); min-height:100vh; line-height:1.55; }
    .wrap { width:min(1060px,calc(100% - 32px)); margin:0 auto; } header { padding:28px 0; } .brand { display:flex; align-items:center; gap:12px; font-weight:800; letter-spacing:.03em; } .mark { width:42px; height:42px; border:1px solid var(--line); border-radius:50%; display:grid; place-items:center; background:linear-gradient(135deg,rgba(158,231,255,.28),rgba(215,184,255,.16)); }
    main { padding:56px 0 64px; } .kicker { color:var(--accent); text-transform:uppercase; letter-spacing:.16em; font-size:.78rem; font-weight:900; } h1 { margin:12px 0 18px; font-size:clamp(2.25rem,6vw,5rem); line-height:.98; letter-spacing:-.06em; max-width:900px; } .lead { color:var(--muted); font-size:clamp(1.08rem,2vw,1.28rem); max-width:760px; }
    .cta { display:flex; flex-wrap:wrap; gap:14px; margin-top:30px; } a.button { display:inline-flex; min-height:48px; align-items:center; justify-content:center; padding:0 18px; border-radius:999px; text-decoration:none; font-weight:850; color:#07111f; background:linear-gradient(135deg,var(--accent),var(--accent2)); } a.button.secondary { color:var(--text); background:rgba(255,255,255,.08); border:1px solid var(--line); }
    .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:42px; } .card { border:1px solid var(--line); background:rgba(255,255,255,.08); border-radius:24px; padding:24px; } h2 { margin:0 0 8px; font-size:1.08rem; } p { margin:0; } .muted { color:var(--muted); } footer { color:var(--muted); padding:24px 0 52px; font-size:.94rem; } @media (max-width:820px){.grid{grid-template-columns:1fr} main{padding-top:28px}}
  </style>
</head>
<body>
  <header class="wrap"><div class="brand"><span class="mark">✦</span><span>TJ Morris ACIR</span></div></header>
  <main class="wrap">
    <div class="kicker">AI · IT · Web · Archive Systems</div>
    <h1>AI IT Tech Web Services for the TJ Morris ACIR ecosystem.</h1>
    <p class="lead">A public landing page for AI-assisted web publishing, GitHub and Cloudflare routing, ontology-ready archive language, media support, and digital continuity for TJ Morris / ACO / ACIR projects.</p>
    <div class="cta"><a class="button" href="mailto:tjmorrisshow@icloud.com?subject=TJ%20Morris%20ACIR%20Web%20Services">Request Web Support</a><a class="button secondary" href="https://github.com/cosmosambassador/americancommunicationsonline.github.io">View Public Archive Repo</a></div>
    <section class="grid" aria-label="Core services">
      <article class="card"><h2>Domain + Cloud Routing</h2><p class="muted">Cloudflare, GitHub Pages, Workers, DNS, SSL, and public web continuity.</p></article>
      <article class="card"><h2>AI Content + Prompt Systems</h2><p class="muted">Scripts, prompts, metadata, web copy, and platform-ready launch text.</p></article>
      <article class="card"><h2>Archive + Ontology Support</h2><p class="muted">Clean categories for ACO, ACIR, TJ Morris, books, shows, and symbolic teaching records.</p></article>
    </section>
  </main>
  <footer class="wrap">© 2026 TJ Morris ACIR. Human Source Authority: Theresa Janette Thurmond Morris / TJ Morris.</footer>
</body>
</html>`;
