class Person{
    constructor(name){
        this.name = name;
    }
    //静态方法 只给类来调用
    static a(){
        console.log('static');
    }
    //原型上的方法
    drink(){
        console.log('你好');
    }
}
class Girl extends Person{
    constructor(name,age){
        super(name,age); //必须调用，相当于调用 父类函数,父类函数中的this指向girl
        this.age = age;
    }
}
let girl = new Girl(1,2);

/*let person  = new Person('xxx');
console.log(person.drink());
Person.a();*/
