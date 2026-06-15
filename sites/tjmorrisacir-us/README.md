# TJ Morris ACIR — AI IT Tech Web Splash Page

This folder contains deployment-ready files for the public `tjmorrisacir.us` splash page.

## Files

- `index.html` — static splash page for GitHub Pages or Cloudflare Pages.
- `worker.js` — Cloudflare Worker version of the same landing page.

## Recommended deployment path

### Option A — Cloudflare Pages from GitHub

1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Choose **Create application**.
4. Choose **Pages**.
5. Connect GitHub repository: `cosmosambassador/americancommunicationsonline.github.io`.
6. For the build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `sites/tjmorrisacir-us`
7. Deploy.
8. Add custom domain: `tjmorrisacir.us`.

### Option B — Cloudflare Worker

1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Create a Worker.
4. Paste the content of `worker.js`.
5. Deploy.
6. Add a custom domain route for `tjmorrisacir.us`.
7. Test `https://tjmorrisacir.us/health`.

### Option C — GitHub Pages custom domain

Use this only if `tjmorrisacir.us` should become the custom domain for this GitHub Pages repository root.

1. Move or copy `sites/tjmorrisacir-us/index.html` to the repository root as `index.html`.
2. Add a root-level `CNAME` file containing only:

```text
tjmorrisacir.us
```

3. In GitHub repository settings, enable Pages from the `main` branch.
4. In Cloudflare DNS, point the domain to GitHub Pages using GitHub's required records.

## Governance note

TJ Morris / Theresa Janette Thurmond Morris remains the human source authority and final editor. Public pages should separate confirmed records, owner-supplied archive material, symbolic teaching language, metaphysical framework, cultural commentary, and review-pending claims.
