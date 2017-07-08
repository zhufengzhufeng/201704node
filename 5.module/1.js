// 1.文件模块 自己写的 引入模块 ../ ./
// 2.第三方模块 需要下载  引入时不需要加 ./ ../ node_modules
// 3.内置模块 核心模块 人家给你写好的 用法和第三方模块一样，不需要下载 fs http
//commonjs 如何导出模块 如何创建模块 如何引用模块

let util = require('util'); //核心模块
//util是核心模块 inherits ,js中的继承
function Person(name) {
    this.name = name;
}
Person.prototype.drink = '喝水';
function Girl(name,age) {

}
//1.只继承私有的
//Person.call(this,name,age);//相当于让父类在子类中执行，将this改变成子类这样父类的私有属性就会被子类拿到
//2.只继承公有的
Girl.prototype.__proto__ = Person.prototype; //通过__proto__ 实现继承

//3.两者都有
//Girl.prototype = new Person(1); //让girl的原型 指向person的实例 ，new父类时不能传递参数