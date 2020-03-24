module.exports = {
    "devServer": {
      "clientLogLevel": 'info',
      "proxy": 'http://api.tarabees.com/',
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/production-sub-path/'
      : '/',
      // options...
        
  }