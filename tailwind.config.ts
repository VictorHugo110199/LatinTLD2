import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins1: ['"Poppins-1"'],
      poppins1i: ['"Poppins-1i"'],
      poppins2: ['"Poppins-2"'],
      poppins2i: ['"Poppins-2i"'],
      poppins3: ['"Poppins-3"'],
      poppins3i: ['"Poppins-3i"'],
      poppins4: ['"Poppins-4"'],
      poppins4i: ['"Poppins-4i"'],
      poppins5: ['"Poppins-5"'],
      poppins5i: ['"Poppins-5i"'],
      poppins6: ['"Poppins-6"'],
      poppins6i: ['"Poppins-6i"'],
      poppins7: ['"Poppins-7"'],
      poppins7i: ['"Poppins-7i"'],
      poppins8: ['"Poppins-8"'],
      poppins8i: ['"Poppins-8i"'],
      poppins9: ['"Poppins-9"'],
      poppins9i: ['"Poppins-9i"'],
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
        blue:{
          background: '#222831',
        },
        yellow: '#e7ebb0',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
