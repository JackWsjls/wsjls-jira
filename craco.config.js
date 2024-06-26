const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0, 82, 204)", // #1DA57A
              "@font-size-base": "16px", // 主字号
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      // other stuff with webpackConfig
      return {
        ...webpackConfig,
        ignoreWarnings: [/Failed to parse source map/],
      };
    },
  },
};
