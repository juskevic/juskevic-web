import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import type { PluginAPI } from 'tailwindcss/types/config';

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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ghostwhite: '#F4F5FA', // Ghostwhite background color
        blue: {
          500: '#4A90E2', // Soft medium blue for primary elements
        },
        gray: {
          50: '#F9F9F9',  // Very light gray for subtle elements
          100: '#F0F0F0', // Light gray for backgrounds or borders
          200: '#E0E0E0', // Light gray for borders or shadows
          300: '#B0B3C1', // Neutral gray for secondary elements
          400: '#707070', // Gray for icons and less prominent text
          500: '#333333', // Dark gray for text
        },
        coral: '#FF6F61', // Accent color for highlights and interactive elements
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: '#faf9f6',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#000000',
              foreground: '#FFFFFF',
            },
            secondary: {
              DEFAULT: '#4a4a4a', // Neutral gray for secondary elements
              foreground: '#a1a1a1', // Dark gray text on secondary elements
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#FFFFFF', // White for primary elements
              foreground: '#000000', // Black for text over white elements
            },
            secondary: {
              DEFAULT: '#D0D0D0', // Medium gray for accents
              foreground: '#000000', // Black for text over gray elements
            },
            background: {
              DEFAULT: '#000000', // Black background
              foreground: '#FFFFFF', // White text
            },
            foreground: {
              DEFAULT: '#FFFFFF', // White text color
            },
            focus: '#FFFFFF', // White for focus states
          },
        },
      },
    }),
    require('tailwindcss-animated'),
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.hollow-text': {
          color: '#faf9f6',
          '-webkit-text-stroke': '2px #333333',
        },
        '@screen xl': {
          '.hollow-text': {
            '-webkit-text-stroke': '4px #333333',
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;
