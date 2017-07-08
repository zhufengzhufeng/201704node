## 继承
1. 全部继承
```
Child.prototype = new Parent;
extends + super
```
2. 只继承私有
```
function Child(){
    Parent.call(this)
}
```
3. 只继承公有
```
Child.prototype.__proto__ = Parent.prototype
Child.prototype = Object.create(Parent.prototype)
Object.setProtoTypeOf(Child.prototype,Parent.prototype)
```
