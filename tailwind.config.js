/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#C9FBFF',
          secondary: '#5C64FF',
          accent: '#EB6B47',
          neutral: '#23282F',
          'base-100': '#212121',
          info: '#0092D6',
          success: '#6CB288',
          warning: '#DAAD58',
          error: '#AB3D30',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
