// Pré-renderiza a home no build: coloca o HTML do React dentro de dist/index.html,
// para que buscadores e robôs de IA leiam o conteúdo sem executar JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const indexPath = path.join(root, 'dist', 'index.html');
const template = readFileSync(indexPath, 'utf-8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('Marcador <div id="root"></div> não encontrado em dist/index.html');

const html = template.replace(marker, `<div id="root">${render()}</div>`);
writeFileSync(indexPath, html);
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Pré-renderizado: dist/index.html (${Math.round(html.length / 1024)} KB)`);
