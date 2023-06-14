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
        blue600: '#3B8589',
        blue500: '#599DA1',
        bgColor: '#F4F8E8',
      },
      backgroundImage: {
        golfBg: 'url("/golfBg.png")',
      },

      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}
