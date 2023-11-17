// postcss.config.js
const postcssJitProps = require('postcss-jit-props');
const path = require('path');
const globalCss =path.resolve(__dirname, 'src/styles/global.css')
console.log('####', process.env.NODE_ENV);
const isProd =  process.env?.NODE_ENV === 'production';
module.exports = {
  plugins: [
  
    // has to come before preset-env so tailwind does not complain
    require('tailwindcss/nesting')({}),
    /**
     * 
     * remove autoprefixer if you had it here, it's part of postcss-preset-env
     * uses defaults browser list from package.json -->  defaults query which is a shortcut for > 0.5%, last 2 versions, Firefox ESR, not dead
     */
    require('postcss-preset-env')({
        stage: 0,
        features: {
          'nesting-rules': true
        }
    }),

    // postcssJitProps(require('tailwindcss')),
    // postcssJitProps({
    //     files: [
    //         globalCss
    //         // path.resolve(__dirname, 'src/styles/global.css') 
    //     ]
    // }),
    // require('autoprefixer'),
    // require('postcss-csso'),
    //   pfm({
    //      variants: {
    //          'Roboto Condensed': {
    //              '300': [],
    //              '400': [],
    //              '700': []
    //          }
    //      },
    //      foundries: ['google']
    // }),
     isProd && require('cssnano'),
    //  purgecss({
    //   content: [ process.cwd() +'/src/**/*.astro'],
    //   css: ['src/styles/global.css']
    // })
  ],
};