/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}',  // ← include “.css” so your @layer rules get picked up
  ],
  theme: { extend: {} },
  plugins: [],
}
