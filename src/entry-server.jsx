import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Usado só no build: gera o HTML da página para robôs que não executam JavaScript.
export function render() {
  return renderToString(<App />);
}
