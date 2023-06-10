/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
      },
      colors: {
        blue500: '#599DA1',
        bgColor: '#F4F8E8',
      },
      backgroundImage: {
        golfBg: 'url("/golfBg.png")',
      },
    },
  },
  plugins: [],
}
