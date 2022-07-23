/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        tablet: "720px",
        laptop: "960px",
        desktop: "1140px",
      },
      center: true,
      padding: {
        DEFAULT: "1rem",
        tablet: "0px",
      },
    },
    screens: {
      tablet: "768px",
      laptop: "992px",
      desktop: "1200px",
    },
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
