/** @type {import('tailwindcss').Config} */
import tailwindcss from '@tailwindcss/vite'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-dot': 'pulseDot 1.4s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 80%, 100%': { transform: 'scale(0)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
}
