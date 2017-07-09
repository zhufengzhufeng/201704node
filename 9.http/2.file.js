let http = require('http');
let fs = require('fs');
//监听函数 当浏览器访问客户端时执行
let mime = {
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html'
};
http.createServer(function (req,res) {
    //获取请求的路径
    let pathname = req.url;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res);//pipe方法会自动的调用可写流的write 和end方法
    }else{ // /style.css   /index.js
        let flag = fs.existsSync('.'+pathname); //如果存在在读取 否则直接404
        if(flag){
            let type = mime[pathname.match(/\.\w+$/)[0]];
            res.setHeader('Content-Type',type+";charset=utf-8");
            //判断路径是否存在 存在在读取
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not Found');
        }
    }
}).listen(3000);

/*fs.readFile('./index.html',function (err,data) {
 if(err)return console.log(err);
 res.end(data);
 });*/