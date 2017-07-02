let obj = { //对象中的函数 ：和function关键字 可以省略
   "+"(a,b){
      return a+b;
   },
   "-"(a,b){
      return a-b;
   }
};
// exports.obj = obj
// exports = obj
module.exports = obj;

// let a = 'b';
// let obj = { //es6语法，取a对应的值作为key
//    [a]:1
// }; //{b:1}
// console.log(obj);
