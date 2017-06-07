### 默认形参值技巧
```
Function.prototype.method=function(name,fn){
  this.prototype[name]=fn;
  return this;
}
function Student(name='Simon') {
  this.name = name;
}
Student.method('logName', function(){
  console.log(this.name);
  return this;
  }).method('alertName', function(){
      alert(this.name);
      return this;
    });
var kelly = new Student('kelly');
var noName = new Student();
noName.logName().alertName();
```
