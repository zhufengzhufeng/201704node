//创建http服务 ip地址 port端口号
//node提供自带的模块 http
let http = require('http');
let listener = function () { //监听函数
    console.log('welcome1222222223');
};
//不要用3000以下端口
http.createServer(listener).listen(3000);
//改动服务端代码 必须重新启动
//nodemon 实现自动重启 可以在命令行下使用全局安装
//进入到当前要执行的文件夹下 执行 nodemon 文件名
//ADDRINUSE:3000 占用端口
