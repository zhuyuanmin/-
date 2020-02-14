## javascript中函数声明的区别

### 一、定义
下面分别用两种方法定义函数：

```javascript
//函数声明式
function greeting(){
    console.log("hello world");  
}

//函数表达式
var greeting = function(){
    console.log("hello world"); 
}
```

### 二、区别
+ 1、（1）以函数声明的方法定义的函数,函数名是必须的,而函数表达式的函数名是可选的。
   （2）如果函数表达式声明的函数有函数名,那么这个函数名就相当于这个函数的一个局部变量,只能在函数内部调用。
+ 2、以函数声明的方法定义的函数,函数可以在函数声明之前调用,而函数表达式的函数只能在声明之后调用。（变量提升）
+ 3、以函数声明的语句，所以不能出现在if-else,for循环，finally，try catch语句以及with语句中。JavaScript 引擎会理解成平行关系。
+ 4、以函数表达式的函数便于javascript的内存回收机制自动回收。
