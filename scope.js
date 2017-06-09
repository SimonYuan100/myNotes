/*函数声明 和 变量声明 都会被提升，下两个case说明函数优先级高*/

// case 1
console.log(foo); // function foo () {}
var foo = 5;
function foo () {}

// case 2
console.log(foo); // function foo () {}
function foo () {}
var foo = 5;

/*块作用域和闭包结合*/

for(let i=0;i<5;i++){
	setTimeout(function(){
		console.log(i);
	},200)}