/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#f39c0b",
        // secondary: "#e86f00",
        // primaryDark: "#d65609",
        primary: "#317256",
        secondary: "#54ab7c",
        primaryDark: "#2c442c",
        dark: "#656565",
        warning:"#FF5733"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
