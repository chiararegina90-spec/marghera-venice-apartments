import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#09283f',
        gold: '#c79f55',
        cream: '#f8f4ec',
        aqua: '#7fb6ba'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 22px 65px rgba(9, 40, 63, 0.14)'
      }
    }
  },
  plugins: []
};

export default config;
