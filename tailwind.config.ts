import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        backgroundLight: "#F7F5F4",
        backgroundDark: "#1e1e1e",
        fontColorGray: "#bfbebd",
      }
    },
  },
  plugins: [],
};
export default config;
