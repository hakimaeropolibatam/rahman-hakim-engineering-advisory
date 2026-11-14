# Website Monitoring & Lead Management
## Rahman Hakim Engineering Advisory

Website: https://summer-fire-6da6.hakim-aeropolibatam.workers.dev/
Repository: https://github.com/hakimaeropolibatam/rahman-hakim-engineering-advisory

## 1. Visitor analytics — Cloudflare Web Analytics (recommended)

Cloudflare Web Analytics is the recommended first analytics layer for this static company profile. It provides page views, visitors, referrers, geography at an aggregate level, and web performance metrics without requiring a public visitor counter or a customer database. Cloudflare describes Web Analytics as privacy-first and says it does not collect or use visitors' personal data.

Setup:
1. Sign in to https://dash.cloudflare.com/
2. Open Analytics & Logs > Web Analytics (menu wording may vary).
3. Add a site / enable Web Analytics for the exact workers.dev website. If the dashboard presents a beacon token, copy its 32-character hexadecimal token.
4. Open Workers & Pages > summer-fire-6da6 > Settings > Builds > Variables and Secrets (or the build environment variables section).
5. Add a plain-text build variable named `CF_WEB_ANALYTICS_TOKEN` with that token. This token is a public site identifier, not an account API secret. Do not add a Cloudflare API token here.
6. Trigger a new deployment. The build script injects the Cloudflare beacon only when the value matches a 32-character hexadecimal token and automatically adds the beacon hosts to the Content Security Policy.
7. Return to Web Analytics and verify page views after the site receives real visits. Initial reporting can take time.

If the dashboard offers automatic Web Analytics injection for this Worker, that may be used instead. Do not install two beacons or double-count page views. If no token is shown for this Workers setup, leave analytics disabled until the Cloudflare dashboard provides a supported integration.

## 2. Worker health and infrastructure

Use Cloudflare Dashboard > Workers & Pages > summer-fire-6da6 > Metrics / Observability to review:
- Requests and traffic trend
- 4xx and 5xx responses
- CPU time / execution errors
- Deployment history and build logs

These are infrastructure metrics, not the same as unique website visitors. Do not treat raw requests as unique users.

## 3. Uptime monitoring

Recommended: UptimeRobot (free tier, external service).
1. Create an account at https://uptimerobot.com/
2. Add an HTTPS monitor for the homepage URL above.
3. Choose a reasonable check interval offered by the current free plan.
4. Set alert notifications to an email you actively monitor.
5. Test the alert and keep the monitor active.

A successful uptime check confirms that the URL responds; it does not prove every website feature is working.

## 4. Search visibility

Recommended: Google Search Console.
1. Open https://search.google.com/search-console/
2. Add a URL-prefix property for the exact workers.dev URL.
3. Complete the verification method offered by Google.
4. Submit https://summer-fire-6da6.hakim-aeropolibatam.workers.dev/sitemap.xml
5. Review indexing, search queries, impressions, clicks and any indexing issues.

The repository includes `robots.txt` and `sitemap.xml`. The sitemap lists only the public homepage; fragment links are not separate indexable pages.

## 5. Performance

Use Google PageSpeed Insights: https://pagespeed.web.dev/
Test the homepage on mobile and desktop. Review Core Web Vitals (LCP, INP, CLS), image weight and accessibility. Run tests after deployment and periodically after significant content or image changes.

## 6. Lead handling

The website contact actions now open:
- WhatsApp with a prefilled, editable message identifying the website as the referral source.
- Email with a prefilled subject and structured enquiry details.
- A floating WhatsApp click-to-chat widget with service information, quotation and project discussion options.

Important:
- These are click-to-chat links, not an automated WhatsApp Business API bot.
- No enquiry is sent until the visitor reviews and presses Send in WhatsApp or their email application.
- No visitor name, phone number or enquiry is stored in the website.
- Count real leads from messages received, not from WhatsApp button clicks unless a separate consent-aware event analytics system is configured.

## 7. Privacy and governance

- Publish only project and credential information approved for public disclosure.
- Do not add client documents, private contact details or confidential site photographs to the public repository.
- Do not add advertising pixels, session recording or invasive tracking unless there is a clear business need and appropriate privacy notice / consent assessment.
- Review GitHub collaborator access and enable two-factor authentication for GitHub and Cloudflare.
- Keep an export/backup of the last working deployment before major changes.

## Monitoring cadence

| Frequency | Check |
| --- | --- |
| Weekly | Cloudflare visitor trend, uptime alerts, WhatsApp/email enquiries |
| Monthly | Search Console queries, PageSpeed mobile result, broken links |
| Every deployment | Build success, homepage, portfolio/trainer filters, language switch, WhatsApp/email links, security headers |
| Quarterly | Access permissions, credentials displayed publicly, backups and privacy notice |

## Important interpretation

Cloudflare Web Analytics page views and visitors, Worker request counts, uptime checks and actual enquiries are different metrics. Report them separately. The website does not show a public visitor counter because an accurate counter would require a persistent data store or an external counter service and can expose misleading totals if cached or reset.
