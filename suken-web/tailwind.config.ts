import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent1: "#FFE66D",
        accent2: "#7A5FFF",
        accent3: "#FF8E53",
        dark: "#292F36",
        light: "#F7FFF7",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(255, 142, 83, 0.9))",
        "gradient-2": "linear-gradient(135deg, rgba(78, 205, 196, 0.9), rgba(122, 95, 255, 0.9))",
        "gradient-3": "linear-gradient(135deg, rgba(255, 230, 109, 0.9), rgba(255, 142, 83, 0.9))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
