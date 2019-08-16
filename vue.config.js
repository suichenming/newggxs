var webpack = require('webpack');
module.exports = {
    // 基本路径
    publicPath: '/dist',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
      port: 8888,
    },
    configureWebpack: {
         plugins: [
            new webpack.ProvidePlugin({
              $:"jquery",
              jQuery:"jquery",
              "windows.jQuery":"jquery",
              Popper: ['popper.js', 'default']
            })
      
          ]
      }
  }