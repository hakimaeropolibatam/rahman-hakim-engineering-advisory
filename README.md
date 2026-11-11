# Rahman Hakim Engineering Advisory

## Publish live for free (Render)

[**Deploy website to Render — click here**](https://render.com/deploy?repo=https://github.com/hakimaeropolibatam/rahman-hakim-engineering-advisory)

This deploy shortcut reads the checked-in `render.yaml`, creates a free static site, and publishes to an `*.onrender.com` address after the owner signs in and approves the deployment. No API keys or credit-card information should be posted to GitHub or in chat.

1. Click the deployment link above and sign in to Render.
2. Authorize the public GitHub repository if requested.
3. Review the single static service named `rahman-hakim-engineering-advisory`.
4. Confirm **Deploy Blueprint**; then open the assigned public URL from the Render dashboard.
5. Confirm the live page shows the services and that WhatsApp/email links work.

Note: Render free static sites have monthly bandwidth/build-minute allowances. Update the repository on branch `main` to trigger future automatic deployments when Git integration is active.


Official website source for **Rahman Hakim Engineering Advisory**, a principal-led technical advisory practice.

**Brand promise:** *Independent Judgment. Evidence-Based Engineering.*

## Pages and features

- Responsive one-page layout inspired by the structure of Agency / Start Bootstrap, with original styling.
- Sections: Home, Expertise, Typical Engagements, Approach, About, Contact.
- Five services: Fire Protection & Assurance, MEP Forensic Engineering, Risk & Safety Advisory, Engineering R&D, and Engineering Management.
- English / Indonesian text switching.
- Direct WhatsApp and email links. No visitor information is collected via forms.
- Static HTML with inline CSS and JavaScript; no build system and no external scripts.

## Hosting: Cloudflare Pages (recommended)

1. Visit https://dash.cloudflare.com/ and select **Workers & Pages > Create > Pages > Connect to Git**.
2. Authorize GitHub if prompted.
3. Select the repository `hakimaeropolibatam/rahman-hakim-engineering-advisory`.
4. Choose the `main` branch; leave the build command empty.
5. Set output directory to `/` (repository root), then deploy.
6. Cloudflare will assign a `*.pages.dev` URL. Confirm the live site and test the contact links.

Alternatively, the repository can be used as the source of an independently hosted static website.

## Updating

Edit `index.html` to revise the text, page layout, or contact information. The navbar and favicon use `assets/rahman-hakim-official-symbol.png`, the principal's supplied logo; About the Principal uses `assets/rahman-hakim-profile.jpg`. Keep this file unchanged in shape and color when updating the brand.

**Contact:** rh.eng.advisory@outlook.com / +62 823 8831 1280.

**Important:** Credentials on the site are based on information provided by the principal. Check professional registration, validity, and scope of authorization before any regulated engagement.

## Portfolio editing and Cloudflare Workers deployment

Portfolio entries are maintained in `data/portfolio.js`, separate from the webpage layout in `index.html`.

- Records contain **year only**, not dates/times. There are 57 MEP references and 3 fire protection references from 2022-2026.
- Private individuals are anonymized in the public dataset. All descriptions and roles must be reviewed against supporting records before making case-study claims.
- The site shows 12 references at a time, and visitors can filter by MEP/Fire Protection and by year.
- The year 2026 group contains 9 MEP and 3 fire protection references.

### Publish changes to the existing Cloudflare Worker

Existing Worker URL supplied by the site owner: `https://summer-fire-6da6.hakim-aeropolibatam.workers.dev/`.

For **Cloudflare Workers Builds**:

1. Open Cloudflare dashboard > Workers & Pages > **summer-fire-6da6**.
2. Go to **Settings > Builds > Connect** if Git integration is not yet connected.
3. Choose GitHub repo `hakimaeropolibatam/rahman-hakim-engineering-advisory`, production branch `main`.
4. Set the build command to `npm run build`, deploy command to `npx wrangler deploy`. Check that the Worker name in Cloudflare matches `wrangler.toml` (`summer-fire-6da6`).
5. Save settings, trigger a build (or push a new Git commit), and inspect deployment logs before checking the URL above with `#portfolio`.

The `scripts/build.mjs` file copies the source HTML, public logo, favicon and portfolio dataset to `dist/`, which Wrangler serves as static assets. This build intentionally excludes internal reference files.

**Caution:** Connecting this repo and deploying it to an existing Worker replaces the Worker's currently deployed website. Review the live site and account settings first, and retain a backup if it includes additional features not present in this repo. This ChatGPT workflow can edit GitHub but cannot confirm Cloudflare credentials, settings or completed deploys without direct Cloudflare access.

## Official logo asset

Website uses the original uploaded **fire-and-buildings symbol PNG** at `assets/rahman-hakim-official-symbol.png`, paired with live typography for the `RAHMAN HAKIM / ENGINEERING ADVISORY` wordmark. The earlier approximate SVG is not used by the website build.

## Trainer & Professional Credentials

The portfolio now includes a distinct **Trainer & Credentials** filter, without conflating qualifications with delivered training jobs. Data: `data/trainer.js` (29 provided records in 5 practice areas: fire/emergency, OHS/risk, mechanical/building/construction, digital design/manufacturing, and teaching). The MEP project cards are labelled `MEP Project`.

- Dates in the **project directory** are reduced to years only; credential entries show reported issue month/year, stated expiry, and identifiers where supplied.
- Three credentials have an expiry before November 2026 and are flagged as historic/expired using the visitor's current date. Unspecified expiry does not mean confirmed active status.
- This listing indicates expertise relevant to training, **not verified trainer employment, course-delivery records, trainer accreditation, or active regulated-course permission**.
- For the GitHub → Cloudflare Workers build, `npm run build` must run before `npx wrangler deploy` so `dist/data/trainer.js` is included.
