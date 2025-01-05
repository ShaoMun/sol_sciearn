/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' }
        },
        grid: {
          '0%': { transform: 'perspective(500px) rotateX(45deg) translateY(0)' },
          '100%': { transform: 'perspective(500px) rotateX(45deg) translateY(-50px)' }
        }
      },
      animation: {
        bubble: 'bubble 2s infinite',
        grid: 'grid 20s linear infinite'
      }
    }
  },
  plugins: [],
} 