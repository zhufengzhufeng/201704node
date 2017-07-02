## 模块化
- js中实现模块化,单例,闭包
- 单例 缺点: 不能保证一定不冲突，会导致调用过长，require(AMD),seajs(CMD),import export,不兼容
- 没有块级作用域

## node 自带模块化 commonjs规范
- 怎么定义一个模块（每个js都是一个模块，在每个文件外面 增加一个闭包）
- 如何导出一个模块 module.exports/exports 
- 如何引用一个模块 require();