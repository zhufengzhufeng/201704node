//1.events 库 专门实现 事件的 是一个核心模块
let EventEmitter = require('events'); //导入events库
let util = require('util'); //setPrototypeOf 继承这个库
function Man() {}
util.inherits(Man,EventEmitter);
let man = new Man();
function buyCar(who,who1) {console.log('买车给'+who+who1);}
function buyPack(who,who1) {console.log('买包给'+who+who1);}
man.on('有钱',buyCar);
man.once('有钱',buyPack);
man.removeListener('有钱',buyPack);
man.emit('有钱','妹子','妹子2');
man.emit('有钱','妹子','妹子2');

//将以上代码转化成es6的写法




