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

//['买车','买包'] 买车  => [买包]
/*let obj  ={age:[1,2,3]};
let arr = obj.age;
arr = [4,5,6];
console.log(obj);*/

Man.prototype.emit = function (eventName,...args) {//除了第一个将剩下的部分组成数组
    //在参数中是剩余运算符  还可以用作展开运算  [...[1,2,3],...[4,5,6]]
    if(this._events[eventName]){
        //apply传递的是数组 call 传递的是一个个的  {'有钱':[one]}
        this._events[eventName].forEach(item=>item.call(this,...args));
    }
};
Man.prototype.removeListener = function (eventName,callback) {
    let arr = this._events[eventName]; //取出数组 赋予给arr
    if(arr){
        //返回true 表示放到新数组里，返回false表示不要他了,要改变的是对象中的数组 而不是新声明的数组
        this._events[eventName] = arr.filter(cb=>{
            return cb!==callback && cb.l!==callback;//可能cb是one函数 如果自定义属性和当前传递的callback相同 表示也要删除掉
        });
    }
};
Man.prototype.once = function (eventName,callback) { //先绑定  触发emit时 删除绑定的
    function one() { //触发one函数 调用原有执行的函数
        callback.apply(this,arguments); //buyPack
        this.removeListener(eventName,one); //执行后删除one函数
    }
    this.on(eventName,one); //绑定的是one函数
    one.l =  callback;//在one上存储买包的事
};
let man = new Man();
function buyCar(who,who1) {console.log('买车给'+who+who1);}
function buyPack(who,who1) {console.log('买包给'+who+who1);}
man.on('有钱',buyCar); //{'有钱':[buyCar]}
man.once('有钱',buyPack); //{'有钱':[buyCar,buyPack]}  once的作用是 只触发一次 ，多次触发也只是一次
man.removeListener('有钱',buyCar);
man.removeListener('有钱',buyPack);
man.emit('有钱','妹子','妹子2'); //[buyCar(),buyPack()]

