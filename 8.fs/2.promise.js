//Promise 承诺  ->  永远没有结果  ->等待 -> 成功 resolve  -> 失败 reject
//Promise 在node中天生支持 构造函数
let fs = require('fs');
/*function read(url,cb) {
    fs.readFile(url,'utf8',function (err,data) {
        if(err)console.log(err)
        cb(data);
    });
}
read('name.txt',function (data) {
    console.log(data);
});*/
function read(url) {
    return new Promise( (resolve,reject)=> {
        fs.readFile(url,'utf8',function (err,data) {
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        });
    })
}
//解决了回调问题  then catch resolve reject Promise.all 一起执行
//在all方法中 都成功 才成功 有一个失败 就失败了
//[name,age]=['珠峰培训',8]
Promise.all([read('name.txt'),read('age.txt')]).then(([name,age])=>{
    let school = {
        name,age
    };
    console.log(school);
},function (err) {
    console.log(err);
});
/*read('name.txt').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});*/



/*
function buyPack() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            if(Math.random()*10>5){
                resolve('ok')
            }else{
                reject('error');
            }
        },300);
    })
}
buyPack().then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
*/
