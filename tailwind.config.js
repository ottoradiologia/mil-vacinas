/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Mil Vacinas (suave, fria): ver PROPOSTA_DESIGN.md
        mv: {
          petrol: '#2B5D5A',   // títulos
          teal: '#2E7570',     // links e rótulos
          btn: '#83B2AC',      // botão = verde-água do logotipo
          btnHover: '#76A9A2',
          btnInk: '#0F3533',   // texto sobre o botão
          wash: '#E7F2F0',     // faixas claras
          mist: '#F1F6F6',     // fundo frio
          heart: '#F08C9B',    // rosa do coração do logotipo (detalhes)
          heartInk: '#3D1219',
          ink: '#14302F',      // texto
          muted: '#557270',    // texto secundário
          line: '#D6E4E2',
        },
        // Nomes antigos mantidos para componentes ainda não migrados
        primary: '#2E7570',
        secondary: '#F1F6F6',
        accent: '#F08C9B',
        text: '#14302F',
        textSecondary: '#557270',
      },
      fontFamily: {
        sans: ['Figtree', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Arial Narrow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
