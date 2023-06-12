/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#372865",
        bg: "hsl(217.5deg 80% 98.04%)",
      },
      screens: {
        tablet: "700px",
        laptop: "1100px",
      },
    },
  },
  plugins: [],
};
