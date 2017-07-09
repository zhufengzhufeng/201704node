let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);

    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res);
    }
    //1. /clock
    else if(pathname === '/clock'){
        let timer = new Date().toLocaleString();
        res.end(JSON.stringify({timer:timer})); //string or buffer
    }
    else{
        let flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('Content-Type',mime.lookup(pathname)+";charset=utf-8");
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not Found');
        }
    }
}).listen(5000);