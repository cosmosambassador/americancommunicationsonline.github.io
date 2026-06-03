# Cloudflare Pages Setup — American Communications Online

## Repository Source

Use this existing GitHub repository as the public source of truth:

`cosmosambassador/americancommunicationsonline.github.io`

The Cloudflare Pages deployable website files are stored in:

`public/`

The starter page is:

`public/index.html`

## Cloudflare Dashboard Steps

1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages** and then **Connect to Git**.
5. Authorize GitHub access if Cloudflare requests it.
6. Select the repository:
   `cosmosambassador/americancommunicationsonline.github.io`
7. Use these deployment settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `public`
8. Save and deploy.
9. After the first successful deployment, open the Pages project and select **Custom domains**.
10. Attach the approved public domain or subdomain after TJ/JT review.

## Recommended Custom-Domain Pattern

Use a subdomain first while testing, for example:

`aco.tjmorris.us`

or

`hub.tjmorris.us`

Do not redirect the primary domains until the test deployment has been reviewed.

## Human Approval Gate

No DNS cutover, production redirect, destructive change, overwrite action, or irreversible publication step should occur without explicit TJ/JT approval.

## Rollback

If a deployment needs to be reversed:

1. Open the Cloudflare Pages project.
2. Review **Deployments**.
3. Roll back to the last approved deployment.
4. If DNS was changed, restore the previous DNS record manually.
