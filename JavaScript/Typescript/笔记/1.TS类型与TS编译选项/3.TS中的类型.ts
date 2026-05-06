// object表示js对象
let a: object
a = {}
a = function () {}

// 1. {} 用来指定对象中可以包含哪些属性: {属性名: 属性值}
// b的值必须为一个对象, 要有name属性且值为string
// 在属性名后边加上? 表示属性是可选的
// [propName: string]: any 表示可添加任意类型属性
let b: {name: string, age?: number, [propName: string]: any}
b = {name: '你好', a: 1, b: 2}

// 2. 设置函数结构的类型声明
let c: (a: number, b: number) => number
// c = function (a1: string, b1: string): number {
//     return 10
// }

// 3. 数组的类型声明: 1.类型[] 2. Array<类型>
let d: string[]       // 表示字符串数组
d = ['1', '2']

let e: Array<number>  // 表示数值数组
e = [1, 2]

// 4. 元组: 就是固定长度的数组
let f: [string, string]
f = ['1', '2']

// 5. enum枚举
enum Ages {
    nan,
    nv
}
let g: {name: string, age: Ages}
g = {
    name: '张三',
    age: Ages.nan // 0 男 1 女
}
console.log(g.age == Ages.nan) // true

// 6. &表示同时
let i: {name: string} & {age: number}
i = {name: '张三', age: 1} // 要有name和age属性, 同时对值进行类型限制

// 7. 类型的别名: 可简化类型的使用
type myType = 1 | 2 | 3 | 4
let j: myType
j = 1
