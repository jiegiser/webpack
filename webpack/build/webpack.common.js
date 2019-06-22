// 引入node核心模块path
const path = require('path')
// 将我们写的html文件，进行打包；
const HtmlWebpakcPlugin = require('html-webpack-plugin')
// 清除上次打包生成的js文件
const CleanWebpackPlugin = require('clean-webpack-plugin')

//重新配置环境变量
/**************** */

const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')

/*************** */
// const webpack = require('webpack')
// module.exports = {
const commonConfig = {
    // 入口文件
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{ 
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
            {
              loader: "babel-loader",
            },
            // {
            //   loader: "imports-loader?this=>window"
            // }
          ]
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
        },  {
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        },{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
            }
        }]
    },
    // 添加插件清空打包路径以及根据模板进行打包html文件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpakcPlugin({
          template: './src/index.html'
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     _join: ['lodash', 'join']
        // })  
    ],
    //去除控制台提示性能的问题
    performance: false,
    // 修改配置，进行代码分割进行打包，以及去除打包成功之后添加的vendors~前缀
    optimization: {
      runtimeChunk: {
          name: 'runtime'
      },
      usedExports: true,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendors'
          },
        }
      }
    },
  //   optimization: {
  //     splitChunks: {
  //       chunks: 'async',//代码分割只对异步加载的代码生效,如果想对同步、异步都进行分割设置为all
  //       minSize: 30000,//设置模块大小大于30kb才会进行代码分割
  //       maxSize: 0,//设置打包输出文件的最大体积，如果需要打包的模块超过这个大小，他会进行分割成多个文件进行打包输出
  //       minChunks: 1,//当一个模块被用了至少多少次的时候，才进行分割。
  //       maxAsyncRequests: 5,//同时加载的模块数。如果页面引用的模块超过五个，不会对超过的模块进行代码分割
  //       maxInitialRequests: 3,//入口文件进行加载引入的模块最多数，这个设置为3，就是如果入口文件引入模块超过三个，超过的就不会进行代码分割
  //       automaticNameDelimiter: '~',//打包输出文件的连接符，例如vendors~main.js；vendors是组名，后面就是连接符；vendors~main.js意思是vendors组的入口文件是main.js
  //       name: true,//
  //       cacheGroups: {
  //           // 如果引入的包是node_modules里面的内容，会进入到这里的配置
  //         vendors: {
  //           test: /[\\/]node_modules[\\/]/,//检测引入的第三方库是不是node_modules里面的内容
  //           priority: -10,
  //           filename: 'vendors.js' //如果是node_modules里面的内容，会打包到这个文件里面
  //         },
  //         // 如果引入的包不是node_modules里面的内容，会进入到这里的配置
  //         default: {
  //           minChunks: 2,
  //           priority: -20,
  //           reuseExistingChunk: true,
  //           filename: 'common.js'
  //         }
  //       }
  //     }
  //  },
    // 打包出的文件配置/*这里的配置会跟打包HTML的插件冲突 */
    output: {
        // 文件引入的cnd地址
        // publicPath: 'http://cdn.com.cn',
        // publicPath: './',
        // // 文件名
        // filename: '[name].js',
        //  打包后的文件放在哪个文件夹，是一个绝对路径 
        //  __dirname就是webpack.config.js所在的当前目录的路径,当前模块的目录名,改成bundle就是说，打包后的文件放在dist文件夹中
        // 非入口文件打包输出走下面的配置项
        // chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, '../dist')
    }
}

module.exports = (env) => {
    if (env && env.production) {
        return merge (commonConfig, prodConfig)
    } else {
        return merge (commonConfig, devConfig)
    }
}