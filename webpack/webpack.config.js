//webpack是基于commonjs规范的
//默认需要导出一个对象 让webpack来使用
let path = require('path');//resolve join
module.exports = {
    entry:'./src/main.js',//入口 填写相对路径
    output:{
        filename:'bundle.js',//打包后输出文件的名字,
        path:path.resolve('./dist') //输出的路径必须是绝对路径
    }
};