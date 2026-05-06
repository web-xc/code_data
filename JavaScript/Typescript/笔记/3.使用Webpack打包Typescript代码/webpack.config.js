// 引入绝对路径包
let path = require('path')
// 引入html-webpack-plugin插件
let HTMLwebpack = require('html-webpack-plugin')
// 引入clean-webpack-plugin插件, 让打包文件保持最新状态
let { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack的所有配置信息在module.exports里
module.exports = {
    entry: './src/index.ts',                     // 打包入口文件
    output: {                
        path: path.resolve(__dirname, 'dist'),   // 打包后的文件目录
        filename: 'bundle.js',                   // 打包后的文件名
// 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    mode:'development',                          // 解决标题错误的配置
// 指定webpack打包时要使用的模块
    module: {
// 指定要加载的规则
        rules: [
            {
                test: /\.ts$/,                   // test指定规则生成文件
                use: [
                // 配置babel, 复杂配置
                    {
                // 指定加载器
                        loader: "babel-loader",
                // 设置babel
                        options: {
                // 设置预定义环境
                            presets: [
                                [
                // 指定环境的插件
                                "@babel/preset-env",
                // 配置信息
                                {
                // 要兼容的目标浏览器
                                    targets: {
                                        "chrome": "88",
                                        "ie": "11"
                                    },
                // 指定corejs的版本
                                    "corejs": "3",
                // 使用corejs方式: 'usage' 表示按需加载
                                    "useBuiltIns": "usage"
                                }
                                ]
                            ]
                        }
                    },
                    'ts-loader',         // 使用ts-loader处理.ts文件
                ],                 
                exclude: /node_modules/  // 要排除的文件夹
            }
        ]
    },
// 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLwebpack()
    ],  
// 设置引用模块, 不然打包时会报错
    resolve: {
        extensions: ['.ts', '.js'],
    }
}