let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let users = [{username:'zfpx',password:'zfpx',id:1},{username:'admin',password:'admin',id:2}];
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(pathname === '/user'){
        //如果query中有id 就是获取一个 没有就是获取全部  /user?id=1  GET
        let id = query.id;
        switch (req.method){ //req.method是大写的 GET
            case 'GET':
                if(id){
                    //获取某个
                }else{
                    //获取全部
                    res.end(JSON.stringify(users));
                }
                break;
            case 'POST':
                //获取请求体中的数据
                let str= '';
                req.on('data',function (data) {
                    str+=data;
                });
                req.on('end',function () {
                    let user = JSON.parse(str); //获取要添加的用户
                    user.id =users.length>0?users[users.length-1].id+1:1;
                    users.push(user);
                    res.end(JSON.stringify(users));
                });
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
        }
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
}).listen(8000);