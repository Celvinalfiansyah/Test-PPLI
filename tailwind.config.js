/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3BA9A0",
          light: "#5FC1B9",
          dark: "#2A8780",
          50: "#F0FAF9",
          100: "#D9F2EF",
          900: "#1A3A4A",
        },
        ink: {
          50: "#F7F8F9",
          100: "#EDEFF1",
          200: "#D9DDE1",
          300: "#B8BFC6",
          400: "#8A9299",
          500: "#5C6469",
          600: "#3D4348",
          700: "#262A2E",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
        accent: {
          DEFAULT: "#E8A838",
          light: "#F5C876",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};