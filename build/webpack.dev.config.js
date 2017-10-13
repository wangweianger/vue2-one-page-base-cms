//开发环境
var webpack = require('webpack')
var config = require('./webpack.base.config')
// dev配置
config.devServer= {
    hot: true,
    inline: true,
    proxy: {
      "http://127.0.0.1:5000/": {
          target: 'http://test.oms.morning-star.cn/',
          secure: false
      },
      "http://127.0.0.1:4000/": {
          target: 'http://test.venus.morning-star.cn/',
          secure: false
      }
    }
}
config.devtool = '#source-map'
module.exports = config