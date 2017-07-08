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
        super(name,age);
        this.age = age;
    }
}
let girl = new Girl(1,2);

/*let person  = new Person('xxx');
console.log(person.drink());
Person.a();*/
