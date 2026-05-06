console.log('你好')
export let name = '张三'

// noImplicitThis: 不允许不明确类型的this
function fn(this: Window) {
    console.log(this)
}

// strictNullChecks: 严格检查空值
let box = document.querySelector('.box')
box.addEventListener('click', () => {
    console.log(1)
})
// 可以使用if判断解决: if (box !== null) 或者 box?.addEventListener...