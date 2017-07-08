//fs  file system 文件系统
let fs = require('fs');
//fs里的方法 同步 异步
//1.读取内容必须存在，不存在则报错
//2.读取内容默认都是buffer类型
//error-first
let school = {};
let EventEmitter = require('events');
let e = new EventEmitter();
fs.readFile('name.txt','utf8',function (err,data) { //5s
    if(err)console.log(err);
    school.name = data;
    e.emit('输出');
});
fs.readFile('age.txt','utf8',function (err,data) { //3s
    if(err)console.log(err);
    school.age = data;
    e.emit('输出');
});
e.on('输出',out);
function out() { //判断对象里有几个属性,将对象转化成数组
    //console.log(Object.keys(school));
    if(Object.keys(school).length === 2)console.log(school);
}



// try {}catch
/*let name = fs.readFileSync('name1.txt','utf8');
let age = fs.readFileSync('age.txt','utf8');
let school = {name,age};
console.log(school);*/

