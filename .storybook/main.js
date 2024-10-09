module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  }, '@storybook/addon-webpack5-compiler-swc', '@chromatic-com/storybook'],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    // type-check stories during Storybook build
    check: true,

    reactDocgen: 'react-docgen-typescript'
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {}
};
