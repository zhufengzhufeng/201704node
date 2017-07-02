let read = (cb) =>{
    setTimeout(()=>{
         let str = '我很帅';
         cb(str);
    },2000)
};
//获取到 我很帅
read(function (data) {
    console.log(data);
});
//要解决异步问题 就是回调函数，将后续的逻辑当做参数传递给这个函数
//异步永远在同步之后执行，如果同步代码执行不能完成，异步永远不会触发
//非阻塞（厨师）是异步的前置条件

//单线程 多线程 -> node是基于js的
//java 多线程 同步
//node 单线程 异步  js中的多线程h5
//如果想开多线程 ，要开子进程

//多线程（感觉像同一时间干很多事情，快速的切换上下文） 单线程


//箭头函数
/*function a(b,c) {
    return b+c;
}*/
//1.箭头函数不需要function声明
//2.如果箭头后面是一个{} 需要写return
//3.this指向 箭头函数中没有this指向所以this指向上一级，从而解决了this问题
//let a = (b,c) => b+c;
//1.高阶函数
/*function a(b) {
    return function (d) {
        return b+d;
    }
}*/
/*let a = b =>{
    return d =>{
        return b+d;
    }
}*/
/*
let a = b => d => b+d;
console.log(a(1)(2));
//可以通过箭头函数 解决this指向问题，或者用bind解决this指向问题
let obj = {
    a:function () {
        setTimeout(()=> {
            console.log(this);
        });
    }
};
obj.a.call(1);*/
