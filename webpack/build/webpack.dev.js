
const webpack = require('webpack');
// const merge = require('webpack-merge')
// const commonConfig = require('./webpack.common.js')
const devConfig = {
    // 配置打包模式
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      // 服务器启动的根路径
      contentBase: './dist',
      open: true,
      // historyApiFallback: true,
      historyApiFallback: {
        rewrites: [
          { 
            from: '/item.html',
            to: '/list.html'
          }
        ]
      },
      proxy: {
        '/react/api': {
          target: 'https://www.dell-lee.com',
          secure: false,
          changeOrigin: true,
          overlay: true,
          bypass: function(req, res, proxyOptions) {
            if (req.headers.accept.indexOf('html') !== -1) {
              console.log('Skipping proxy for browser request.');
              return '/index.html';
            }
          },
          pathRewrite: {
            'header.json': 'demo.json'
          }
        },
      },
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2
                }
              },
              'sass-loader',
              'postcss-loader'
          ]
      }, {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader',
              'postcss-loader'
          ]
      },
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
    ],
    // output: {
    //   filename: '[name].js',
    //   chunkFilename: '[name].js'
    // }
}
// module.exports = merge(commonConfig, devConfig)

module.exports = devConfig;