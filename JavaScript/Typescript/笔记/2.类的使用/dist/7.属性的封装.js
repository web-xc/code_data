"use strict";
// TS可以在属性前添加属性修饰符
// 1. public默认值: 修饰的属性可以任意访问/修改
// 2. private: 私有属性, 只能在类内部修改
// 3. protected: 所包含的属性 只能在当前和当前子类中访问/修改
// 4. 通过类中添加方法实现私有属性可以被外部访问
(function () {
    class obj {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // // 5. 定义方法, 用来获取name属性
        // getName() {
        //     return this.name
        // }
        // setName(value: string) {
        //     return this.name = value
        // }
        // // 定义方法, 用来获取age属性
        // getAge() {
        //     return this.age
        // }
        // setAge(value: number) {
        //     // 可通过if判断对age的赋值进行限制
        //     if (value >= 0) {
        //         return this.age = value
        //     }
        // }
        // 6. 通过TS设置getter方法的方式
        get names() {
            return this.name;
        }
        set names(value) {
            this.name = value;
        }
        get ages() {
            return this.age;
        }
        set ages(value) {
            if (value >= 0) {
                this.age = value;
            }
        }
    }
    let num = new obj('小张', 18);
    // 1. 没有被属性修饰符修过的 属性在对象中可以任意修改
    // 任意修改会导致对象数据变得不安全
    // num.name = '小明'
    // num.age = -1
    console.log(num);
    // 8. 通过getter/setter/读写对象数据. 它们被称为存取器
    // num.setName('小猪')
    // num.setAge(-1)
    // console.log(num.getName(), num.getAge())
    num.names = '小猪';
    num.ages = -1;
    console.log(num.names, num.ages);
    // 9. protected所包含的属性: 只能在当前和当前子类中访问/修改
    class obj2 {
        constructor(num) {
            this.num = num;
        }
    }
    class obj3 extends obj2 {
        fn() {
            console.log(this.num);
        }
    }
    let num1 = new obj3(1);
    // num1.num = 2 // 通过实例去访问是访问不了的, 因为只能在类里访问
    console.log(num1);
    // 10. public语法糖: 可以直接将属性定义在构造函数中
    class obj4 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let num2 = new obj4('小刚', 18);
    console.log(num2);
})();
