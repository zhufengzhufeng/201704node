//创建http服务 ip地址 port端口号
//node提供自带的模块 http
let http = require('http');
let listener = function (req,res) { //监听函数,客户端的请求，服务端的响应
    //res是一个可写流 ws.write() ws.end()
    //res.write('welcome');//写到响应体中
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.setHeader('a',1);
    res.end('你好'); //调用end之后 会将内容发送完毕显示到浏览器上
    //favicon.ico发送请求是看心情的，如果发现不存在，以后就不请求了
};
//不要用3000以下端口
let port = 3000;
http.createServer(listener).listen(port,function () {
    console.log(port+' start');
});
//改动服务端代码 必须重新启动
//nodemon 实现自动重启 可以在命令行下使用全局安装
//进入到当前要执行的文件夹下 执行 nodemon 文件名
//ADDRINUSE:3000 占用端口
