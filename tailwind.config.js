import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#8b5cf6",
        secondary: "#3b82f6",
        muted: "#888888",
        foreground: "#f5f5f5",
        background: "#090909",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
        display: ["Urbanist", "Geist", "sans-serif"],
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [forms({ strategy: "class" }), containerQueries],
};
