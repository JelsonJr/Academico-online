/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xsm: '320px',
      sm: '375px',
      gsm: '410px',
      msm: '480px',
      ltm: '570px',
      lsm: '680px',
      md: '768px',
      lmd: '864px',
      dlg: '1024px',
      lg: '1199px',
      xl: '1280px',
      '1xl': '1367px',
      '2xl': '1536px', 
  },
  colors: {
    'blue': '#2A5DC4',
    'grey': '#514B4C',
    'light-grey': '#DADADA',
    // 'light-yellow': '#FDC8444D',
    // 'bg-color': '#FAFAFA',
    // 'yellow': '#FDC844',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
