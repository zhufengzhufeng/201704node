let fn = (a,b) =>{
    return a+b;
};
let obj = {name:1};
let obj2 = {age:2};
let obj3 = {...obj,...obj2};
console.log(obj3);
//在前端代码里 尽量使用es6,不要混着来
//let str = require('./a.js');
import a from './a.js';
document.write(a);
import'./index.css';
import './style.less';

//js动态添加路径 webpack不会自动打包，图片会被忽略
//需要引入图片

//import logo from './logo.jpg';
let oImg = document.createElement('img');
oImg.src = 'http://img5.imgtn.bdimg.com/it/u=1511928397,1744182508&fm=28&gp=0.jpg';
document.body.appendChild(oImg);
