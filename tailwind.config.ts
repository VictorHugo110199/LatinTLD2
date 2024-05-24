import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      amino1: ['"Amino Regular 1"'],
      amino2: ['"Amino Regular 2"'],
      amino3: ['"Amino Regular 3"'],
      amino4: ['"Amino Regular 4"'],
      amino5: ['"Amino Regular 5"'],
      amino6: ['"Amino Regular 6"'],
      amino7: ['"Amino Regular 7"'],
    },
    extend: {
      colors: {
        white: {
          special: '#f8edd9',
        },
        green: {
          light: '#ced1a9',
          medium: '#828958',
          dark: '#526020',
        },
        pink: {
          light: '#bc6d84',
          dark: '#6a313b',
        },
        background: '#f3eada',
        beige: {
          text: '#f8eddd',
        },
        astral: {
          background: '#3b3288',
          button: '#caa84a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
