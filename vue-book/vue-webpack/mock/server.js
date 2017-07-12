let http = require('http');
let url = require('url');
let sliders = require('./sliders');
http.createServer(function (req,res) {
  //获取轮播图数据
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/api/sliders'){
      res.setHeader('Content-Type','application/json;charset=utf-8');
      res.end(JSON.stringify(sliders));
    }
}).listen(5000);
// localhost:8000 -> localhost:5000 会跨域



