/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-money-pungli": "url('../assets/bg-pattern-login.png')",
      },
      colors: {
        "primary": "#D81D2A",
        "secondary": "#5A070C",
        "background": "#F5F5F5",
        "font-dark-01" : "#030303",
      },
    },
  },
  plugins: [],
};
