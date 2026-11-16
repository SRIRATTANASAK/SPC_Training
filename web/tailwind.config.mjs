/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          navy: '#0F172A',
          blue: '#1E40AF',
          sky: '#0284C7',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
