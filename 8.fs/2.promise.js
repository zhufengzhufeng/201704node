//Promise 承诺  ->  永远没有结果  ->等待 -> 成功 resolve  -> 失败 reject
//Promise 在node中天生支持 构造函数
let fs = require('fs');
function read(url) {
    return new Promise(function (resolve,reject) {
        fs.readFile(url,'utf8',function (err,data) {
            if(err)reject(err);
            resolve(data)
        })
    })
}
//解决了回调问题
read('name.txt').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});



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
