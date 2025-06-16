import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['"Plus Jakarta Sans"', 'sans-serif'],
        third: ['Inter', 'sans-serif'],
        font3: ['Manrope', 'sans-serif'],       // ← замена Formular
        font4: ['Jura', 'sans-serif'],
        font5: ['"DM Sans"', 'sans-serif'],     // ← замена Graphik
        font6: ['"Golos Text"', 'sans-serif'],
      },
      colors: {
        background: "#ffffff",
        foreground: "#ebebf9",
      },
    },
  },
  plugins: [],
};

export default config;
