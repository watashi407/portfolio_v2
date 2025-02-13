import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-default": "var(--color-text-default)",
        "bg-default": "var(--color-bg-default)",
        "bg-light": "var(--color-bg-light)",
        "bg-highlight": "var(--color-bg-highlight)",
        "object-dark": "var(--color-object-dark)",
        "object-light": "var(--color-object-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;
