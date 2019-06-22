const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
// 进行webpack编译--执行编译器，进行打包一次代码,
// 在node中直接使用webpack
const complier = webpack(config);

const app = express();
// 只要打包的文件内容发生变化，就会重新打包，通过编译器；将打包的文件放在跟webpack.config.js配置的一致
app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}));

app.listen(3000, () => {
  console.log('server is run')
})
