const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
    // 使用我们的loader
    module: {
        rules: [{
            test: /\.js/,
            use: [
            //     {
            //     loader: path.resolve(__dirname, './loaders/replace.Loader.js'),
            //     options: {
            //         name: 'giser'
            //     }
            // }, {
            //     loader: path.resolve(__dirname, './loaders/replaceLoaderAsync.js'),
            //     options: {
            //         name: 'giser'
            //     }
            // }
                {
                loader: 'replace.Loader',
                options: {
                    name: 'giser'
                }
            }, {
                loader: 'replaceLoaderAsync',
                options: {
                    name: 'giser'
                }
            }
        ]
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' 
    }
}