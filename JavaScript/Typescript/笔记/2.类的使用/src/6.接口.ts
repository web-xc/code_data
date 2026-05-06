// interface接口用来定义类的结构, 包含: 属性和方法...
// 同时接口也可以当成类型声明使用
(function () {
    interface my1 {
        name: string,
        age: number
    }
    interface my1 {
        sex: string
    }
    let obj: my1 = {
        name: '小张',
        age: 18,
        sex: '男'
    }
    console.log(obj)
// 接口可以在定义类的时候去限制类的结构
// 接口中所有属性不能有实际值, 只定义对象结构, 不考虑值
// 接口中所有方法都是抽象方法
    interface my2 {
        name: string
        fn():void
    }
// 定义类时, 用implements关键字使类去实现一个接口
// 实现接口就是使类满足接口的要求, 接口就是定义类的一个规范/限制
    class Dog implements my2 {
        name: string
        constructor (name: string) {
            this.name = name
        }
        fn() {
            console.log('我是定义类时实现的接口')
        }
    }
    let dog = new Dog('我是定义类时实现的接口')
    console.log(dog)
    dog.fn()
})()