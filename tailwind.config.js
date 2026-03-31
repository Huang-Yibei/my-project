/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nx-green': '#1B4332',
        'nx-green-light': '#2D6A4F',
        'nx-gold': '#C9A84C',
        'nx-gold-light': '#D4AF61',
        'nx-cream': '#F8F5EF',
        'nx-dark': '#1A1A1A',
        'nx-text': '#3D3D3D',
      },
      fontFamily: {
        'serif': ['Noto Serif SC', 'serif'],
        'sans': ['Noto Sans SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
