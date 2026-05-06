class Snake {
// 1. 获取蛇的元素/身体
    snake: HTMLElement
    body: HTMLCollection
// 2. 获取蛇的容器
    element: HTMLElement
    constructor () {
// 3. 获取蛇的容器
        this.element = document.querySelector('.snake')!
// 4. 使用类型断言告诉它是HTMLElement元素
        this.snake = document.querySelector('.snake > div') as HTMLElement
// 5. 先获取蛇的容器, 再获取容器里所有元素
        this.body = this.element.getElementsByTagName('div')
    }
// 6. 获取蛇头的X/Y坐标
    get X() {
        return this.snake.offsetLeft
    }
    get Y() {
        return this.snake.offsetTop
    }
// 7. 设置蛇头的X/Y坐标
    set X(value) {
// 01. 判断新值与旧值, 若相同, 则直接返回不再修改
        if (this.X === value) {
            return
        }
// 02. 判断蛇撞墙功能, X值有效范围是(0~290之间), X值超过则视为撞墙
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了~')
        }
// 004. 判断蛇方向不能掉头,修改X是在修改坐标, 蛇左右移动时, 不能向右掉头, 反之亦然
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
// 如果蛇发生了掉头, 让蛇向反方向继续移动
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
// 003. 调用移动身体的方法
        this.Movebody()
        this.snake.style.left = value + 'px'
// 006. 调用检查蛇头是否撞到自己的方法
        this.Hadebody()
    } 
    set Y(value) {
// 01. 判断新值与旧值, 若相同, 则直接返回不再修改
        if (this.Y === value) {
            return
        }
// 02. 判断蛇撞墙功能, Y值有效范围是(0~290之间), Y值超过则视为撞墙
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了~')
        }
// 004. 判断蛇方向不能掉头,修改Y是在修改坐标, 蛇上下移动时, 不能上下掉头, 反之亦然
if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
    // 如果蛇发生了掉头, 让蛇向反方向继续移动
                if (value > this.Y) {
                    value = this.Y - 10
                } else {
                    value = this.Y + 10
                }
            }
// 003. 调用移动身体的方法
        this.Movebody()
        this.snake.style.top = value + 'px'
// 006. 调用检查蛇头是否撞到自己的方法
        this.Hadebody()
    } 
// 8. 设置蛇增加身体长度的方法
    Addbody() {
// 9. 向蛇的容器里添加div, 参数1: 结束之前的位置, 参数2: 创建div结构
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
// 001. 设置蛇身体移动的方法
    Movebody() {
        for (let i = this.body.length - 1; i > 0; i--) {
// 002. 获取前边身体的位置
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }
// 005. 检测蛇头是否撞到身体的方法
    Hadebody() {
// 获取所有身体, 检测是否与蛇头坐标重叠
        for (let i = 1; i < this.body.length; i++) {
            let tb = this.body[i] as HTMLElement
            if (this.X === tb.offsetLeft && this.Y === tb.offsetTop) {
// 进入判断则说明蛇头撞到身体了, 游戏结束!
                throw new Error('撞到自己了, 游戏结束了~')
            }
        }
    }
}

// 10. 导出模块
export default Snake