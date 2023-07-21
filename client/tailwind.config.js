/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '800px',
        'lg': '1200px'
      },
      backgroundImage: (theme) => ({
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

