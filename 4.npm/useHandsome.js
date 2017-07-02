//引用第三方模块,第三方可以直接写模块的名字即可
//第三方模块需要下载 引用不需要./ ../,在node_modules下查找，当前目录下没有 回去上级查找，找到根盘符为止 module.paths 查找的顺序
let str = require('my-pack-zfpx');
console.log(str);
console.log(module.paths);//一般都是当前文件夹下

//文件模块 第三方模块


