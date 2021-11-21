const path = require('path')
module.exports = { // css 配置
  css: {
    loaderOptions: {
      less: {
        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/variable.less")]
    }
  }
}
