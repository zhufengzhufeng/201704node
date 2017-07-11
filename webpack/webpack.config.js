//webpack是基于commonjs规范的
//默认需要导出一个对象 让webpack来使用
let path = require('path');//resolve join
//HtmlWebpackPlugin 是类
let HtmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',//入口 填写相对路径
    output:{
        filename:'dist.js',//打包后输出文件的名字,
        path:path.join(__dirname,'dist') //输出的路径必须是绝对路径
    },
    // 使用babel 需要 babel-core babel-loader babel-preset-es2015 babel-preset-stage-0
    //exclude表示忽略
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //需要两个loader  css-loader style-loader以style标签的形式插入到html中,从右边往左边写
            {test:/\.css$/,use:['style-loader','css-loader']},
            //使用less 需要安装less less-loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //url-loader需要file-loader,一般情况 8k以下转化成base64
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(woff|svg)/,use:'url-loader?limit=8192'}
        ]
    },
    plugins:[ //可以放很多插件
        new HtmlWebpackPlugin({
            template:'./src/index.html'//会自动将此html 引入打包后的文件 导出到dist目录下
        })
    ]
    //改编成es5代码 匹配js 变成es5
};