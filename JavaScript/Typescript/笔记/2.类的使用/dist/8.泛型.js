"use strict";
// function fn(a: any): any {
//     return a
// }
// 1. 定义函数或类时, 若类型不明确就可以使用泛型
function fn(a) {
    return a;
}
// 2. 可以直接调用泛型函数
let num1 = fn(1); // 不指定泛型时, TS会自动对类型进行检测
let num2 = fn('张三'); // 指定泛型
console.log(num1, num2);
// 3. 泛型可同时指定多个
function fn1(a, b) {
    console.log(a, b);
}
fn1('张三', 1); // 最好把泛型写上, 降低出错
// 表示泛型K必须是my的实现类(子类)
function fn2(a) {
    return a.length;
}
console.log(fn2('李四'));
// 5. 泛型也可在类中使用
class pink {
    constructor(name) {
        this.name = name;
    }
}
let Mypink = new pink('张三');
console.log(Mypink);
