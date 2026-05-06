import Food from './Food'
import Panel from './Panel'
import Snake from './Snake'

// 1. 游戏的控制器, 控制所有类
class GameAll {
// 2. 定义三个属性: 蛇、食物、记分牌
    Food: Food
    Panel: Panel
    Snake: Snake
// (1) 移动端控制蛇的上下左右
    up: HTMLElement
    down: HTMLElement
    left: HTMLElement
    right: HTMLElement
// 3. 创建一个属性来存储蛇的移动分享(按键方向)
    direction: string = ''
// 12. 创建一个属性来记录游戏是否结束
    isLive = true

    constructor () {
        this.Food = new Food()
        this.Panel = new Panel(10, 1)
        this.Snake = new Snake()
// (3) 移动端控制蛇的上下左右
        this.up = document.querySelector('.up')!
        this.down = document.querySelector('.down')!
        this.left = document.querySelector('.left')!
        this.right = document.querySelector('.right')!
        this.init() // 调用游戏开始方法
    }
// 4. 游戏的开始方法, 调用后游戏就开始了
    init() {
// 5. 绑定键盘按下事件, 这里原this指向document,(使用bind方法创建新函数,然后这个this绑定新函数的this)
        document.addEventListener('keydown', this.start.bind(this))
// (4) 移动端控制蛇的上下左右
        this.up.addEventListener('click', this.addUp.bind(this))
        this.down.addEventListener('click', this.addDown.bind(this))
        this.left.addEventListener('click', this.addLeft.bind(this))
        this.right.addEventListener('click', this.addRight.bind(this))
// 11. 调用run方法, 使蛇移动
        this.run()
    }
// 6. 创建键盘按下后响应的函数
    start(event: KeyboardEvent) {
// 7. 将按下的按键存储direction属性里, 然后判断event.key是否为上下左右的按键
        this.direction = event.key
        console.log(event.key)
    }
// (5) 移动端控制蛇的上下左右
    addUp() {
        this.direction = 'ArrowUp'
    }
    addDown() {
        this.direction = 'ArrowDown'
    }
    addLeft() {
        this.direction = 'ArrowLeft'
    }
    addRight() {
        this.direction = 'ArrowRight'
    }
// 8. 创建控制蛇移动的方法
    run() {
// 9. 获取蛇现在的坐标
        let X = this.Snake.X
        let Y = this.Snake.Y
// 10. 根据按键方向来修改X/Y值
// 向上移动top减少, 向下移动top增加, 向左移动left减少, 向右移动left增加
        switch (this.direction) {
            case "ArrowUp": 
                    Y -= 10; 
                    break
            case "ArrowDown": 
                    Y += 10; 
                    break
            case "ArrowLeft": 
                    X -= 10;
                    break
            case "ArrowRight":
                    X += 10;
                    break
        }
// 06. 检测蛇是否吃到了食物, 调用SnakeEat方法, 将当前X/Y坐标传入进去
        this.SnakeEat(X, Y)

// 01. 检测蛇是否撞墙, 没有则继续修改蛇的X/Y值, 
        try {
            this.Snake.X = X
            this.Snake.Y = Y
        } catch(e: any) {
// 02. 进入catch, 说明超过0~290(Snake模块则抛出异常), 游戏结束弹出提示框
            alert(e.message)
// 03. 提示框弹出后, 让游戏结束(设为false)
            this.isLive = false
        }
// 这里蛇移动的计算方法(默认300, 随着等级加快, 用当前等级-1*30, 300-计算出的时间)
        this.isLive && setTimeout(this.run.bind(this), 400 - (this.Panel.level -1) * 30)
    }
// 04. 定义一个用来检测蛇是否吃到食物的方法
    SnakeEat(X: number, Y: number) {
// 05. 判断当前X/Y是否等于当前食物的X/Y坐标
// 若X/Y坐标都相等, 则调用: 食物位置重置、加分功能、蛇增加长度的三个方法
        if (X === this.Food.X && Y === this.Food.Y) {
            this.Food.change()
            this.Panel.addScore()
            this.Snake.Addbody()
        }
    }
}

// 导出模块
export default GameAll