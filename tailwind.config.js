/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0d0d0d',
          900: '#1a1a1a',
          800: '#2b2b2b',
          700: '#3d3d3d',
        },
        ember: {
          500: '#ff5722',
          600: '#e64a19',
          400: '#ff7043',
          300: '#ff8a65',
        },
        steel: {
          500: '#c0c0c0',
          400: '#9e9e9e',
          300: '#bdbdbd',
          200: '#e0e0e0',
        },
        offwhite: '#f5f5f5',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #3d3d3d 1px, transparent 1px), linear-gradient(to bottom, #3d3d3d 1px, transparent 1px)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'spark': 'spark 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spark: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 87, 34, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 87, 34, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
