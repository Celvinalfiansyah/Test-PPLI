/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          ink: {
            50:  "#f7f7f7",
            100: "#ededed",
            200: "#d9d9d9",
            300: "#bfbfbf",
            400: "#8c8c8c",
            500: "#595959",
            600: "#3d3d3d",
            700: "#262626",
            800: "#1a1a1a",
            900: "#0d0d0d",
          },
          accent: {
            DEFAULT: "#4a6b52",
            light: "#6b8f74",
            dark: "#2f4636",
          },
        },
        letterSpacing: {
          widest2: "0.25em",
        },
      },
    },
    plugins: [],
  };