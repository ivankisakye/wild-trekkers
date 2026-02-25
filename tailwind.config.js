/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safari: {
          green: '#2d5016',
          sand: '#f8a849',
          brown: '#e87a00',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'serif'],
        body: ['Aptos', 'sans-serif'],
      }
    },
  },
  plugins: [],
}