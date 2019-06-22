// import { get } from "http";

// import lodash from 'lodash'
// var sdsd ='sdd';
// function sd() {
//     console.log('dddd');
// }
// var sdddd="ss"

// import api from './config.js'
// console.log(api)


// import { sum } from 'npm:lodash';


// import { apikey } from './config'

// System.config({transpiler: 'babel'})

// System.import('./main.js')

// let methodName = 'info';
// class User {
//     constructor (name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     [methodName] () {
//         console.log(`I'm ${this.name}`);
//     }
//     //静态方法--不能实例化调用，只能在原型对象调用，一般将原型对象里面的方法定义为静态方法
//     static descript () {
//         console.log(`hi jj`);
//     }

//     set github (value) {
//         this.githubName = value;
//     }
//     get github () {
//         return `http://github.com/${this.githubName}`;
//     }
// }

// const jiegiser = new User('jiegiser', 'jiegiser@163.com')

// console.log(jiegiser)
// const User = class {

// }

// class Animal {
//     constructor (name) {
//         this.name  = name;
//         this.belly = [];
//     }
//     eat (food) {
//         this.belly.push(food)
//     } 
// }
// class Dog extends Animal {
//     constructor (name, age) {
//         //在子类中调用父类构造函数
//         super(name);
//         this.name = name;
//         this.age = age;
//     }
//     bark () {
//         console.log(`Barl bark!`);
        
//     }
// }
// const lucky = new Dog('lucky', 2);


// class MyArray extends Array {
//     constructor () {
//         super();
//     }
// }

// const colors = new MyArray();
// colors[0] = 'red';
// console.log(colors.length);
// colors.length = 0;
// console.log(colors[0])

// class movieCollaction {
//     constructor (name, ...items) {
//         super(...items)
//         this.name = name;
//     }
//     add (item) {
//         this.push(item)
//     }
//     toRated (limit = 10) {
//         return this.sort((a, b) => (a.scores > b.scores) ? -1 : 1).slice(0, limit);
//     }
// }
// const movies = new movieCollaction('favorite movies',
//   { name: 'the croods', scored: 8.7},
//   { name: 'the days', scored: 9.6},
//   { name: 'the shawshank', scored: 9.4},
//   { name: 'the summer', scored: 8.0},
// );

// const personn = { name: 'jiegiser', age: 200};
// // 第一个参数为要代理的对象，第二个参数就是一个对象，包含重写的方法。也就类似vue计算属性
// const personProxy = new Proxy(personn, {
//     get(target, key) {
//         return target[key].toUpperCase();
//     },
//     set (target, key, value) {
//         if(typeof value === 'string'){
//             target[key] = value.trim();
//         }
//     }
// })
// personProxy.name = 'jie';


// const phonerHandle = {
//     set(target, key, value) {
//         target[key] = value.match(/[0-9]/g).join('');
//     }
//     get(target, key) {
//         return target[key].replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
//     }
// }
// const pgoneNumber = new Proxy({}, phonerHandle)

// const colors = new Set();
// colors.add('red')
// colors.add('green')
// colors.add('blue')
// const iterator = colors.values();
// iterator.next();

// for (let color of colors) {
//     console.log(color)
// }

// colors.forEach((item, key, ownSet) => {
//     console.log(item,key,ownSet)
// })


// const fruits = new Set(['apple', 'banana', 'mongo'])

// const people = new Map();
// people.set('jelly', 23);
// people.set('{}',3)


// =================================1.   ==============
// let url = 'http://www.domain.com/?user=anonymous&user=anonymouss&id=123&id=456&id=457&city=%E5%8C%97%E4%BA%AC&enabled';
// // console.log(parseParam(url));

// parseParam(url)

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

// function parseParam (url) {
//     let parseParmeObj = {};
//     let tempValue = '';
//     url.split('?')[1].split('&').forEach((item) => {
//         for(let index in item.split('=')){
//             if(item.split('=')[1] == undefined){
//                 parseParmeObj[item.split('=')[0]] = true;         
//             } else {        
//                 if (tempValue ==item.split('=')[0]) {
//                     if(typeof parseParmeObj[item.split('=')[0]] =='string') {
//                         let ids = parseParmeObj[item.split('=')[0]];
//                         parseParmeObj[item.split('=')[0]] = []
//                         parseParmeObj[item.split('=')[0]].push(ids)
//                         parseParmeObj[item.split('=')[0]].push(item.split('=')[1])
//                     } else {
//                         if(!parseParmeObj[item.split('=')[0]].includes(item.split('=')[1])) {
//                             parseParmeObj[item.split('=')[0]].push(item.split('=')[1])
//                         }
//                     }
//                 } else {
//                     parseParmeObj[item.split('=')[0]] = decodeURIComponent(item.split('=')[1]);
//                 }  
//             }
//             if(index == 1) {
//                 tempValue = item.split('=')[0];
//             }
//         }   
//     })
//     console.log(parseParmeObj)
// }



// function parseParam(url) {
//     const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
//     const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
//     let paramsObj = {};
//     // 将 params 存到对象中
//     paramsArr.forEach(param => {
//       if (/=/.test(param)) { // 处理有 value 的参数
//         let [key, val] = param.split('='); // 分割 key 和 value
//         val = decodeURIComponent(val); // 解码
//         val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
  
//         if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
//           paramsObj[key] = [].concat(paramsObj[key], val);
//         } else { // 如果对象没有这个 key，创建 key 并设置值
//           paramsObj[key] = val;
//         }
//       } else { // 处理没有 value 的参数
//         paramsObj[param] = true;
//       }
//     })
  
//     return paramsObj;
//   }
  
// =================================2.   ==============
// let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
// let data = {
//   name: '姓名',
//   age: 18
// }
// console.log(render(template, data)); // 我是姓名，年龄18，性别undefined

// function render (template, data) {
//     let { name, age, sex } = data;
//     template = template.replace(/{{name}}/ig, name);
//     template = template.replace(/{{age}}/ig, age);
//     template = template.replace(/{{sex}}/ig, sex);
//     return template
// }

// function render(template, data) {
//     return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key) => data[key.trim()]);
//   }


// =================================3.   ==============

// let domNode = {
//     tagName: 'ul',
//     props: { class: 'list' },
//     children: [{
//       tagName: 'li',
//       children: ['item1']
//     }, {
//       tagName: 'li',
//       children: ['item1']
//     }]
//   };
// console.log(render(domNode));
  // 构建一个 render 函数，将 domNode 对象渲染为 以下 dom
//   <ul class="list">
//       <li>item1</li>
//       <li>item2</li>
//   </ul>


// function render(domNode) {
//     if(!domNode) return document.createDocumentFragment();
//     let $el;
//     if(typeof domNode === 'object') {
//         $el = document.createElement(domNode.tagName);
//         if (domNode.hasOwnProperty('props')) {
//             Object.keys(domNode.props).forEach(item => {
//                 $el.setAttribute(item, domNode.props[item])
//             })
//         }
//         if (domNode.hasOwnProperty('children')) {
//             domNode.children.forEach(item => {
//                 const $childEl = render(item);
//                 $el.appendChild($childEl)
//             });
//         }
//     } else {
//         $el = document.createTextNode(domNode);
//     }
//     return $el;
// }
  
   

// 保留三位小数
// console.log(parseToMoney(1234.56)); // return '1,234.56'
// console.log(parseToMoney(123456789)); // return '123,456,789'
// console.log(parseToMoney(1087654.321)); // return '1,087,654.321'

// function parseToMoney(num) {
//     num = parseFloat(num.toFixed(3));
//     let [integer, decimal] = String.prototype.split.call(num, '.');
//     integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
//     return integer + '.' + (decimal ? decimal : '');
// }
// function parseToMoney(num) {
//     num = parseFloat(num.toFixed(3));
//     let [integer, decimal] = String.prototype.split.call(num, '.');
//     integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
//     return integer + '.' + (decimal ? decimal : '');
//   }
// const data = {};
// const input = document.getElementById('input');
// Object.defineProperty(data, 'text', {
//   set(value) {
//     input.value = value;
//     this.value = value;
//   }
// });
// input.onchange = function(e) {
//   data.text = e.target.value;
// }
// document.write(data)

  
