module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/index' },
  }),
  devIndicators: {
    autoPrerender: false,
  },
};
