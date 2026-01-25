/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animations: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}