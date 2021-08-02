// next.config.js
module.exports = {
  poweredByHeader: false,
  target: 'serverless',
  webpack5: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      type: 'asset/inline',
    });
    return config;
  },
};
