/*method生成器及链式结构技法*/

Function.prototype.method=function(name,fn){
  this.prototype[name]=fn;
  return this;
}

function Student(name) {
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
kelly.logName().alertName();