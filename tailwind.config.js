/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#274C5B',
        secondary: '#7EB693',
        'theme-purple': '#592EA9',
        'theme-white': '#F9F8F8',
        'theme-green-light': '#EFF6F1',
        'theme-yellow': '#EFD372',
        'theme-dark': '#525C60',
        'theme-gray': '#D4D4D4'
      },
      fontFamily: {
        roboto:["var(--roboto)"],
        yellowTail:['var(--yellowTail)'],
        openSans:['var(--openSans)']
      }
    },
  },
  plugins: [],
}
