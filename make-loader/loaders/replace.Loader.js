

const loaderUtils = require('loader-utils')

//这里不能使用箭头函数，是因为在该函数中，要使用this的指向，webpack在调用loader的时候会进行this指向的变更。如果在定义的时候绑定this，会出现问题
module.exports = function(source) {
    //source就是我们调用loader传进来的源码。
    // console.log(source)
    //接收传进来的参数
    // console.log(this.query);

    // const options = loaderUtils.getOptions(this)
    // console.log(options.name)
    // return source.replace('jie', this.query.name);
    // const result = source.replace('jie', this.query.name);
    // 第一个参数为错误信息，第二个参数为要返回的内容，第三个参数为sourceMap，第四个参数为返回的其他信息
    // this.callback(null, result, source, meta)

    // const callback = this.async();
    // setTimeout(() => {
    //     const result = source.replace('jie', this.query.name);
    //     // return source.replace('jie', this.query.name);
    //     callback(null, result)
    // }, 1000);



    // this.callback(null, result)

    const options = loaderUtils.getOptions(this)
    return source.replace('hello', options.name)
}



// this.callback(
//     err: Error | null,
//     content: string | Buffer,
//     sourceMap?: SourceMap,
//     meta?: any
//   );