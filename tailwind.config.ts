import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'oxford-blue': '#0F172A',
        'keppel': '#14B8A6',
        'anti-flash-white': '#E5E7EB',
        'uranian-blue': '#BFDBFE',
        primary: {
          DEFAULT: '#14B8A6',
          foreground: '#FFFFFF',
          50: '#ecfdf9',
          100: '#d1faef',
          200: '#a6f4e0',
          300: '#70e9ce',
          400: '#39d4b9',
          500: '#14B8A6',
          600: '#0f968a',
          700: '#117768',
          800: '#125f54',
          900: '#134e47',
        },
        secondary: {
          DEFAULT: '#BFDBFE',
          foreground: '#0F172A',
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#BFDBFE',
          300: '#8bc0fc',
          400: '#5a9ff9',
          500: '#2e7ef2',
          600: '#1762e2',
          700: '#144cc6',
          800: '#1640a0',
          900: '#173a7c',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          50: '#fff0ee',
          100: '#ffd9d3',
          200: '#ffc3ba',
          300: '#ffad9f',
          400: '#ff9685',
          500: '#ff806b',
          600: '#ff6f61',
          700: '#e55a4d',
          800: '#cc4f42',
          900: '#b34438',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;