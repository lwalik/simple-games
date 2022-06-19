const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        testowy: '#d10000',
        // In case of custom components, that will keep the palette 100% consistent with Material
        // TODO: Dark theme is missing - add together with Material dark palette
        primary: {
          // Material Indigo
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
          a100: '#ffe57f',
          a200: '#ffd740',
          a400: '#ffc400',
          a700: '#ffab00',
        },
        accent: {
          // Material Amber
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
          a100: '#ffe57f',
          a200: '#ffd740',
          a400: '#ffc400',
          a700: '#ffab00',
        },
        warn: {
          // Material Red
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
          a100: '#ff8a80',
          a200: '#ff5252',
          a400: '#ff1744',
          a700: '#d50000',
        },
        white: '#fff',
        black: '#000',
      },
    },
  },
  plugins: [],
};
