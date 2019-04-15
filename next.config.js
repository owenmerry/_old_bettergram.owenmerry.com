module.exports = {
    target: 'serverless',
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/profile': { page: '/profile' },
        '/folder': { page: '/folder' },
        '/admin': { page: '/admin' },
      }
    }
  }