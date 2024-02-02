import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      'black-text': '#222222',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      'green-light': '#73CA30',
      yellow: '#ffc82c',
      red: '#e42313',
      // gray
      'gray-dark': '#273444',
      'gray-text': '#aaaaaa',
      'gray-border': '#f1f1f1',
      gray: '#DDDDDD',
      'gray-light': '#ffffff',
      'gray-white': '#fbfbfb',
    },
    keyframes: {
      'move-up': {
        '0%': {
          transform: 'translateY(0)',
        },
        '100%': {
          transform: 'translateY(-10px)',
        },
      },
      'fade-in': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'fade-in-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-out-down': {
        from: {
          opacity: '1',
          transform: 'translateY(0px)',
        },
        to: {
          opacity: '0',
          transform: 'translateY(10px)',
        },
      },
      'fade-out-up': {
        from: {
          opacity: '1',
          transform: 'translateY(0px)',
        },
        to: {
          opacity: '0',
          transform: 'translateY(10px)',
        },
      },
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'move-up': 'move-up 0.3s ease',
      'fade-in': 'fade-in 0.3s ease-in',
      'fade-in-left': 'fade-in-left 0.3s ease-out',
      'fade-in-down': 'fade-in-down 0.3s ease-out',
      'fade-in-up': 'fade-in-up 0.3s ease-out',
      'fade-out-up': 'fade-out-up 0.3s ease-out',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
