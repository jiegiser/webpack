// 1. 面向过程
// var dom = document.getElementById('root');
// var header = document.createElement('div');
// header.innerHTML = 'header';
// dom.append(header);

// var siderbar = document.createElement('div');
// siderbar.innerHTML = 'siderbar';
// dom.append(siderbar);

// var content = document.createElement('div');
// content.innerHTML = 'content';
// dom.append(content);

// 2. 面向对象
// new Header();
// new SiderBar();
// new Content();


// 3. webpack 模块打包工具 ES Moudule 模块引入方式 import
// import Header from './header.js';
// import SiderBar from './siderbar.js'
// import Content from './content.js'
// new Header();
// new SiderBar();
// new Content();
// 4. CommonJS引入模块
// var Header = require('./header.js')
// var SiderBar = require('./siderbar.js')
// var Content = require('./content.js')
// 打包图片文件--avater为打包后的文件名
// var avater = require('./avater.png')

// new Header();
// new SiderBar();
// new Content();

// import style from './index.scss';
// import avater from './avater.png';

// import createAvatar from './createAvatar'

// createAvatar();
// // 打包图片文件--avater为打包后的文件名
// var img = new Image();
// img.src = avater;
// img.classList.add(style.avater)
// var dom = document.getElementById('root');
// dom.append(img);
// import './index.scss'
// var root = document.getElementById('root');

// root.innerHTML = `<div class="iconfont iconbangzhuzhichi_meitichuli"></div>`;



// console.log('hello world !##')
// import './style.css'
// var btn = document.createElement('button');
// btn.innerHTML = '新增'
// document.body.appendChild(btn);
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div);
// }

// import counter from './counter';
// import number from './number';
// counter();
// number();
// // 如果支持热模块加载
// if(module.hot) {
//     // 监控number文件，如果发生改变，就会执行里面的代码。
//     // 第一个参数为依赖的文件的名字，
//   module.hot.accept('./number', ()=> {
//     document.body.removeChild(document.getElementById('number'))
//     number();
//   })
// }

// import "@babel/polyfill";
// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {})
// ];

// arr.map(item => {
//   console.log(item)
// })

// import "@babel/polyfill";

// import React, { Component } from 'react'

// import ReactDom from 'react-dom'

// class App extends Component {
//   return () {
//     return <div>Hello World</div>
//   }
// }
// ReactDom.render(<h1>Hello, world!</h1>, document.getElementById('root'))


// import "@babel/polyfill";

// import { add } from './math.js';

// add(1, 5);

// add(2,4)

// add(1,89)
// add(0,89)

// import _ from 'lodash';
// // ...业务逻辑
// // console.log(_.join(['a','b','c'],'***'))

// var element = document.createElement('div');
// element.innerHTML = _.join(['a','b','c'],'***');
// document.body.appendChild(element);

//  function getComponent () {
//   return import(/* webpackChunkName:"lodash"*/'lodash').then(({default: _}) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['a','b','c'],'***')
//     return element
//   })
// }
// // 点击页面才会执行
// document.addEventListener('click', () => {
//   getComponent ().then((element) => {
//     document.body.appendChild(element)
//   })
// })


// async function getComponent () {
//   const {default: _} = await import(/* webpackChunkName:"lodash"*/'lodash');
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['a','b','c'],'***')
//   return element
// }
// // 点击页面才会执行
// document.addEventListener('click', () => {
//   getComponent ().then((element) => {
//     document.body.appendChild(element)
//   })
// })


// document.addEventListener('click', () => {
//   const element = document.createElement('div')
//   element.innerHTML = 'jiegiser'
//   document.body.appendChild(element)
// })

// document.addEventListener('click', () => {
//   // func就是我们导出的handleclick方法
//   import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
//     func();
//   })
// })

// import './index.css'
// import './style1.css'
// console.log('jie')

// import _ from 'lodash'

// import $ from 'jquery'

// import { ui } from './jquery.ui.js'

// ui();
// const dom = $('<div>')

// dom.html(_.join(['dell', 'lee'], '---'))

// $('body').append(dom)

// console.log('thissdds');
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }


// import axios from 'axios'
// axios.get('/react/api/header.json')
// .then((res) => {
//   console.log(res)
// })


import React, { Component } from 'react'
import {BrowserRouter, Router} from 'react-router-dom';
import ReactDom from 'react-dom'
import Home from './home.js';
import List from './list.js'


class App extends Component {
  return () {
    return (
      <BrowserRouter>
        <div>
         <Router path='/' exact component={Home} />
         <Router path='/list' component={List}/>
         </div>
      </BrowserRouter>
    )
  }
}
ReactDom.render(<h1>Hello, world!</h1>, document.getElementById('root'))