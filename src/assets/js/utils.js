


export default {
    debounce(fn, delay) {  //防抖
        var timer;
        return function () {
            var args = arguments;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    },
    throttle(fn, delay) {
        // 记录上一次函数触发的时间
        var lastTime = 0;
        return function () {
            // 记录当前函数触发的时间
            var nowTime = Date.now();
            if (nowTime - lastTime > delay) {
                fn.call(this);
                // 同步时间
                lastTime = nowTime;
            }
        }
    },
}
