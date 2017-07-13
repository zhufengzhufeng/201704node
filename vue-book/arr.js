//map 映射
//把一个数组 映射成 另一个形式 返回一个新数组 做修改
var arr = [1,2,3];
let newArr = arr.map(item=>`<li>${item}</li>`);
console.log(newArr.join(''));

var arr = [1,2,3,4,5,6];
//可以返回叠加后的结果
let result = arr.reduce((prev,next)=>{ //将返回值作为下一次的prev
    console.log(prev,next);
    return prev+next
},0);//手动添加 第一项
console.log(result);

var arr = [[1,2,3],[4,5,6],[7,8,9]]; // [1,2,3,4,5,6,8,9]
var ary = arr.reduce((prev,next)=>{
    return [...prev,...next]
})
console.log(ary);

//find查找 找到后的某一项 返回true会将当前这一项返回,找到后 不继续查找，和some一样
//登录
var list = [{name:'我很帅'},{name:'我不帅'},{name:'我非常帅'},{name:'我不帅'}];
var obj = list.find(item=>item.name==='我不帅');
console.log(obj);

//filter 返回true表示塞到新数组中 返回false不管了，最后返回新数组
var arr = [1,2,3,4,5];
var ary = arr.filter(item=>item<=3);
console.log(ary);
