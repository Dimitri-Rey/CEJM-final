/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF7F2', dark: '#F0EBE3' },
        eco: { DEFAULT: '#C4622D', light: '#F4E6DC', dark: '#A0501F' },
        droit: { DEFAULT: '#1E3A5F', light: '#D6E4F7', dark: '#152A44' },
        management: { DEFAULT: '#2D5A3D', light: '#D4EAD9', dark: '#1F3F2A' },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
