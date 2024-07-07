import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'light-gray': 'rgb(249,250,251)',
        'dark-gray': 'rgb(33, 37, 41)',
        'h3-color' : 'rgb(23,23,23)',
      },
      boxShadow:{
        'rp' : '0 0 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily:{
        'noto' : 'Noto Sans, sans-serif'
      }
    },
  },
  plugins: [],
};
export default config;
