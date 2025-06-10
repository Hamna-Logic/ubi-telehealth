/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        // Branding Colors
        primary: '#4A637A',     // Light Blue
        secondary: '#98B6CC',   // Coral / Accent
        
        // Mode-Specific Backgrounds
        lightBg: '#c4d0d8',
        darkBg: '#1E1E1E',

        // Mode-Specific Text
        lightText: '#4A4A4A',
        darkText: '#E0E0E0',

        // Utility
        muted: 'rgba(0, 0, 0, 0.6)',

        // You can optionally alias them for clarity in components
        dark: '#1E1E1E',
        light: 'rgba(0, 0, 0, 0.6)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
