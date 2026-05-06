System.register([], function (exports_1, context_1) {
    "use strict";
    var name, box;
    var __moduleName = context_1 && context_1.id;
    // noImplicitThis: 不允许不明确类型的this
    function fn() {
        console.log(this);
    }
    return {
        setters: [],
        execute: function () {
            console.log('你好');
            exports_1("name", name = '张三');
            // strictNullChecks: 严格检查空值
            box = document.querySelector('.box');
            box.addEventListener('click', () => {
                console.log(1);
            });
            // 可以使用if判断解决: if (box !== null) 或者 box?.addEventListener...
        }
    };
});
