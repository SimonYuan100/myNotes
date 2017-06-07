### 默认形参值技巧
```
function Student(name='Simon') {
  this.name = name;
  console.log(this.name);
}
Student.prototype.method = function (fnName, fnMain) {
  this.prototype[fnName] = fnMain;
}
var kelly = new Student('kelly');
var noName = new Student();
```
