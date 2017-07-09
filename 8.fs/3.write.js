let fs = require('fs'); //操作目录 文件 读写
//1.写的默认编码格式是utf8编码
//2.没有时会创建 写时会自动生成,写入前会先清空文件
//3.如果是对象 需要转成json串写入
//fs.writeFileSync('1.txt',JSON.stringify({name:1}));
fs.writeFile('1.txt','你好',function (err) {
    console.log(err);
});
