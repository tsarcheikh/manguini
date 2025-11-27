/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#d1d5db',
        },
        primary: {
          DEFAULT: '#355ca7',
          light: '#4b6fb4',
          dark: '#2d4f8f',
          50: '#eef3ff',
          100: '#e0eaff',
          200: '#c7d6ff',
          300: '#a5baff',
          400: '#7a94ff',
          500: '#355ca7',
          600: '#2f52a0',
          700: '#284790',
          800: '#223c80',
          900: '#1c3170',
        },
        secondary: {
          DEFAULT: '#eea852',
          light: '#f2b76b',
          dark: '#de994c',
          50: '#fff8eb',
          100: '#ffefd3',
          200: '#ffd59b',
          300: '#eea852',
          400: '#de994c',
          500: '#d98a3b',
          600: '#c47929',
          700: '#a35f20',
          800: '#854b1d',
          900: '#6d3d1b',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 