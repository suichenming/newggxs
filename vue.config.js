var webpack = require('webpack');
module.exports = {
  // 基本路径
  publicPath: '/cgpt',
  // 输出文件目录
  outputDir: 'cgpt',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8888,
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        Popper: ['popper.js', 'default']
      })

    ]
  },
  // configureWebpack: {
  //   performance: {
  //     hints: 'warning',
  //     //入口起点的最大体积
  //     maxEntrypointSize: 50000000,
  //     //生成文件的最大体积
  //     maxAssetSize: 30000000,
  //     //只给出 js 文件的性能提示
  //     assetFilter: function (assetFilename) {
  //       return assetFilename.endsWith('.js');
  //     }
  //   }
  // },

}