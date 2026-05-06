"use strict";
// 1. constructor定义构造函数, 在创建对象时调用
// 2. 在实例方法中, this指向当前实例对象
// 3. 可通过this向新建对象添加属性
// 4. 在方法中谁调用它, this就指向谁
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    fn() {
        console.log(this);
    }
}
let dog = new Dog('小黑', 10);
let dog1 = new Dog('小白', 12);
console.log(dog);
console.log(dog1);
dog.fn();
dog1.fn();
