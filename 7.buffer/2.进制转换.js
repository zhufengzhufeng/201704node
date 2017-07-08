//将任意进制转化成10进制 parseInt
//将任意进制转化成任意进制 toString
console.log(parseInt('111',2));
console.log(0xff.toString(10));
//base64 转图片 转文字，没有加密功能， 最大取值是在64之内
//一个汉字 多少位 3 * 8 = 6 * 4
let buffer = new Buffer('珠');
console.log(buffer);
//e7 8f a0
console.log(0xe7.toString(2));
console.log(0x8f.toString(2));
console.log(0xa0.toString(2));
//111001 111000 111110 100000
console.log(parseInt('111001',2));
console.log(parseInt('111000',2));
console.log(parseInt('111110',2));
console.log(parseInt('100000',2));
//57 56 62 32
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);
