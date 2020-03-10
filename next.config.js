module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blogs/1': { page: '/blogs/[id]' },
      '/blogs/2': { page: '/blogs/[id]' }
    };
  }
};
