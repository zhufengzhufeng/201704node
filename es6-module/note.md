## commonjs规范 node
- 如何定义模块  建立js
- 导入模块  require();
- 导出模块 exports module.exports

> 浏览器是不支持commonjs规范

## es6规范
- import export(node不支持)
- export let a = 100
- export default {}

## webpack 打包(开发不考虑 ie8以下(包括ie8))
- 会将css js 全部打包到一个文件中
- 帮压缩 帮合并
- 可以帮我们解决兼容性问题 ES5 