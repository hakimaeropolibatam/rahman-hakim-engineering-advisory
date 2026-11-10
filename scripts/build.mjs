import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
await mkdir('dist/data', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('assets/rahman-hakim-official-symbol.png', 'dist/assets/rahman-hakim-official-symbol.png');
await cp('data/portfolio.js', 'dist/data/portfolio.js');
console.log('Static website built with the original Rahman Hakim PNG logo and portfolio.');
