function Man() {this._events = {}}
Man.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){ //第二次{'有钱':[buyCar,buyPack]}
        this._events[eventName].push(callback)
    }else{ //第一次  {'有钱':[buyCar]}
        this._events[eventName] = [callback];
    }
};
//声明式forEach forIn 的区别 钩子函数
/*let obj = {name:1};
let obj2 = {age:2};
let obj3 = {...obj,...obj2};  //extend es7语法 node不支持 */
Man.prototype.emit = function (eventName,...args) {//除了第一个将剩下的部分组成数组
    //在参数中是剩余运算符  还可以用作展开运算  [...[1,2,3],...[4,5,6]]
    console.log(args);
    if(this._events[eventName]){
        //apply传递的是数组 call 传递的是一个个的
        this._events[eventName].forEach(item=>item.call(this,...args));
    }
};
let man = new Man();
function buyCar(who,who1) {console.log('买车给'+who+who1);}
function buyPack(who,who1) {console.log('买包给'+who+who1);}
man.on('有钱',buyCar); //{'有钱':[buyCar]}
man.on('有钱',buyPack); //{'有钱':[buyCar,buyPack]}
man.emit('有钱','妹子','妹子2'); //[buyCar(),buyPack()]
