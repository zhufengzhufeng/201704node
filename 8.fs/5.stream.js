//可读流 readStream  可写流  writeStream 他是有顺序，有起点和终点，不关心文件的整体内容，只关心独到的内容
let fs  = require('fs');
//1.读取时文件必须存在
//2.highWaterMark 默认64k ，分段读取
//3.读取默认都是buffer
let rs = fs.createReadStream('./name.txt',{highWaterMark:1});
//默认这种模式 叫 非流动模式 -> 流动模式
let str = ''; //Buffer.concat
rs.on('data',function (data) { //node会不停的 rs.emit('data',data)
    console.log(data); //疯狂的触发
    str+=data;
});
rs.on('end',function () {//当这个文件读取完成后 就会触发end事件
    console.log(str);
});

