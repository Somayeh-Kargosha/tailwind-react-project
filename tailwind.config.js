/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "995px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
