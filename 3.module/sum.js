function sum(...arr) {
    //类数组如何转换成数组
    //1.Array.from(arguments);//将类数组转化成数组
    //2.[].slice.call(arguments);
    //3.arguments.forEach()
    //剩余运算符
    let total = 0;
    arr.forEach(item=>total+=item);
    return total;
}
//1.module.exports = sum;
//2.exports.sum = sum;
//3.module.exports.sum = sum;
global.sum = sum;
//尽量不要在global上挂载属性