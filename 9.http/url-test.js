let str = 'https://username:password@www.baidu.com/s?wd=asd&rsv_spt=1&rsv_iqid=0xd66921e80000a6ee&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=573&rsv_sug4=573';


let url = require('url'); //([^&=?]+)=([^&=?]+)
console.log(url.parse(str,true).pathname);
console.log(url.parse(str,true).query);

let {pathname,query} = url.parse(str,true);
console.log(pathname,query);
