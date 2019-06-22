// 引入node核心模块path
const path = require('path')
// 将我们写的html文件，进行打包；
const HtmlWebpakcPlugin = require('html-webpack-plugin')
// 清除上次打包生成的js文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const fs = require('fs')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')


const makePlugins = (configs) => {
    const plugins = [new CleanWebpackPlugin()]
    const files = fs.readdirSync(path.resolve(__dirname, './dll'))
    Object.keys(configs.entry).forEach(item => [
        plugins.push(new HtmlWebpakcPlugin({
            template: './src/index.html',
            filename: `${item}.html`,
            chunks: ['runtime', 'vendors', item]
        }))
    ]);

    files.forEach(file => {
        if(/.*\.dll.js/.test(file)) {
            plugins.push(
              new AddAssetHtmlWebpackPlugin({
                  filepath: path.resolve(__dirname, '../dll', file)
              }))
        }
        if(/.*\.manifest.json/.test(file)) {
            new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, '../dll', file)
            })
        }
    })
    return plugins;
}




// const plugins = [
//     new CleanWebpackPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpakcPlugin({
//         template: './src/index.html',
//         filename: 'index.html',
//         chunks: ['runtime', 'vendors', 'main']
//     }),
//     new HtmlWebpakcPlugin({
//         template: './src/index.html',
//         filename: 'list.html',
//         chunks: ['runtime', 'vendors', 'list']
//     })
// ]


const configs =  {
    // 配置打包模式
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    // 入口文件
    entry: {
        main: './src/index.js',
        list: './src/list.js'
    },
    devServer: {
      // 服务器启动的根路径
      contentBase: './dist',
      open: true,
      proxy: {
        '/api': 'http://localhost:3000'
      },
      hot: true,
      hotOnly: true
    },
    stats: { children: false },
    module: {
        rules: [{ 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
            // options: {
            // //   presets: [["@babel/preset-env",{
            // //     targets: {
            // //       chrome: "67",
            // //     },
            // //     useBuiltIns: 'usage'
            // //   }]]
            // "plugins": [["@babel/plugin-transform-runtime",{
            //     "corejs": 2,
            //     "helpers": true,
            //     "regenerator": true,
            //     "useESModules": false
            //   }]]
            // } 
        },
            {
            test: /\.(png|jpe?g|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    limit: 204800
                }
            }
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }, {
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
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
            }
        }]
    },
    // plugins: [
    //     // new CleanWebpackPlugin(),
    //     // new webpack.HotModuleReplacementPlugin(),
    //     // new HtmlWebpakcPlugin({
    //     //     template: './src/index.html'
    //     // }),
    //     // new AddAssetHtmlWebpackPlugin({
    //     //     filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
    //     // }),
    //     // new webpack.DllReferencePlugin({
    //     //     manifest: path.resolve(__dirname, '../dll/vendors.manifest.js')
    //     // })
    // ],
    optimization: {
      usedExports: true
    },
    // 打包出的文件配置
    output: {
        // 文件引入的cnd地址
        // publicPath: 'http://cdn.com.cn',
        // publicPath: './',
        // // 文件名
        // filename: '[name].js',
        //  打包后的文件放在哪个文件夹，是一个绝对路径 
        //  __dirname就是webpack.config.js所在的当前目录的路径,当前模块的目录名,改成bundle就是说，打包后的文件放在dist文件夹中
        path: path.resolve(__dirname, 'dist')
    }
}
module.exports = configs
configs.plugins = makePlugins(configs)