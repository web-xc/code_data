// 1. 定义记分牌功能的类
class Panel {
// 2. score和level用来记录分数和等级
    score = 0
    level = 1
// 4. 分数和等级所在的元素, 在构造函数中赋值给它们
    scoreEle: HTMLElement
    levelEle: HTMLElement
// 4. 设置一个变量: 限制上限等级
    Maxlevel: number
// 5. 设置一个变量: 设置多少分数升一级, 便于后期设置游戏规则
    Maxscore: number
// 6. Maxlevel/Maxscore如果传参了使用传参值, 没有传则默认值为10(也就是每10分升一级, 上限等级10)
    constructor (Maxlevel: number = 10, Maxscore: number = 10) {
        this.scoreEle = document.querySelector('.score')!
        this.levelEle = document.querySelector('.level')!
        this.Maxlevel = Maxlevel
        this.Maxscore = Maxscore
    }
// 7. 设置加分功能的方法, 以及设置等级升级规则
    addScore() {
// 8. 使分数自增, 加完后清空分数, 为下次分数做铺垫
        this.score++
        this.scoreEle.innerHTML = this.score + ''
// 9. 判断多少分数会升级: 这里每10分升一级, 使用if判断(最后除的余数为0, 就调用升级功能的方法)
        if (this.score % this.Maxscore === 0) {
            this.addLevel()
        }
    }
// 10. 设置等级升级/上限功能的方法, 小于10级才会升级/上限为10, 这里使用if判断(大于10将不会升级)
    addLevel() {
        if (this.level < this.Maxlevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }
}
// 测试代码
// let score = new Panel(100, 2)
// for (let i = 0; i < 200; i++) {
//     score.addScore()
// }

// 11. 导出模块
export default Panel