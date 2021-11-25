const path = require('path')
module.exports = { // css 配置
  publicPath: './',
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
  },
  devServer: {
    hot: true, // 热加载
    port: 8090, // 端口
    open: true, // 自动打开浏览器
  }
}
