let http = require('http');
let fs = require('fs');
//是一个第三方模块 帮你处理类型 mime  npm install mime  --save
let mime = require('mime');
let url = require('url'); //内置模块 他可以将路径转化为 对象
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true); //true的作用是将query转换成对象
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res);
    }else{
        let flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('Content-Type',mime.lookup(pathname)+";charset=utf-8");
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