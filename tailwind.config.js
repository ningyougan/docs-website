/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindMdBase from '@geoffcodesthings/tailwind-md-base';
export default {
  // purge: ['./src/components/Content.vue'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      markdownBase: {
        img: {
          maxWidth: '20%',
          borderWidth: defaultTheme.borderWidth.default,
        },
      },
    },
  },
  plugins: [tailwindMdBase()],
};
