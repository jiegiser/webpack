

const loaderUtils = require('loader-utils')

module.exports = function(source) {

    console.log(source)


    const options = loaderUtils.getOptions(this)
    console.log(options.name)

    const callback = this.async();
    setTimeout(() => {
        const result = source.replace('jie', this.query.name);
        // return source.replace('jie', this.query.name);
        callback(null, result)
    }, 1000);
}