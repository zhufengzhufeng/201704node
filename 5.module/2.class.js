//extends是继承私有还是公有  super
function Person(name) {
    this.name = name;
}
Person.prototype.drink = function () {
    console.log('你好');
}
Person.a = function () {
    console.log('static');
}
function Girl(name,age) {
    Person.call(this,name,age);
    this.age = age;
}
Girl.prototype.__proto__ = Person.prototype;