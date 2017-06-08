/*函数声明 和 变量声明 都会被提升，下两个case说明函数优先级高*/

// case 1
console.log(foo); // function foo () {}
var foo = 5;
function foo () {}

// case 2
console.log(foo); // function foo () {}
function foo () {}
var foo = 5;

