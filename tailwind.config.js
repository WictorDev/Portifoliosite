/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'custom-orange': 'rgb(255, 165, 0)','custom-neon': '0 4px 6px rgba(255, 165, 0, 0.5)', // Laranja (RGB)
    }

    },
  },
  plugins: [],
}

