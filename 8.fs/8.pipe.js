let fs = require('fs');
function copy(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    rs.pipe(ws); //可读流的方法pipe 管道  异步，读一点写一点,保证不淹没可用内存
}
//什么时候用readFile 什么时候用pipe
//readFile可以看到读取的内容 pipe 看不到的
copy('2.txt','4.txt');

let path = require('path');
//path 内置模块 resolve 解析  join
console.log(path.resolve('dist','a'));//给相对 会返还给你一个绝对路径
//console.log(path.join(__dirname,'dist','a'));

