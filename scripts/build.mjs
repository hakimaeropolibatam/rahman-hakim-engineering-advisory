import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
await mkdir('dist/data', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('favicon.svg', 'dist/favicon.svg');
await cp('assets/rahman-hakim-logo.svg', 'dist/assets/rahman-hakim-logo.svg');
await cp('data/portfolio.js', 'dist/data/portfolio.js');
console.log('Static website prepared in dist/ with portfolio data.');
