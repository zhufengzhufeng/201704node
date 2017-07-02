//只要在文件中，可以不用声明直接使用的 都叫全局对象
//服务端没有widow 点击事件 没有那些ajax

//服务端有global global上的对象都可以直接访问 ->全局对象
//console.log(global);
//process 进程
//Buffer 缓存区  （表示内存）
//clearImmediate  setImmediate
//clearInterval setInterval
//clearTimeout setTimeout
//console -> log dir info error warn time/timeEnd（不常用）
//1)console
console.time('a');
setTimeout(function () {
    console.timeEnd('a');
},2000);
//因为配置过node 可以右键run ，可以在命令行下执行某个文件
//在命令行下 可以通过 node + 文件名执行

//2)setTimeout callback 异步 （事件环，node程序是事件环）
setTimeout( (data,a) => {
    //console.log(this);
},0,'你好','不好');//你好,setTimeout可以传递参数，这里的this默认指向setTimeout自己,文件中直接打印this 是空对象

//3)setImmediate 立即 异步的 第二个小本上的
setImmediate(function () {
    //console.log('立即');
});//一般情况和不写时间的setTimeout是一样的

//4)process进程 设置环境变量， 生成环境  开发环境
//在开发的时候输出 我很帅 ， 上线的时候输出 我非常帅
//console.log(process.env.NODE_ENV); //environment ,两个系统 mac   windows
//设置环境变量 通过 set a=b 设置 可以通过process.env取出来（只在命令行下使用），可以区分开发环境
/*
if(process.env.NODE_ENV==='dev'){
    console.log('我很帅');
}else{
    console.log('我非常帅');
}
*/


// 服务端 全局变量global 挂载在global上的属性 可以直接获取,var声明的不会挂载在global上,为了解决模块化的问题
global.a = 1;
console.log(a);