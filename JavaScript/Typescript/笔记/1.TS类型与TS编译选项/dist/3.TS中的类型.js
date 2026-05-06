// object表示js对象
let a;
a = {};
a = function () { };
// 1. {} 用来指定对象中可以包含哪些属性: {属性名: 属性值}
// b的值必须为一个对象, 要有name属性且值为string
// 在属性名后边加上? 表示属性是可选的
// [propName: string]: any 表示可添加任意类型属性
let b;
b = { name: '你好', a: 1, b: 2 };
// 2. 设置函数结构的类型声明
let c;
// c = function (a1: string, b1: string): number {
//     return 10
// }
// 3. 数组的类型声明: 1.类型[] 2. Array<类型>
let d; // 表示字符串数组
d = ['1', '2'];
let e; // 表示数值数组
e = [1, 2];
// 4. 元组: 就是固定长度的数组
let f;
f = ['1', '2'];
// 5. enum枚举
var Ages;
// 5. enum枚举
(function (Ages) {
    Ages[Ages["nan"] = 0] = "nan";
    Ages[Ages["nv"] = 1] = "nv";
})(Ages || (Ages = {}));
let g;
g = {
    name: '张三',
    age: Ages.nan // 0 男 1 女
};
console.log(g.age == Ages.nan); // true
// 6. &表示同时
let i;
i = { name: '张三', age: 1 }; // 要有name和age属性, 同时对值进行类型限制
let j;
j = 1;
