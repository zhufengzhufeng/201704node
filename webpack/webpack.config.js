//webpack是基于commonjs规范的
//默认需要导出一个对象 让webpack来使用
let path = require('path');//resolve join
module.exports = {
    entry:'./src/main.js',//入口 填写相对路径
    output:{
        filename:'bundle.js',//打包后输出文件的名字,
        path:path.join(__dirname,'dist') //输出的路径必须是绝对路径
    },
    // 使用babel 需要 babel-core babel-loader
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader'}
        ]
    }
    //改编成es5代码 匹配js 变成es5
};