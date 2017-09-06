## react 做动画，有三种思路

* 第一种：从 refs 里拿到 dom，走传统 js 动画方案
* 第二种，用 state + forceUpdate+动画算法，比如 react-motion 的做法
* 第三种，就是上面说的在 didUpdate 生命周期里，用 requestAnimationFraome + setState + 边界判断做递归渲染