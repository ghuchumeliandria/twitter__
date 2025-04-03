import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        bgmain: "var(--bgmain)",
        foreground: "var(--foreground)",
        textgray: "var(--textgray)",
        bordercolor: "#2F3336",
        textgray2: '#808080'
      },
      screens: {
        "max-1290": { max: "1290px" },
      },
    },
  },
  plugins: [],
};
export default config;
