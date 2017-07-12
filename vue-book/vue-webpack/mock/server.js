let http = require('http');
let url = require('url');
let sliders = require('./sliders');
let fs = require('fs'); //文件读取
function read(cb) {
  //如果有书 返回书的集合 没书就是空数组
  fs.readFile('./book.json','utf-8',function (err,data) {
    //如果有错误 走 空数组，没错 走下面数据
    if(err || data.length === 0 ){
      cb([]);
    }else{
      cb(JSON.parse(data))
    }
  });
}
http.createServer(function (req,res) {
  //获取轮播图数据
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/api/sliders'){
      res.setHeader('Content-Type','application/json;charset=utf-8');
      res.end(JSON.stringify(sliders));
    }else if(pathname === '/api/hot'){
      read(function (data) {
        setTimeout(function () { // 老板给钱就优化
          res.setHeader('Content-Type','application/json;charset=utf-8');
          res.end(JSON.stringify(data.reverse().slice(0,9)));
        },2000)
      });
    }
}).listen(5000);
// localhost:8000 -> localhost:5000 会跨域
