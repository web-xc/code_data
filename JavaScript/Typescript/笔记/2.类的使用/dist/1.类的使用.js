"use strict";
// 使用class关键字定义类
// 对象中包含两部分: 属性、方法
// 1. 定义实例属性
// 2. 使用static开头的关键字可以定义类属性(静态属性), 可直接通过类访问
// 3. readonly开头的属性表示只读的属性无法修改
// 4. 定义方法
class obj {
    constructor() {
        this.name = '小张';
    }
    fn() {
        console.log('你好');
    }
}
obj.age = 18;
let num = new obj();
console.log(num);
console.log(obj.age);
// obj.age = 1
// console.log(obj.age)
num.fn();
