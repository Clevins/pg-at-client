module.exports = {
  serverRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL, // Pass through env variables
  },
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    // eslint-disable-next-line no-param-reassign
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // delay before rebuilding
    };
    return config;
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  future: {
    webpack5: false,
  },
  jsconfigPaths: true,
  target: 'server',
};
