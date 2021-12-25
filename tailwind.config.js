module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        'mobile': '640px',
        'hd': '1280px',
        'full-hd': '1920px',
        '2k': '2560px',
        '4k': '3840px',
        '8k': '7680px'
      },
      colors: {
        'bee-blue': '#90CAF9',
        'bee-pink': '#EFB7B9',
        'bee-yellow': '#FFD101',
        'bee-orange': '#F2805F',
        'bee-green': '#13ce66',
        'bee-purple': '#273444',
        'bee-pink-young': '#F2805F',
        'bee-purple-old': '#925978',
        'bee-black': '#333333',
        'bee-white': '#FFFFFF'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          'mobile': '8px',
          'hd': '16px',
          'full-hd': '24px',
          '2k': '32px',
          '4k': '48px',
          '8k': '96px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
