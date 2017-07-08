//1.buffer 代表的是内存
//2.node为了操作二进制 生产出来的一个类型，buffer默认展示成16进制，可以和 字符串无条件转化
//2进制 最大1 16进制 f
//字符串在node中 只支持utf8格式
//一个汉字utf8有几个字节 3个字节
//比字节小的单位 1个字节由8个位组成 => 1个汉字多少位
console.log(Math.pow(2,8)-1);
//16进制最大值ff 代表10进制是255
//当前位的最大值*进制^当前所在位-1

//1)声明buffer 固定大小,buffer和数组非常像 有索引 slice
//1) 长度
var buffer = new Buffer(100); //字节，随机创建100个字节长,我们不关心内容是什么样子的，将内容写到内存里
//buffer.fill(0);
//2) 通过数组
var buffer = new Buffer([0x16,17,18]); //超出对256取模，加256
//3) 字符串创建
var buffer = new Buffer('珠峰');
console.log(buffer.toString()); //将buffer转化成字符串
//copy concat
var buf1 = new Buffer('珠峰培');
var buf2 = new Buffer('训');
console.log(buf1.length); //长度是字节的长度
var bigBuffer = new Buffer(12);
//targetBuffer 目标buffer, targetStart 目标的开始, sourceStart,源的开始 sourceEnd 源的结束
buf1.copy(bigBuffer);
buf2.copy(bigBuffer,buf1.length);
console.log(bigBuffer.toString());

// slice 数组的slice 截取 返回的是新数组？？？ 深拷贝 浅拷贝
var arr = [1,2,3]; //ffxxff
var A = [arr,4,5]; //递归循环拷贝
//var newArr = JSON.parse(JSON.stringify(A)); //深拷贝，json中不识别函数
//var newArr = A.slice();//浅拷贝 //[ffxxff,4,5]
let newArr = [];
Object.assign(newArr,A); //浅拷贝es6中  $.extend
arr[0] = 100;
console.log(newArr);

var buffer = new Buffer([1,2,3]); //buffer中放的是 内存地址 [[],[],[]],可以将buffer看成是二维数组
let newBuffer = buffer.slice(0,1);
newBuffer[0] = 100;
console.log(buffer);
// concat是类上的方法 Buffer
var buf1 = new Buffer('珠峰培');
var buf2 = new Buffer('训');
var buf3 = new Buffer('美丽');
var buf4 = new Buffer('大方');
//模拟一个concat方法　myConcat
Buffer.myConcat = function (list,totalLength) {
    //1.先判断是否传入totalLength,如果没传递 计算总长 typeOf
    //2.创建一个新buffer
    //3.循环数组 将每一项 拷贝到大buffer上
    //4.截取有效长度
};
console.log(Buffer.myConcat([buf1,buf2,buf3,buf4],10000).toString());