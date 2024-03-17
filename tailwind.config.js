/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#7367F0',
        'fb':'#E0E4EF',
        'GG':'#FAE2DF',
        'Tw':'#DBF0FD',
        'shadow':'#ea5455',
        "Homebg":"#F8F7FA",
        'navbg':'#FFFFFF'
      },
      boxShadow: {
        'custom': '0 1px 20px 1px #ea5455',
      },
    },
  },
  plugins: [],
}

