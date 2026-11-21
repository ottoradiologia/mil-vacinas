// Pré-renderiza as páginas no build: coloca o HTML do React dentro do index.html de cada uma,
// para que buscadores, robôs de IA e prévias de link leiam o conteúdo sem executar JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { render, renderBlack } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const pages = [
  { file: 'index.html', render },
  { file: path.join('black', 'index.html'), render: renderBlack },
];

const marker = '<div id="root"></div>';
for (const page of pages) {
  const filePath = path.join(root, 'dist', page.file);
  const template = readFileSync(filePath, 'utf-8');
  if (!template.includes(marker)) throw new Error(`Marcador <div id="root"></div> não encontrado em dist/${page.file}`);
  const html = template.replace(marker, `<div id="root">${page.render()}</div>`);
  writeFileSync(filePath, html);
  console.log(`Pré-renderizado: dist/${page.file} (${Math.round(html.length / 1024)} KB)`);
}

rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
