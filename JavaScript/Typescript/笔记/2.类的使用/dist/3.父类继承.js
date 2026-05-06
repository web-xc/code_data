"use strict";
// Animal被称为父类, Dog被称为子类
// 使用继承后, 子类会拥有父类所有方法和属性
// 通过继承可以将多个类中共有代码写在一个父类中
// 这样只需写一次即可让所有子类都拥有父类中的属性和方法
// 如果在子类中添加父类中没有的属性或方法, 直接加即可
// 如果在子类中添加和父类相同的方法, 则子类方法会覆盖父类方法
// 这种子类覆盖父类方法形式, 称为方法重写
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        fn() {
            console.log('动物在跑');
        }
    }
    class Dog extends Animal {
        run() {
            console.log('旺财在跑~');
        }
        fn() {
            console.log('汪汪');
        }
    }
    class Cat extends Animal {
        fn() {
            console.log('咪咪');
        }
    }
    let dog = new Dog('旺财', 10);
    let cat = new Cat('咪咪', 20);
    console.log(dog);
    console.log(cat);
    dog.fn();
    cat.fn();
    dog.run();
})();
