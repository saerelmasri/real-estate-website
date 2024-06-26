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
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
      },
      colors: {
        backgroundLight: "#F7F5F4",
        backgroundDark: "#1e1e1e",
        fontColorGray: "#bfbebd",
      }
    }, backgroundImage: {
      "logo": "url('/images/logo.svg')",
      "menuImg": "url('/images/menuImg.png')",
      "hero": "url('/images/hero.jpg')",
      "hero2": "url('/images/prop2.jpg')",
    },
  },
  plugins: [],
};
export default config;
