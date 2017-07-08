function Man() {this._events = {}}
Man.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){ //第二次{'有钱':[buyCar,buyPack]}
        this._events[eventName].push(callback)
    }else{ //第一次  {'有钱':[buyCar]}
        this._events[eventName] = [callback];
    }
};
Man.prototype.emit = function (eventName) {
    if(this._events[eventName]){
        this._events[eventName].forEach(item=>item());
    }
};
let man = new Man();
function buyCar() {console.log('买车');}
function buyPack() {console.log('买包');}
man.on('有钱',buyCar); //{'有钱':[buyCar]}
man.on('有钱',buyPack); //{'有钱':[buyCar,buyPack]}
man.emit('有钱'); //[buyCar(),buyPack()]
