export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: 'var(--color-sage)',
          dark: 'var(--color-sage-dark)',
          light: 'var(--color-sage-light)',
        },
        earth: 'var(--color-earth)',
        stone: 'var(--color-stone)',
      },
      fontFamily: {
        japanese: ['Noto Serif JP', 'serif'],
      },
    },
  },
}