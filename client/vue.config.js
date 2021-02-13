// const path = require('path');
module.exports = {
  devServer: {
    proxy: {
      '/shox-api': {
        target: 'http://localhost:7777',
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
