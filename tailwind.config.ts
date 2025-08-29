import { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Corporate neutral palette with single accent
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Primary brand color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      spacing: {
        // 8pt grid system
        '1': '0.125rem', // 2px
        '2': '0.25rem', // 4px
        '3': '0.375rem', // 6px
        '4': '0.5rem', // 8px
        '6': '0.75rem', // 12px
        '8': '1rem', // 16px
        '10': '1.25rem', // 20px
        '12': '1.5rem', // 24px
        '16': '2rem', // 32px
        '20': '2.5rem', // 40px
        '24': '3rem', // 48px
        '32': '4rem', // 64px
        '40': '5rem', // 80px
        '48': '6rem', // 96px
        '64': '8rem', // 128px
      },
      boxShadow: {
        // Subtle shadows only
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        section: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        xl: '0.75rem', // 12px - primary rounded value
      },
    },
  },
} satisfies Config;
