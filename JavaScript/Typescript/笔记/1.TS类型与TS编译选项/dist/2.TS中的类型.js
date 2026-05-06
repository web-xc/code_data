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
