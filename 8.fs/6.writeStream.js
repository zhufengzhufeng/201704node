let fs = require('fs');
//1.如果文件不存在则会创建
//2.写默认都是utf8格式
//3.每次写入最大是16k，读64写16 就占用了可用内存
let ws = fs.createWriteStream('./2.txt',{highWaterMark:1});
//write方法是异步的，他还有返回值
var flag = ws.write('1222');//写入必须是字符串或者buffer。
console.log(flag); //flag 只是一个条件，可以告诉，当前是否还需要继续读取么，限制读的速率 ，读是疯狂的读，让读取暂停
ws.end('吃的好多');//强制将没写入的全部写入 关闭
//ws.write('吃馒头');//在end后不能再调用write方法
