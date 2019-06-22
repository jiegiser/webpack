// nodeJS中的模块，用于获取文件信息
const fs = require('fs');

// 引入babel/parser用来分析我们的源代码
const parser = require('@babel/parser');

// 引入babel/traverse来帮助我们分析抽象语法树中 type = 'ImportDeclaration' 的节点,default是我们使用export default导出的内容
const traverse =  require('@babel/traverse').default; 

// 引入nodeJS的核心模块 path
const path = require('path');

// 引入babel/core来准换我们的代码
const babel = require('@babel/core');

//filename为要分析的入口文件
const moduleAnalyser = (filename) => {
    // 读取文件中的内容，第一个参数为文件地址，第二个参数为文件编码方式
    const content = fs.readFileSync(filename, 'utf-8')
    const ast = parser.parse(content, {
        // 如果要对于es6语法的代码进行分析，需要传入一个sourceType选项，sourceType: 'module'
        sourceType: 'module'
    });
    // 存放依赖的文件- 相对路径与绝对路径
    const dependencies = {}

    // 第一个参数为抽象语法树类型的参数，第二个参数为需要查找的内容,
    // 这里我们查找ImportDeclaration节点的内容，只要包含他，就会走这个函数，
    traverse(ast, {
        // 获取到该节点的node节点
        ImportDeclaration({ node }) {
            // 获取到filename的路径 也就是主入口文件的路径 ./src
            const dirname = path.dirname(filename);
            // 将相对路径转换为绝对路径 ./src/message.js
            const newFile = './'+ path.join(dirname, node.source.value).replace('\\', '/');
            // 存储相对路径与绝对路径
            dependencies[node.source.value] = newFile;
            // dependencies.push(newFile);
        }
    });
    // 借助babel的transformFromAst方法将抽象语法树转换为可以运行的代码。
    // 第一个参数是一个抽象语法树，第二个参数是sourceCode，第三个参数是一些转换的Options
    // 这里解析后的code 就是可以在浏览器运行的代码
    const { code } = babel.transformFromAst(ast, null, {
        // 插件的集合-将es6语法转换为es5
        presets: ["@babel/preset-env"]
    });
    return {
        filename,
        dependencies,
        code
    }
}
// 依赖图谱，存储所有模块的依赖信息,entry是入口文件，我们要分析整个项目所有的文件；
const makeDependenciesGraph = (entry) => {
    const entryModule = moduleAnalyser(entry);
    // 利用队列的方法，循环递归获取模块中的依赖文件进行分析
    const graphArry = [entryModule];
    for(let i = 0; i < graphArry.length; i++) {
        const item = graphArry[i];
        const { dependencies } = item;
        if (dependencies) {
            // for in 循环对象
            for(let j in dependencies) {
                graphArry.push(
                    moduleAnalyser(dependencies[j])
                );
            }
        }
    }
    // 将数组进行转换为对象
    const graph = {};
    graphArry.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    return graph;
}

const generateCode = (entry) => {
    //const graph = makeDependenciesGraph(entry);
    const graph = JSON.stringify(makeDependenciesGraph(entry));
    // 这里使用闭包的形式，是为了防止执我们的代码污染到全局。
    return `
      (function(graph){
          //构造require以及exports函数
          function require(module) {
              function localRequire(relativePath) {
                  return require(graph[module].dependencies[relativePath])
              }
              var exports = {};
              (function(require, exports, code){
                //执行代码  
                eval(code)
              })(localRequire, exports, graph[module].code)
              return exports;
          };
          require('${entry}')
      })(${graph});
    `;
}
const code = generateCode('./src/index.js');
console.log(code)
