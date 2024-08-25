import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
      colors: {
        'text-custom': 'rgba(var(--text))',
        'background-custom': 'rgba(var(--background))',
        'primary-custom': 'rgba(var(--primary))',
        'secondary-custom': 'rgba(var(--secondary))',
        'accent-custom': 'rgba(var(--accent))',
       },
       
    },
  },
  plugins: [],
};
export default config;
