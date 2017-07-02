//引用文件模块，必须使用相对路径 ./ ../ ，可以不增加后缀名，会自动帮你添加 .js .json .node 报错

//同步还是异步 怎么区分的？ 有回调函数的是异步的,require是同步方法
//let calc = require('./calc');
//console.log(calc);
//通过require拿到的并不是另一个文件的exports对象，而是另一个文件的module.exports对象

// module.exports  exports  {}

//1.可以给exports增加属性 他会导致module.exports的变化
//2.直接更改module.exports的指向
//错误：直接更改exports 不会导致module.exports的变化

//写一个求和函数，在另一个文件中使用，分别使用两种方式实现

/*
(function () {
   module.exports = exports = {}
   this = module.exports;
   exports.obj = 1;
   module.exports = {obj:1}

   return module.exports
})()*/
