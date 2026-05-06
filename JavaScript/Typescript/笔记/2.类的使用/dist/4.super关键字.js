"use strict";
// 如果在子类中写了构造函数, 在子类构造函数中必须对父类的构造函数进行调用
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        fn() {
            console.log('动物在跑');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        fn() {
            super.fn(); // 在类的方法中, super表示当前类的父类
        }
    }
    let dog = new Dog('旺财', 10);
    dog.fn();
    console.log(dog);
})();
