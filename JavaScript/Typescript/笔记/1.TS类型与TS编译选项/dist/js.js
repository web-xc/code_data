console.log('Hello TS');
// 1. 声明一个变量a 同时指定它的类型为number
let a;
// a的类型设置了number 以后使用a时, 值只能是number
a = 10;
// a = '你好' // a的变量值是字符串, 所以报错
// 2. 声明完变量直接赋值(可以省略)
let b = true;
// 如果变量的声明和赋值同时进行, TS会自动对变量进行类型检测
let c = false;
c = true;
// 3. JS函数是不考虑参数类型和个数的
function fn(a, b) {
    return a + b;
}
console.log(fn(1, 2));
console.log(fn(1, '1'));
// 4. TS函数可对参数/个数进行限制
function fn1(a, b) {
    return a + b;
}
console.log(fn1(1, 2));
// console.log(fn1(1, '2'))
// console.log(fn1(1, 1, 1))
// 5. TS可以对函数返回值进行类型限制
function fn2(a, b) {
    return a + b;
}
console.log(fn2(1, 1));
// console.log(fn2(1, '1'))
// 1. 可直接使用字面量进行类型声明
let a;
a = 10;
// 可使用 | 来连接多个类型(联合类型)
let b;
b = 'aa';
b = 'bb';
// b = 'cc' 报错
let c;
c = true;
c = '你好';
// 2. any 表示任意类型, 变量设置为any类型后, 相当于该变量关闭了TS类型检测
// 使用TS时, 不建议使用any
let d;
d = 1;
d = true;
d = '你好';
// 声明变量不指定类型时，TS解析器会自动判断变量类型为any(隐式的any)
// let d
// 3. unknown表示未知类型的值
let e;
e = 1;
e = true;
e = '你好';
// d的类型是any, 可赋值给任意变量
let s;
// s = d
// unknown实际上就是一个类型安全的any
// unknown类型变量, 不能直接赋值给其他变量
if (typeof e == 'string') {
    s = e;
}
// 4. 类型断言, 可以用来告诉解析器变量的实际类型
s = e; // 变量 as 类型
s = e; // <类型> 变量
// 5. void表示空, 表示函数没有返回值 (但包含undefined null)
function fn() { }
// 6. never表示永远不会返回结果 (不包含undefined null)
function fn1() {
    throw new Error('报错了');
}
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
System.register("4.TS\u7F16\u8BD1\u9009\u9879", [], function (exports_1, context_1) {
    "use strict";
    var name, box;
    var __moduleName = context_1 && context_1.id;
    // noImplicitThis: 不允许不明确类型的this
    function fn() {
        console.log(this);
    }
    return {
        setters: [],
        execute: function () {
            console.log('你好');
            exports_1("name", name = '张三');
            // strictNullChecks: 严格检查空值
            box = document.querySelector('.box');
            box.addEventListener('click', () => {
                console.log(1);
            });
            // 可以使用if判断解决: if (box !== null) 或者 box?.addEventListener...
        }
    };
});
System.register("\u6D4B\u8BD5", ["4.TS\u7F16\u8BD1\u9009\u9879"], function (exports_2, context_2) {
    "use strict";
    var _4_TS____1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (_4_TS____1_1) {
                _4_TS____1 = _4_TS____1_1;
            }
        ],
        execute: function () {
            console.log(_4_TS____1.name);
        }
    };
});
