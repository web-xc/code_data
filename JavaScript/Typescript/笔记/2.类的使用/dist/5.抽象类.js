"use strict";
// 以abstract开头的类是抽象类
// 抽象类和其他类区别不大, 只是不能用来创建对象
// 抽象类是专门用来被继承的类
// 抽象类中可以添加抽象方法
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        fn() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        fn() {
            console.log('喵喵喵');
        }
    }
    let dog = new Dog('小黑');
    let cat = new Cat('小白');
    dog.fn();
    cat.fn();
    console.log(dog);
    // let a = new Animal()
})();
