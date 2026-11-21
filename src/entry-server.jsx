import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import BlackFridayPage from './black/BlackFridayPage.jsx';

// Usado só no build: gera o HTML das páginas para robôs que não executam JavaScript.
export function render() {
  return renderToString(<App />);
}

export function renderBlack() {
  return renderToString(<BlackFridayPage />);
}
