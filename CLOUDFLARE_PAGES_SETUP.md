1| # Cloudflare Pages Setup — American Communications Online
2| 
3| ## Repository Source
4| 
5| Use this existing GitHub repository as the public source of truth:
6| 
7| `cosmosambassador/americancommunicationsonline.github.io`
8| 
9| The Cloudflare Pages deployable website files are stored in:
10| 
11| `public/`
12| 
13| The starter page is:
14| 
15| `public/index.html`
16| 
17| ## Cloudflare Dashboard Steps
18| 
19| 1. Sign in to Cloudflare.
20| 2. Open **Workers & Pages**.
21| 3. Select **Create application**.
22| 4. Choose **Pages** and then **Connect to Git**.
23| 5. Authorize GitHub access if Cloudflare requests it.
24| 6. Select the repository:
25|    `cosmosambassador/americancommunicationsonline.github.io`
26| 7. Use these deployment settings:
27|    - Framework preset: `None`
28|    - Build command: leave blank
29|    - Build output directory: `public`
30| 8. Save and deploy.
31| 9. After the first successful deployment, open the Pages project and select **Custom domains**.
32| 10. Attach the approved public domain or subdomain after TJ/JT review.
33| 
34| ## Recommended Custom-Domain Pattern
35| 
36| Use a subdomain first while testing, for example:
37| 
38| `aco.tjmorris.us`
39| 
40| or
41| 
42| `hub.tjmorris.us`
43| 
44| Do not redirect the primary domains until the test deployment has been reviewed.
45| 
46| ## Human Approval Gate
47| 
48| No DNS cutover, production redirect, destructive change, overwrite action, or irreversible publication step should occur without explicit TJ/JT approval.
49| 
50| ## Rollback
51| 
52| If a deployment needs to be reversed:
53| 
54| 1. Open the Cloudflare Pages project.
55| 2. Review **Deployments**.
56| 3. Roll back to the last approved deployment.
57| 4. If DNS was changed, restore the previous DNS record manually.
58| 
59| ## Workers Routes
60| 
61| The following Cloudflare Workers route mappings are assigned to the `atlas-ai` worker:
62| 
63| | Route | Worker |
64| | --- | --- |
65| | `atlas.tjmorrismedia.com/*` | `atlas-ai` |
66| | `luccenzone.tjmorrismedia.com` | `atlas-ai` |
67| | `*.tjmorrismedia.com/*` | `atlas-ai` |
68| 
69| These route entries should be managed in the Cloudflare dashboard under **Workers & Pages** → **Routes** or via the Wrangler configuration when deploying to Cloudflare.
70| 
