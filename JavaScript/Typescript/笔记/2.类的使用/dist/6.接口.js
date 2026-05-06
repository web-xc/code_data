"use strict";
// interface接口用来定义类的结构, 包含: 属性和方法...
// 同时接口也可以当成类型声明使用
(function () {
    let obj = {
        name: '小张',
        age: 18,
        sex: '男'
    };
    console.log(obj);
    // 定义类时, 用implements关键字使类去实现一个接口
    // 实现接口就是使类满足接口的要求, 接口就是定义类的一个规范/限制
    class Dog {
        constructor(name) {
            this.name = name;
        }
        fn() {
            console.log('我是定义类时实现的接口');
        }
    }
    let dog = new Dog('我是定义类时实现的接口');
    console.log(dog);
    dog.fn();
})();
