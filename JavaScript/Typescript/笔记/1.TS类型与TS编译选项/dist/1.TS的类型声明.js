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
