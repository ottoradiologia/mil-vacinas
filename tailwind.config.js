/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#83b2ac',
        secondary: '#f0f4e3',
        accent: '#fdb4be',
        text: '#333333',
        textSecondary: '#666666',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'display': ['Impact', 'Bauhaus 93', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
