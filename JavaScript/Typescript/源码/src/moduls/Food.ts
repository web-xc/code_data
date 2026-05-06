// 1. 定义food食物功能的类
class Food {
// 2. 定义一个属性表示食物对应的元素
        elemnet: HTMLElement
        constructor () {
// 3. 获取页面中food元素然后赋值给element
            this.elemnet = document.querySelector('.food')!
        }
// 4. 定义获取食物X轴坐标的方法
        get X() {
            return this.elemnet.offsetLeft
        }
// 5. 定义获取食物Y轴坐标的方法
        get Y() {
            return this.elemnet.offsetTop
        }
// 6. 设置食物随机位置的方法
// 食物的位置最小是0, 最大是290
// 蛇移动一次是一格, 一格大小是10, 所以要求食物坐标必须是整10
        change() {
            let top = Math.round(Math.random() * 29) * 10
            let left = Math.round(Math.random() * 29) * 10
            this.elemnet.style.top = top + 'px'
            this.elemnet.style.left = left + 'px'
        }
    }
// 测试代码
// let foods = new Food()
// console.log(foods.X, foods.Y)
// foods.change()
// console.log(foods.X, foods.Y)

// 7. 导出模块
export default Food