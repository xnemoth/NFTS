/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0D0D0D",
      secondary: "#979797",
      background: "#EFF2F6",
      text_primary: "#000000",
      text_secondary: "#979797",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
  },
  plugins: [],
};
