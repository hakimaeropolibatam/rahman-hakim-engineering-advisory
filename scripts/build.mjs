import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

// Build only files explicitly approved for publication.
await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
await mkdir('dist/data', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('assets', 'dist/assets', { recursive: true });
await cp('data/portfolio.js', 'dist/data/portfolio.js');
await cp('data/trainer.js', 'dist/data/trainer.js');
await cp('robots.txt', 'dist/robots.txt');
await cp('sitemap.xml', 'dist/sitemap.xml');
await cp('privacy.html', 'dist/privacy.html');

// Optional Cloudflare Web Analytics beacon. Set CF_WEB_ANALYTICS_TOKEN
// in the Cloudflare Workers Builds environment after enabling Web Analytics.
let html = await readFile('index.html', 'utf8');
const analyticsToken = process.env.CF_WEB_ANALYTICS_TOKEN || '';
const analyticsEnabled = /^[a-f0-9]{32}$/i.test(analyticsToken);
if (analyticsEnabled) {
  const beacon = '<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon=\'' +
    JSON.stringify({ token: analyticsToken }) + '\'></script>';
  html = html.replace('</head>', beacon + '\n</head>');
  await writeFile('dist/index.html', html, 'utf8');
}

// The site uses one inline script for its UI. Hash its exact bytes so the
// browser can run it while blocking all other unauthorized inline scripts.
const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (inlineScripts.length !== 1) {
  throw new Error('Expected exactly one inline script. Review CSP before deployment.');
}
const scriptHash = createHash('sha256').update(inlineScripts[0][1]).digest('base64');

// Cloudflare Workers Static Assets applies these response headers to files in
// dist/. If using a Worker fetch handler instead, headers must be set there.
const csp = [
  "default-src 'none'",
  "script-src 'self' 'sha256-" + scriptHash + "'" + (analyticsEnabled ? " https://static.cloudflareinsights.com" : ""),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'" + (analyticsEnabled ? " https://cloudflareinsights.com" : ""),
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join('; ');
const securityHeaders = [
  '/*',
  '  Content-Security-Policy: ' + csp,
  '  X-Content-Type-Options: nosniff',
  '  X-Frame-Options: DENY',
  '  Referrer-Policy: no-referrer',
  '  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  '',
].join('\n');
await writeFile('dist/_headers', securityHeaders, 'utf8');
console.log('Static site built with security headers. Cloudflare Web Analytics: ' + (analyticsEnabled ? 'enabled' : 'not configured; set CF_WEB_ANALYTICS_TOKEN'));
