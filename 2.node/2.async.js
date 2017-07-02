//箭头函数
/*function a(b,c) {
    return b+c;
}*/
//1.箭头函数不需要function声明
//2.如果箭头后面是一个{} 需要写return
//3.this指向 箭头函数中没有this指向所以this指向上一级，从而解决了this问题
//let a = (b,c) => b+c;
//1.高阶函数
/*function a(b) {
    return function (d) {
        return b+d;
    }
}*/
/*let a = b =>{
    return d =>{
        return b+d;
    }
}*/
let a = b => d => b+d;
console.log(a(1)(2));
//可以通过箭头函数 解决this指向问题，或者用bind解决this指向问题
let obj = {
    a:function () {
        setTimeout(()=> {
            console.log(this);
        })
    }
};
obj.a();