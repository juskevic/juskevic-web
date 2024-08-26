import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#F9F9F9",   // Very light gray for subtle elements
          100: "#F0F0F0",  // Light gray for backgrounds
          200: "#D0D0D0",  // Medium gray for borders or secondary elements
          300: "#A0A0A0",  // Dark gray for text or borders
          400: "#707070",  // Darker gray for emphasis
          500: "#404040",  // Almost black for strong contrasts
          600: "#333333",  // Black-gray for text
          700: "#1F1F1F",  // Almost black for backgrounds
          800: "#0D0D0D",  // Very dark gray for deeper backgrounds
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFFFFF", // White for primary elements
              foreground: "#000000", // Black for text over white elements
            },
            secondary: {
              DEFAULT: "#D0D0D0", // Medium gray for accents
              foreground: "#000000", // Black for text over gray elements
            },
            background: {
              DEFAULT: "#000000", // Black background
              foreground: "#FFFFFF", // White text
            },
            foreground: {
              DEFAULT: "#FFFFFF", // White text color
            },
            focus: "#FFFFFF", // White for focus states
          },
        },
      },
    }),
    require("tailwindcss-animated"),
  ],
};

export default config;
