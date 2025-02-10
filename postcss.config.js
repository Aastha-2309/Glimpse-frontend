import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule.default; // ✅ Fix: Call .default

export default {
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
