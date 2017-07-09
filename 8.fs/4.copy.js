let fs = require('fs');
/**
 * @param source 代表要拷贝的文件
 * @param target 拷贝出的文件
 */
function copySync(source,target) {
    //1.先读取source，在写入到target
    //2.readFileSync writeFileSync
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
function copy(source,target,callback) {
    //1.先读取source，在写入到target
    //2.readFile writeFile
    fs.readFile(source,function (err,data) {
        if(err) return callback(err); //如果有错误将错误传递给callback  结束
        fs.writeFile(target,data,function (err) {
            callback(err);
        });
    })
}
/*try{
    copySync('1111.txt','3.txt')
}catch (e){
    console.log(e);
}*/
copy('1.txt','3.txt',function (err) {
    console.log(err);
});
//虽然 改写成了异步 但仍然解决不了大文件读写的问题，会淹没内存，希望的是边读边写， 流帮我们解决这种边读边写，gulp 基于流的