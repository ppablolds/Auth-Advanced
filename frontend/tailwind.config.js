/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Russian-violet-Dark": "#10002B",
        "Russian-violet": "#240046",
        "Russian-Persian-indigo": "#3C096C",
        "Russian-Tekhelet": "#5A189A",
        "Russian-French-violet": "#7B2CBF",
        "Russian-Amethyst": "#9D4EDD",
        "Russian-Heliotrope": "#C77DFF",
        "Russian-Mauve": "#E0AAFF",
      }
    },
  },
  plugins: [],
}
