
const webpack = require('webpack')
module.exports = {
    devtool: 'source-map',
    entry: './init.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\/js/,
            use: [
                {
                    loader: 'babel-loader',
                    options: { presets: ['es2015']}
                }
            ]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
    ]
}