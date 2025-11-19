/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',    // Teal 500
        secondary: '#0f172a',  // Slate 900
        dark: '#020617',       // Slate 950
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};