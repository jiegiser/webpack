const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const merge = require('webpack-merge')
// const commonConfig = require('./webpack.common.js')

const WorkboxPlugin = require('workbox-webpack-plugin')
const prodConfig = {
    // 配置打包模式
    mode: 'production',
    // 暂时先屏蔽输出source文件
    // devtool: 'cheap-module-source-map',
    module: {
      rules: [
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
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
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
            ]
        },
      ]
    },
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin({})]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].chunk.css',
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ],
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js'
    }
}
// 模块导出的是两个文件的合并
// module.exports = merge(commonConfig, prodConfig)
module.exports = prodConfig;