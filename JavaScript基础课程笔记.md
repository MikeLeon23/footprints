# JavaScript

## JS-01

### 什么是JavaScript

> JavaScript是一种直译式脚本语言，是一种动态类型、弱类型、
>
> ‘基于原型的语言。

#### JavaScript和ECMAScript的关系

> ECMAScript是一种由ECMA组织制定和发布的脚本语言规范。ECMA牵头制定的JavaScript标准，取名为ECMAScript。

ECMAScript在2015年6月发布了ECMAScript 6 版本（即ES6）

#### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量，表达式，运算符，函数，if语句，for语句等。
- DOM：文档对象模型，操作网页上的元素的API。比如让盒子移动、变色、轮播图等。
- BOM：浏览器对象模型，操作浏览器部分功能的API，比如让浏览器自动滚动。

#### JavaScript的特点

1. 简单易用
2. 解释型语言：事先不需要被编译为机器码再执行，逐行执行，无需进行严格的变量声明。
3. 基于对象：内置大量现成对象，编写少量程序可以完成目标。
4. 面向过程

#### 编程语言的分类

- 解释型语言：边解析边执行，不需要事先编译，例如：JavaScript、PHP
- 编译型语言：事先把所有的代码翻译成计算机能够执行的指令，然后整体执行，例如C、C++

### JavaScript的引入

- 内部。书写在HTML网页内部
  - head标签中的`<script>这里写JS代码</script>`
  - 写在body标签中，建议放到所有书写标签之后`<script>这里写JS代码</script>`
- 外部文件。比如xxx.js，通过标签引入到HTML中
  - head标签中，`<script src="test.js"></script>`
  - 也可以写在body标签中，`<script src="test.js"></script>`

总结：内部和外部引入，可以在head标签中，也可以在body标签中。

注意：注释方式有变，`//`表示注释，快捷键仍是Ctrl+/

JS的输出型语句

- 页面显示信息

  `alert('hello')`	需要点击确定，下面的代码才会接着解释。

  > JS代码是变解释边执行的，从上往下执行

- 控制台显示信息（重点）

  `console.log('你好')`

  通常程序员会借助控制台进行代码的调试和debug

  控制台会告诉你代码的执行情况，如果有错，会显示错误类型和错误在代码第几行

- 用户录入信息

  `prompt('请输入信息');`

### 变量

> 变量就是储存数据的容器，用来表示数据

```js
两种常见的字面量：数字和字符串
console.log(100);	//100是一个数字，就是一个字面量
console.log('你好');	//加引号表示字符串（必须加引号），这是一个字面量。
有的字面量很长，数据很复杂，我们想频繁使用。此时我们可以用变量来代表这个数字，从而简化运算。
```

如何声明变量？

需要借助var这个关键词

```js
var a;	//声明了一个变量a，但是没有指定变量a代表什么
a = 99999;	//赋值操作，把99999赋给a
//简化写法
var a = 99999;
```

#### 变量起名的规则

1. 只能使用英文字母、数字、下划线、$，不能使用特殊符号如*&%￥...
2. 严格区分大小写，a和A不一样
3. 不能以数字开头
4. 不能使用js中的关键字和保留字，比如var, this...
5. 驼峰命名法，从第二个单词开始首字母大写，如firstName
6. 语义化，见名知意

注意事项：

1. 在JavaScript之中，永远都是用var声明变量（ES6之前）
2. 变量必须先声明后使用

区分变量和字面量

`console.log('a');`打印的是字母a，加引号，被当做字符串来解析

`console.log(a);`打印的是变量a代表的数据，不加引号就会被当做变量来解析

#### 变量数据类型

数据分为哪几种？

> 在JS当中数据分为两大类，基本数据类型和引用数据类型

- 基本数据类型，包括五种
  1. 数字
  2. 字符串
  3. 布尔值，true和false，代表真假或者正确和错误
  4. undefined
  5. null
  6. symbol（ES6出现）

变量保存的数据是哪个类型，我们就说这个变量是什么数据类型

```js
var text = '你好';	//text是字符串类型，string类型
var num = 100;	//num是数字类型，number类型
var flag = true;	//flag是一个布尔类型，boolean类型
var a;	//只声明变量但是不赋值，初始值是undefined，所以a此时是一个undefined类型
//null类型表示空，通常用来表示空对象
```

- 引用数据类型（复杂数据类型）
  1. 数组
  2. 对象

```js
var array = [];	//空数组
//中括号里面是数组元素，逗号隔开，每一个元素都可以是任意的数据类型
//但通常数组表示某一类数据的集合，所以里边的数据类型通常是一致的，比如班级同学年龄的数组
var person = {	//花括号表示的就是对象，把实际的事物抽象成对象
    name:'张三',	//key:value这种对象键值对的形式，表示这个对象的属性
    age:24,
    skill:['html','css']
}
```

- 函数

  > 函数是封装好的一段功能代码

```js
function say(){
    console.log('你好')；
}
say();	//当我调用say函数的时候，就会执行say函数里边的代码
```

#### typeof运算符

typeof运算符能检测数据类型

```js
var text = '你好';
var num = 100;
var flag = true;
var a;
var b = null;
var arr = [1,2,3];
var obj = {
    name:'张三';
}
function foo(){}
//检查变量的数据类型：typeof 变量名
console.log(typeof text);	//在控制台直接打印出text变量的数据类型，string
console.log(typeof num);	//number
console.log(typeof flag);	//boolean
console.log(typeof a);		//undefined
console.log(typeof b);		//object 对象
console.log(typeof arr);	//object
console.log(typeof obj);	//object
console.log(typeof foo);	//function
```

### String 字符串

- 字符串需要使用引号引起来，使用双引号或者单引号都可以，但是不能混用

- 一种引号不能嵌套：双引号里不能再放双引号，单引号里面不能再放单引号。但是单引号可以嵌套双引号，双引号也可以嵌套单引号

- 转义字符：
  - `\"` 表示 `"`
  - `\'` 表示 `'`
  - `\n` 表示换行
  - `\r` 表示回车
  - `\t` 表示制表符
  - `\b` 表示空格
  - `\\` 表示`\`

### number 数值类型

数值范围

- 最大值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
- 最小值：`Number.MIN_VALUE`，这个值为： 5e-324

如果使用 Number 表示的变量超过了最大值，则会返回 Infinity。

- 无穷大（正无穷）：Infinity
- 无穷小（负无穷）：-Infinity

注意：`typeof Infinity`的返回结果是 number。

特殊的数字：NaN（not a number)

```js
console.log('abc' / 18);	//结果是NaN
```

> typeof NaN 返回的值是number。

注意：NaN与任何值都不相等，包括与NaN本身

`isNaN()`任何不能被转换为数值的值，都会让这个函数返回 true。可以用用来判断括号内的内容是不是NaN

#### 浮点数运算

在 JS 中，整数的运算**基本**可以保证精确；但是**小数的运算，可能会得到一个不精确的结果**。所以，千万不要使用 JS 进行对精确度要求比较高的运算。

如下：

```javascript
var a = 0.1 + 0.2;
console.log(a); //打印结果：0.30000000000000004
```

### Boolean 布尔值

true 和 false

用来用来判断结果的正确和错误，直接使用，不可加上引号

### undefined 未定义

**声明**了一个变量，但是没有**赋值**（例如：`var a;`），此时它的值就是 undefined（未定义）

- Undefined 类型的值只有一个，就是 undefined
- 使用 type of 检查一个 undefined 时，会返回 undefined。

### null 空值

专门用来表示一个为空的**对象**（例如：`var a = null`）。注意，专门用来表示**空对象**。

- Null 类型的值只有一个，就是 null。比如：`var a = null`。
- 使用 typeof 检查一个 null 值时，会返回 object。

### Object 对象
>  Object 对象是一组由键-值组成的无序集合

- Array 数组是一组按顺序排列的数据的集合，集合的每个值称为元素。

- Function 

这里边,内置对象Function、Array、Date、RegExp、Error等都是属于Object类型

### 变量值的传递

```javascript
a = b;
```

把 b 的值赋给 a，b 不变。

将等号右边的值，赋给左边的变量；等号右边的变量，值不变。

```javascript
var a = 1;
var b = 2;
var c = 3;
a = b + c;
b = c - a;
c = a * b;
console.log(a); // 5
console.log(b); // -2
console.log(c); // -10
```

### 数据类型的转换

```js
console.log('200'/4);	//输出50，这里进行了隐式类型转换
```

#### 其他的简单数据类型 ==> 字符串

方法一：变量+""

```javascript
vat a = 123;  // Number 类型
console.log(a + '');  // 转换成 String 类型
```

方法二：调用 toString()方法

【重要】该方法**不会影响到原变量**，它会将转换的结果返回。当然我们还可以直接写成`a = a.toString()`，这样的话，就是直接修改原变量。

注意：null 和 undefined 这两个值没有 toString()方法，如果调用，会报错。

```js
// 变量.toString()
var a = 255;

//对于Number调用toString()时可以在方法中传递一个整数作为参数
//此时它将会把数字转换为指定的进制,如果不指定则默认转换为10进制
a = a.toString(2);

console.log(a); // 11111111
console.log(typeof a); // string
```

方法三：使用String()函数

格式如下：

```text
String(变量)
```

使用 String()函数做强制类型转换时：

- 对于 Number 和 Boolean 而言，实际上就是调用 toString()方法。
- 但是对于 null 和 undefined，就不会调用 toString()方法。它会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。
- 推荐，隐式转换中用的就是这个规则

**总结：**其他数据类型转换成字符串，对于布尔值和数字，三种方法一致，但是String这个方法可以转换undefined和null

#### 其他的简单数据类型 ==> 布尔值

`Boolean()`函数

- 字符串-->布尔值。除了 0 和 NaN，其余的都是 true。

  ```js
  var a = '你好';
  console.log(Boolean(a));	//输出true
  ```

- 数字-->布尔值。除了空串，其余的都是 true。

- undefined、null-->布尔值。都会转换为 false。

- 对象-->布尔值。对象也会转换为 true。

**总结：**空字符串，0，NaN，undefined，null会被转换成false，其余都是true

#### 其他数据类型 ==> 数字

使用 `Number()`函数（隐式转换采用）

- 字符串 --> 数字
  - 1.如果字符串中是纯数字，则直接将其转换为数字。
  - 2.如果字符串中有非数字的内容，则转换为 NaN。（此处可以看到 Number()函数的局限性）
  - 3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0。

- 布尔 --> 数字
  - true 转成 1
  - false 转成 0

- null --> 数字
  - 结果为：0

- undefined --> 数字
  - 结果为：NaN

#### 隐式类型转换

在 JavaScrit 中存在很多的隐式类型转换，隐式转换采用的其实是以下方式:

```text
转换为number类型: Number()
转换为string类型: String()
转换为boolean类型: Boolean()
```

#### parseInt() 和 parseFloat()

专门用来把字符串转成数字类型

`parseInt()`：字符串 -> 整数【重要】

> parseInt()的作用是将字符串中的有效的整数内容转为数字。parse 表示“转换”，Int 表示“整数”（注意`Int`的拼写）。例如：`parseInt("5");`得到的结果是5.

转换规则：

- 从第一个非空白字符（空格、换行、tab）开始转换，知道遇到第一个非数字字符为止。

```js
console.log(parseInt("2019在公众号上写了6篇文章"));  //打印结果：2019
console.log(parseInt("2019.01在公众号上写了6篇文章"));  //打印结果仍是：2019   （说明只会取整数）
console.log(parseInt("aaa2019.01在公众号上写了6篇文章"));  //打印结果：NaN
```

- 自动带有截断小数的功能：**取整，不四舍五入**。

```javascript
var a = parseInt(5.8) + parseInt(4.7);
console.log(a); //9
var a = parseInt(5.8 + 4.7);
console.log(a); //10
```

- 如果对**非 String**使用 parseInt()或 parseFloat()，它会**先将其转换为 String**然后再操作。

```javascript
var a = true;
console.log(parseInt(a)); //打印结果：NaN （因为是先将a转为字符串"true"，然后然后再操作）

var b = null;
console.log(parseInt(b)); //打印结果：NaN  （因为是先将b转为字符串"null"，然后然后再操作）

var c = undefined;
console.log(parseInt(c)); //打印结果：NaN  （因为是先将b转为字符串"undefined"，然后然后再操作）

var d = 168.23;
console.log(parseInt(d)); //打印结果：168  （因为是先将c转为字符串"168.23"，然后然后再操作）
```

- 带两个参数时，表示进制转换。

`parseFloat()`：字符串 --> 浮点数（小数）

> parseFloat()的作用是：将字符串转换为**浮点数**。parseFloat()和 parseInt()的作用类似，不同的是，parseFloat()可以获得有效的小数部分。

## JS-02

### 算数运算符

加减乘除、取余(%)、括号()

#### 算数运算符的注意事项

- 当对非 Number 类型的值进行运算（包括`+`、`-`、`*`、`/`）时，会将这些值转换为 Number 然后再运算。（注：`字符串 + Number`、`字符串 + 字符串`是特例，稍后再讲）

```javascript
result1 = true + 1; // 2 = 1+ 1
result2 = true + false; // 1 = 1+ 0
result3 = 1 + null; // 1 = 1+ 0
result4 = 100 - "1"; // 99
```

```js
//特殊：加法运算
//如果参与加法运算的没有字符串，就和上边的一致
console.log(100+true);	//101
console.log(100+null);	//100

//如果参与运算的含有字符串，那就是执行拼接字符串
//把其他数据类型转换成字符串，开始拼接
console.log(100+ '100');	//'100'+'100'==>'100100'
```

### 赋值运算符

可以将符号右侧的值赋值给符号左侧的变量。

```js
var b = 100;
b = b + 10;
//这句代码可以简写成
b += 10;	//b+=1等价于b++
```

举例：

- `+=`	a += 5 等价于 a = a + 5
- `-=`	a -= 5 等价于 a = a - 5
- `*=`	a _= 5 等价于 a = a _ 5
- `/=`	a /= 5 等价于 a = a / 5
- `%=`	a %= 5 等价于 a = a % 5

自增 `++`

自增分成两种：`a++`和`++a`。

（1）对于一个变量自增以后，原变量的值会**立即**自增 1。也就是说，无论是 `a++` 还是`++a`，都会立即使原变量的值自增 1。

（2）**我们要注意的是**：`a`是变量，而`a++`和`++a`是**表达式**。

那这两种自增，有啥区别呢？区别是：`a++` 和 `++a`的值不同：（也就是说，表达式的值不同）

- `a++`的值等于原变量的值（a 自增前的值）
- `++a`的值等于新值 （a 自增后的值）

```js
var d = 30;
var num1 = d++;		//++在后，先赋值，后+1
console.log('num1:', num);	//输出30
console.log('d:', d);		//输出31

var e = 30;
var num2 = ++d;		//++在前，先+1，再赋值
console.log('num2:', num2);	//输出31
console.log('e:', e);		//输出31
//通常使用++都是为了自增1效果，所以并不关心++在前还是在后，比如常见的for循环
```

自减 `--` 原理同上。

### 比较运算符

关系运算符有很多种，比如：

```text
>	大于号
<	小于号
>= 	大于或等于
<=  小于或等于
== 	等于
=== 全等于
!=	不等于
!== 不全等于
```

关系运算符，得到的结果都是布尔值：要么是 true，要么是 false。

#### 非数值的比较

- 对于非数值进行比较时，会将其转换为数字然后再比较。

```javascript
console.log(1 > true); //false
console.log(1 >= true); //true
console.log(1 > "0"); //true

console.log(10 > null); //true
console.log(10 < undefined); // false
//任何值和NaN做任何比较都是false

console.log(10 <= "hello"); //false
console.log(true > false); //true
```

- 特殊情况：如果符号两侧的值都是字符串时，**不会**将其转换为数字进行比较。比较两个字符串时，比较的是字符串的**Unicode 编码**。【非常重要，这里是个大坑】

  比较字符编码时，是一位一位进行比较。如果两位一样，则比较下一位，所以借用它可以来对英文进行排序。

PS：所以说，当你尝试去比较`"123"`和`"56"`这两个字符串时，你会发现，字符串"56"竟然比字符串"123"要大。也就是说，下面这样代码的打印结果，其实是 true:（这个我们一定要注意，在日常开发中，很容易忽视）

```javascript
// 比较两个字符串时，比较的是字符串的字符编码，所以可能会得到不可预期的结果
console.log("56" > "123"); // true
```

**因此**：当我们在比较两个字符串型的数字时，**一定一定要先转型**，比如 `parseInt()`。

- 任何值和 NaN 做任何比较都是 false。

#### `==`符号的强调

注意`==`这个符号，它是**判断是否等于**，而不是赋值。

（1）`==`这个符号，还可以验证字符串是否相同。例如：

```text
	console.log("我爱你中国" == "我爱你中国");		//输出结果为true
```

（2）`==`这个符号并不严谨，会将不同类型的东西，**转为相同类型**进行比较（大部分情况下，都是转换为数字）。例如：

```javascript
console.log("6" == 6); // 打印结果：true。这里的字符串"6"会先转换为数字6，然后再进行比较
console.log(true == "1"); // 打印结果：true

console.log(null == 0); // 打印结果：true
```

（3）undefined 衍生自 null，所以这两个值做相等判断时，会返回 true。

```javascript
console.log(undefined == null); //打印结果：true。
```

（4）NaN 不和任何值相等，包括他本身。

```javascript
console.log(NaN == NaN); //false
```

问题：那如果我想判断 b 的值是否为 NaN，该怎么办呢？

答案：可以通过 isNaN()函数来判断一个值是否是 NaN。举例：

```javascript
console.log(isNaN(b)); //false
```

如上方代码所示，如果 b 为 NaN，则返回 true；否则返回 false。

#### `===`全等符号的强调

如果要保证**完全等于**，我们就要用三个等号`===`。**全等不会做类型转换**。例如：

```javascript
console.log("6" === 6); //false
console.log(6 === 6); //true
```

上述内容分析出：

- `==`两个等号，不严谨，"6"和 6 是 true。
- `===`三个等号，严谨，"6"和 6 是 false。

另外还有：**`==`的反面是`!=`，`===`的反面是`!==`。**。例如：

```javascript
console.log(3 != 8); //true
console.log(3 != "3"); //false，因为3=="3"是true，所以反过来就是false。
console.log(3 !== "3"); //true，应为3==="3"是false，所以反过来是true。
```

### 逻辑运算符

逻辑运算符有三个：

- `&&` 与（且）：两个都为真，结果才为真。
- `||` 或：只要有一个是真，结果就是真。
- `!` 非：对一个布尔值进行取反。

**连比的写法：**

来看看逻辑运算符连比的写法。

举例 1：

```javascript
console.log(3 < 2 && 2 < 4);
```

输出结果为 false。

举例 2：（判断一个人的年龄是否在 18~60 岁之间）

```javascript
var a = prompt("请输入您的年龄");
alert(a >= 18 && a <= 65);
```

PS：上面的这个`a>=18 && a<= 65`千万别想当然的写成`18<= a <= 65`，没有这种语法。

**注意事项**

（1）JS 中的`&&`属于**短路**的与，如果第一个值为 false，则不会看第二个值。举例：

```javascript
//第一个值为true，会检查第二个值
true && alert("看我出不出来！！"); // 可以弹出 alert 框

//第一个值为false，不会检查第二个值
false && alert("看我出不出来！！"); // 不会弹出 alert 框
```

（2）JS 中的`||`属于**短路**的或，如果第一个值为 true，则不会看第二个值。举例：

（3）如果对**非布尔值**进行逻辑运算，则会**先将其转换为布尔值**，然后再操作。

```javascript
var a = 10;
a = !a;

console.log(a); // false
console.log(typeof a); // boolean
```

上面的例子，我们可以看到，对非布尔值进行`!`操作之后，返回结果为布尔值。

#### 非布尔值的与或运算【重要】

> **之所以重要，是因为在实际开发中，我们经常用这种代码做容错处理。**

非布尔值进行**与或运算**时，会先将其转换为布尔值，然后再运算，但返回结果是**原值**。比如：

```javascript
var result = 5 && 6; // 运算过程：true && true;
console.log("result：" + result); // 打印结果：6（也就是说最后面的那个值。）
```

上方代码可以看到，虽然运算过程为布尔值的运算，但返回结果是原值。

那么，返回结果是哪个原值呢？

**与运算**的返回结果：（以两个非布尔值的运算为例）

- 如果第一个值为 true，则必然返回第二个值（所以说，如果所有的值都为 true，则返回的是最后一个值）
- 如果第一个值为 false，则直接返回第一个值

**或运算**的返回结果：（以两个非布尔值的运算为例）

- 如果第一个值为 true，则直接返回第一个值
- 如果第一个值为 false，则返回第二个值

总结就是：逻辑运算返回结果不一定是布尔值，整体结果由运算符两边的谁决定，就返回谁。

### JS内置对象

什么是对象？

对象里面有属性（特征）和方法（动态的）

#### Math对象

> math对象是JS的内置对象，Math 属于一个工具类，里面封装了数学运算相关的属性和方法。Math 和其他的对象不同，它不是一个构造函数，不需要创建对象。

| 方法              | 描述                                           | 备注  |
| :---------------- | :--------------------------------------------- | :---- |
| Math.abs()        | 返回绝对值                                     |       |
| Math.floor()      | 向下取整（向小取）                             |       |
| Math.ceil()       | 向上取整（向大取）                             |       |
| Math.round()      | 四舍五入取整（正数四舍五入，**负数五舍六入**） |       |
| Math.random()     | 生成 0-1 之间的随机数                          | [0,1) |
| Math.max(x, y, z) | 返回多个数中的最大值                           |       |
| Math.min(x, y, z) | 返回多个数中的最小值                           |       |
| Math.pow(x,y)     | 返回 x 的 y 次幂                               |       |
| Math.sqrt()       | 对一个数进行开方运算                           |       |

```javascript
// Math.ceil  天花板函数  ,向上取整
console.log(Math.ceil(2.3)); // 3
// 注意负数的使用
console.log(Math.ceil(-2.3)); // -2

// Math.floor()  地板函数  向下取整
console.log(Math.floor(2.9)); // 2

console.log(Math.max(2, 3, 5, 7)); // 7
console.log(Math.min(2, 3, 5, 7)); // 2

// random()  范围 [0,1)
console.log(Math.random());
// 随机 0-99 范围
console.log(Math.floor(Math.random() * 100));
// 随机 5-10 范围
// Math.floor(Math.random()*数量 + min)
console.log(Math.floor(Math.random() * 6 + 5));

console.log(Math.pow(3, 4));
console.log(Math.pow(3, 300000000000000000));

console.log(10 / 0); // Infinity

// Math.round()
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.499999999999999999999999999)); // 3
console.log(2.999999999999999999999999999 === 3);
console.log(Math.round(-2.4)); // -2
console.log(Math.round(-2.5)); // -2 注意！负数五舍六入
```

#### Date对象

> Date对象是一个时间对象，包含了时间的相关信息。它还是一个构造函数（专门用来构造对象）

##### Date 对象的创建

- 表示的是当前代码执行的时间（也可以理解成是获取当前时间对象）

```javascript
var date1 = new Date();	//生成了一个保存当前时间信息的对象
console.log(date1);
```

- 在参数中传递一个表示时间的字符串（兼容性最强）

```javascript
var date2 = new Date("2017/09/06 09:00:00");
console.log(date2);
```

- （不常用）

```javascript
var date3 = new Date("Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)");
console.log(date3);
```

- （不常用）

```javascript
var date4 = new Date(2017, 1, 27); //写法四
console.log(date4);
```

##### 获取日期和时间

Date 对象 有如下方法，可以获取日期和时间：

- `getDate()` 获取日 1-31
- `getDay()` 获取星期 0-6（0 代表周日，1 代表周一）
- `getMonth()`获取月 0-11（0 代表一月）
- `getFullYear()` 获取年份
- `getHours()` 获取小时 0-23
- `getMinutes()` 获取分钟 0-59
- `getSeconds()` 获取秒 0-59
- `getMilliseconds()` 获取毫秒 （1s = 1000ms）

##### getTime()：获取时间戳

Date 对象 还有如下方法：

- `getTime()` 获取当前日期对象的**时间戳**。这个方法在实际开发中，用得比较多。

什么是时间戳？

> **时间戳**：指的是从格林威治标准时间的`1970年1月1日，0时0分0秒`到当前日期所花费的**毫秒数**（1 秒 = 1000 毫秒）。

计算机底层在保存时间时，使用的都是时间戳。时间戳的存在，就是为了**统一**时间的单位。

**利用时间戳检测代码的执行时间**：

我们可以在业务代码的前面定义 `时间戳1`，在业务代码的后面定义 `时间戳2`。把这两个时间戳相减，就能得出业务代码的执行时间。

## JS-03

### 流程控制语句

#### if语句

- 条件判断语句

> 条件成立才执行。如果条件不成立，那就什么都不做。

```javascript
if (条件表达式) {
	// 条件为真时，做的事情
}
```

注意：if后面的括号里的表达式，会隐式转换成布尔值，然后进行判断

- 条件分支语句

格式 1：

```javascript
if (条件表达式) {
	// 条件为真时，做的事情
} else {
	// 条件为假时，做的事情
}
```

格式 2：（多分支的 if 语句）

```javascript
if (条件表达式1) {
	// 条件1为真时，做的事情
} else if (条件表达式2) {
	// 条件1不满足，条件2满足时，做的事情
} else if (条件表达式3) {
	// 条件1、2不满足，条件3满足时，做的事情
} else {
	// 条件1、2、3都不满足时，做的事情
}
```

#### 三元运算符

```text
语法：
表达式?如果表达式结果为 true 执行这里的代码:如果表达式结果为 false 执行冒号后面的代码;
```

```javascript
5 > 3 ? "5大于3" : "5不大于3";
// 返回'5大于3'
var count = 30;
var price = count > 20 ? 6 : 7;
console.log(price);

// 可以理解为 if else 的另一种写法
```

#### 代码调试

- 首先将程序执行完成后，点击 f12
- 设置断点
- 运行程序，刷新页面
- 程序一步一步执行 - 通过 f10 快键键或者点击
- 监视变量变化 - 直接将鼠标放到变量名上即可显示 - 方式二通过 watch 窗口监事 - 直接选择变量名，点击鼠标右键选择 add watch 添加监事

通过断点调试，我们能准确的知道程序的执行流程，代码的走向，和变量的变化过程

#### switch语句（条件分支语句）

格式：

```javascript
switch(表达式) {
    case 值1：
        语句体1;
        break;
    case 值2：
        语句体2;
        break;
    ...
    ...
    default：
        语句体 n+1;
        break;
}
```

备注 1：当所有的比较结果都为 false 时，则只执行 default 里的语句。

备注 2：break 可以省略，但一般不建议。否则结果可能不是你想要的

#### for循环

语法：

```text
for(初始化表达式; 条件表达式; 更新表达式){
    语句...
}
```

for循环嵌套

```js
//for循环嵌套时，循环变量不能重复
for(var i = 0; i <= 3; i++){
    for(var j = 1; j <= 5; j++){
        console.log(i, j);
    }
}
```

**九九乘法表**

```js
for(var i = 1; i <= 9; i++){
    var str = '';
    for(var j = 1; j <= i; j++){
        str = str + i + 'x' + j + '=' + i*j + ' ';
    }
    console.log(str);
}
```

输出结果：

```text
1x1=1 
2x1=2 2x2=4 
3x1=3 3x2=6 3x3=9 
4x1=4 4x2=8 4x3=12 4x4=16 
5x1=5 5x2=10 5x3=15 5x4=20 5x5=25 
6x1=6 6x2=12 6x3=18 6x4=24 6x5=30 6x6=36 
7x1=7 7x2=14 7x3=21 7x4=28 7x5=35 7x6=42 7x7=49 
8x1=8 8x2=16 8x3=24 8x4=32 8x5=40 8x6=48 8x7=56 8x8=64 
9x1=9 9x2=18 9x3=27 9x4=36 9x5=45 9x6=54 9x7=63 9x8=72 9x9=81 
```

#### while循环

语法：

```javascript
while(条件表达式){
	语句...
}
```

**如果有必要的话，我们可以使用 break 来终止循环**。

#### do...while循环

语法：

```javascript
	do{
		语句...
	}while(条件表达式)
```

while循环和do...while循环的区别：

> 这两个语句的功能类似，不同的是，while 是先判断后执行，而 do...while 是先执行后判断。也就是说，do...while 可以保证循环体至少执行一次，而 while 不能。

#### break和continue

- break
  - break 可以用来退出 switch 语句或**整个**循环语句（循环语句包括 for、while）。
  - break 会立即终止离它**最近**的那个循环语句。
- continue
  - continue 可以用来跳过**当次**循环。
  - 同样，continue 默认只会离他**最近**的循环起作用。

## JS-04

### 数组

#### 数组简介

数组（Array）是属于**内置对象**，我们可以在[MDN](https://developer.mozilla.org/zh-CN/)网站上查询各种方法。

数组和普通对象的功能类似，也是用来存储一些值的。不同的是：

- 普通对象是使用字符串作为属性名的，而数组是使用数字来作为**索引**来操作元素。索引：从 0 开始的整数就是索引。

- 数组的存储性能比普通对象要好。在实际开发中我们经常使用数组来存储一些数据，使用频率非常高。

> 数组的元素可以是任意的数据类型，也可以是对象，也可以是函数，也可以是数组。数组的元素中，如果存放的是数组，我们就称这种数组为二维数组。

#### 创建数组对象

**方式一**：字面量定义。举例：

```javascript
var arr = [1, 2, 3];
```

**方式二**：对象定义（数组的构造函数）。

```javascript
var arr = new Array();
```

如果**参数为空**，则表示创建一个空数组；参数位置是**一个数值**时，表示数组长度；参数位置是**多个数值**时，表示数组中的元素。

#### 获取数组长度

可以使用`length`属性来获取数组的长度(元素的个数)。

```javascript
数组的长度 = 数组名.length；
```

代码举例：

```javascript
var arr = [21, 22, 23];

console.log(arr.length); // 打印结果：3
```

补充：

对于连续的数组，使用 length 可以获取到数组的长度（元素的个数）；对于非连续的数组，使用 length 会获取到数组的最大的索引+1。因此，尽量不要创建非连续的数组。

#### 修改数组的长度

- 如果修改的 length 大于原长度，则多出部分会空出来，置为 null。
- 如果修改的 length 小于原长度，则多出的元素会被删除，数组将从后面删除元素。

代码举例：

```javascript
var arr1 = [11, 12, 13];
var arr2 = [21, 22, 23];

// 修改数组 arr1 的 length
arr1.length = 1;
console.log(arr1);

// 修改数组 arr2 的 length
arr2.length = 5;
console.log(arr2);
```

打印结果：

```javascript
[11][(21, 22, 23, null, null)];
```

#### 获取数组中的元素

```javascript
数组[索引];
```

数组的索引代表的是数组中的元素在数组中的位置，从 0 开始。

如果读取不存在的索引（比如元素没那么多），系统不会报错，而是返回 undefined。

代码举例：

```javascript
var arr = [21, 22, 23];

console.log(arr[0]); // 打印结果：21
console.log(arr[5]); // 打印结果：undefined
```
#### 修改数组元素

```javascript
数组[索引] = 值;
```
代码举例：
```js
var arr =[2,4,6,8,10];
//修改索引为3的元素
arr[3] = 99;
```

#### 向数组中添加元素

```javascript
数组[索引] = 值;
```

代码举例：

```javascript
var arr1 = [];

// 向数组中添加元素
arr[0] = 10;
arr[1] = 33;
arr[2] = 22;
arr[3] = 44;
//跳过索引4，直接添加索引5的元素
arr[5] = 55;	//此时数组索引为4的元素为空，这是一个非连续的数组
```

#### 遍历数组元素

```javascript
var arr = ["张三", "john", "李四", "王五"];
// 1. for循环
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
// 2. for in
for (var key in arr) {
	console.log(arr[key]);
}
```

### 数组的基本方法

#### push()

`push()`：向数组的**最后面**插入一个或多个元素，返回结果为**该数组新的长度**。

语法：

```javascript
数组.push(元素);
```

代码举例：

```javascript
var arr = ["王一", "王二", "王三"];

var result1 = arr.push("王四"); // 末尾插入一个元素
var result2 = arr.push("王五", "王六"); // 末尾插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(arr); // 打印结果：["王一","王二","王三","王四","王五","王六"]
```

#### unshift()

`unshift()`：在数组**最前面**插入一个或多个元素，返回结果为**该数组新的长度**。插入元素后，其他元素的索引会依次调整。

语法：

```javascript
数组.unshift(元素);
```

代码举例：

```javascript
var arr = ["王一", "王二", "王三"];

var result1 = arr.unshift("王四"); // 最前面插入一个元素
var result2 = arr.unshift("王五", "王六"); // 最前面插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(arr); // 打印结果：["王五","王六","王四","王一","王二","王三"]
```

#### pop()

`pop()`：删除数组中的**最后一个**元素，返回结果为**被删除的元素**。

语法：

```javascript
数组.pop();
```

代码举例：

```javascript
var arr = ["王一", "王二", "王三"];

var result1 = arr.pop();

console.log(result1); // 打印结果：王三
console.log(arr); // 打印结果：["王一","王二"]
```

#### shift()

`shift()`：删除数组中的**第一个**元素，返回结果为**被删除的元素**。

语法：

```javascript
数组.shift();
```

代码举例：

```javascript
var arr = ["王一", "王二", "王三"];

var result1 = arr.shift();

console.log(result1); // 打印结果：王一
console.log(arr); // 打印结果：["王二","王三"]
```

#### concat()

`concat()`：连接两个或多个数组，返回结果为**新的数组**（不会改变原数组）。是英文concatenate（级联）的简写。

语法：

```javascript
新数组 = 数组1.concat(数组2, 数组3 ...);
```

代码举例：

```javascript
var nameArr1 = ["张三", "李四"];
var nameArr2 = ["王五", "赵六"];
var nameArr = nameArr1.concat(nameArr2);
console.log(nameArr); // ['张三','李四','王五','赵六']
console.log(nameArr1); // ['张三','李四']
console.log(nameArr2); // ['王五','赵六']
// 并未改变原数组，所以我要用一个新数组nameArr去接收合并后的数组，以便后续使用。
```

#### join()

`join()`：将数组转换为字符串，返回结果为**转换后的字符串**（不会改变原来的数组）。

补充：`join()`方法可以指定一个**字符串**作为参数，这个字符串将会成为数组中元素的**连接符**；如果不指定连接符，则默认使用 `,` 作为连接符，此时和 `toString()`的效果是一样的。

语法：

```javascript
新的字符串 = 原数组.join(参数); // 参数选填
```

代码举例：

```javascript
var arr = [1, 2, 3];
var arrStr = arr.join("-");
console.log(arrStr); // 1-2-3
console.log(arr); // [1,2,3]
// 并未改变原数组
```

#### split()

`split()`：通过指定分隔符，如果省略，默认以逗号分隔，将字符串分割为字符串数组。

语法：

```javascript
新数组 = 原字符串.split(分隔符, 数组长度);
```

第二个参数，制定返回数组的最大长度。

代码举例：

```javascript
var email = "abc@163.com;cc@126.com;frg@qq.com";
var emailArr = email.split(";");
console.log(emailArr); // ["abc@163.com", "cc@126.com", "frg@qq.com"]
var emailArr2 = email.split(";", 2);
var emailArr = email.split(";"); // ["abc@163.com", "cc@126.com"]
```

## JS-05

### 函数

函数：就是将一些功能或语句进行**封装**，在需要的时候，通过**调用**的形式，执行这些语句。

- **函数也是一个对象**
- 使用`typeof`检查一个函数对象时，会返回 function

**函数的作用**：

- 将大量重复的语句写在函数里，以后需要这些语句的时候，可以直接调用函数，避免重复劳动。
- 简化编程，让编程模块化。

```javascript
console.log("你好");
sayHello(); // 调用函数

// 定义函数
function sayHello() {
	console.log("欢迎");
	console.log("welcome");
}
```

#### 函数的定义

**方式一**：使用`函数声明`来创建一个函数。语法：

```javascript
	function 函数名([形参1,形参2...形参N]){  // 备注：语法中的中括号，表示“可选”
		语句...
	}
```

举例：

```javascript
function sum(a, b) {
	return a + b;
}
```

解释如下：

- function：是一个关键字。中文是“函数”、“功能”。
- 函数名字：命名规定和变量的命名规定一样。只能是字母、数字、下划线、美元符号，不能以数字开头。
- 参数：可选。
- 大括号里面，是这个函数的语句。

**方式二**：使用`函数表达式`来创建一个函数。语法：

```javascript
	var 函数名  = function([形参1,形参2...形参N]){
		语句....
	}
```

举例：

```javascript
var fun3 = function() {
	console.log("我是匿名函数中封装的代码");
};
```

从方式二的举例中可以看出：所谓的“函数表达式”，其实就是将匿名函数赋值给一个变量。

当然，我们还有方式三：使用构造函数来创建一个对象。这种方式，用的少。

#### 函数的调用

函数调用的语法：

```javascript
函数名字();
```

#### 立即执行函数

现有匿名函数如下：

```javascript
	function(a, b) {
		console.log("a = " + a);
		console.log("b = " + b);
	};
```

立即执行函数如下：

```javascript
;(function(a, b) {
	console.log("a = " + a);
	console.log("b = " + b);
})(123, 456);
```

立即执行函数：函数定义完，立即被调用，这种函数叫做立即执行函数。

立即执行函数往往只会执行一次。为什么呢？因为没有变量保存它，执行完了之后，就找不到它了。

注意！在写立即执行函数的时候，一般会在前面加一个`;`为了防止之前代码没加分号导致出错，如果代码规范，每个语句后面都有分号，就不用写这个分号。

#### 函数的参数：形参和实参

函数的参数包括形参和实参。

**形参：**

- 可以在函数的`()`中来指定一个或多个形参。
- 多个形参之间使用`,`隔开，声明形参就相当于在函数内部声明了对应的变量，但是并不赋值。

**实参**：

- 在调用函数时，可以在  `()`中指定实参。
- 实参将会赋值给函数中对应的形参。

**实参的类型：**

函数的实参可以是任意的数据类型。

调用函数时解析器不会检查实参的类型，所以要注意，是否有可能会接收到非法的参数，如果有可能则需要对参数进行类型的检查。

**实参的数量：**

调用函数时，解析器也不会检查实参的数量：

- 实参数量多于形参，多余实参不会被赋值
- 实参数量少于形参，则没有对应实参的形参将是 undefined。

```js
function sum(a, b) {
    console.log('a=' + a);
    console.log('b=' + b);
	console.log(a + b);
}
sum(6);
//会输入：
//a = 6
//b = undefined
//NaN
```

#### 函数的返回值

```javascript
console.log(sum(3, 4));

//函数：求和
function sum(a, b) {
	return a + b;
}
```

return 的作用是结束方法。

注意：

- return 后的值将会作为函数的执行结果返回，可以定义一个变量，来接收该结果。
- 在函数中 return 后的语句都不会执行（函数在执行完 return 语句之后停止并立即退出）
- 如果 return 语句后不跟任何值，就相当于返回一个 undefined
- 如果函数中不写 return，则也会返回 undefined
- 返回值可以是任意的数据类型，可以是对象，也可以是函数。

#### fn()和fn的区别

- `fn()`：调用函数。相当于获取了函数的返回值。
- `fn`：函数对象。相当于直接获取了函数对象。

### 作用域（Scope）的概念

作用域指一个变量的作用范围。在 js 中，一共有两种作用域：

- 全局作用域
- 函数作用域

相应的，有两种变量：

- 全局变量：在全局作用域下定义的变量，在页面中的任何位置都可以使用
- 局部变量：在函数内部创建的变量，只能在这个函数体内部使用

#### 全局作用域

直接编写在 script 标签中的 JS 代码，都在全局作用域。

- 全局作用域在页面打开时创建，在页面关闭时销毁。
- 在全局作用域中有一个全局对象 window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用。

在全局作用域中：

- 创建的**变量**都会作为 window 对象的属性保存。
- 创建的**函数**都会作为 window 对象的方法保存。

全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问的到。

#### 函数作用域

- 在函数体内部的 声明的变量
- 如果一个变量在函数体内部声明，则该变量的作用域为整个函数体，在函数体外不可引用该变量。

```javascript
var y = 10; // 全局变量
function foo() {
	var x = 1; //局部变量
	x = x + 1;
	console.log(y); // 10
}
foo();
console.log(x); // 报错
// 也就是说,函数体内部声明的,在函数体外部是不能使用的。
// 在全局作用域下声明的全局变量，可以在页面任意部分访问得到。
```

#### 作用域的上下级关系

当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（**就近原则**）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错 ReferenceError。

```javascript
function foo() {
	var x = 1;
	function bar() {
		var y = x + 1; // bar可以访问foo的变量x!
		var z = 100;
	}
	var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
	function ins() {
		x++; // ins 可以访问foo的变量x
		y++; // 不可以访问 bar的变量y
		var z = 1000;
	}
	// 注意 bar 和 ins 中声明的 变量z 是相互独立的,互不影响
}
```

在函数中要访问全局变量可以使用 window 对象。（比如说，全局作用域和函数作用域都定义了变量 a，如果想访问全局变量，可以使用`window.a`）

同一个网页中，引入的多个JS文件，以及`<script></script>`中的代码，共用同一个作用域

### 变量和声明提升

**变量声明提升:**

1. 使用 var 关键字声明的变量（ 比如 var a = 1），会在所有的代码执行之前被声明（但是不会赋值）
2. 但是如果声明变量时不是用 var 关键字（比如直接写 a = 1），则变量不会被声明提前。

```javascript
console.log(a); // 打印 undefined ,说明a已经被声明了,只是没有赋值
var a = 10;

console.log(b); // b is not defined  没有生命提升
b = 2; // 此时 b 相当于 window.b (全局变量)
console.log(b); // 2
```

以上代码相当于：

```javascript
var a;
console.log(a);
a = 10;

console.log(b);
b = 2;
console.log(b);
```

**函数声明提升:**

1. 使用函数声明的形式创建的函数 function foo(){}，会被声明提前。也就是说，整个函数会在所有的代码执行之前就被创建完成，所以我们可以在函数声明之前，调用函数。
2. 使用函数表达式创建的函数 var foo = function(){}，不会被声明提前，所以不能在声明前调用。很好理解，因为此时 foo 被声明了，且为 undefined，并没有把 function(){} 赋值给 foo。

```javascript
foo(); //执行
bar(); //报错 此时  bar 为undefined
function foo() {
	console.log("我是foo函数");
}
var bar = function() {
	console.log("我是bar函数");
};
```

**在函数作用域也有声明提前的特性：**

1. 使用 var 关键字声明的变量，会在函数中所有的代码执行之前被声明。
2. 函数声明也会在函数中所有的代码执行之前执行。
3. 在函数中，没有 var 声明的变量都是全局变量，而且并不会提前声明。

#### 参数的数据类型

**基本数据类型作为参数**

基本数据类型作为参数传递，函数内部会创建该数据的副本，一切修改不会影响传进来的数据本身。

```javascript
var num = 2；
function ins (x) {
	x++;
}
// 调用ins方法
ins(num);
console.log(num); // 2
```

**复杂数据类型作为参数**

复杂数据类型作为参数传递,在函数内部对该参数的修改，会直接影响到函数外部的该参数，因为本质上他们是同一个对象。

```javascript
function add(arr, n) {
	arr.push(n);
}
var arr = [2, 3];
// 调用add方法
add(arr, 4);
console.log(arr); // [2,3,4]
```

#### 栈内存和堆内存

我们首先记住一句话：JS 中，所有的**变量**都是保存在**栈内存**中的。

然后来看看下面的区别。

**基本数据类型**：

基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。

**引用数据类型**：

对象是保存到堆内存中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而**变量保存了对象的内存地址**（对象的引用）。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。



## JS-06

### 递归

递归是一种编程模式，用于一个任务可以被分割为多个相似的更简单的任务的场景。

当一个函数解决一个任务时，在该过程中它可以调用很多其它函数。那么当一个函数调用**自身**时，就称其为**递归**。

#### 两种思考方式

简单起见，我们写一个函数 `pow(x, n)`，它可以计算 `x` 的 `n` 次方，即用 `x` 乘以自身 `n` 次。

```js
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
```

有两种实现方式。

1. 迭代思路：`for` 循环：

   ```js
   function pow(x, n) {
   	let result = 1;
   
   	// 在循环中用 x 乘以 result
   	for (let i = 0; i < n; i++) {
   		result *= x;
   	}
   
   	return result;
   }
   
   alert(pow(2, 3)); // 8
   ```

2. 递归思路：简化任务，调用自身：

   ```js
   function pow(x, n) {
   	if (n == 1) {
   		return x;
   	} else {
   		return x * pow(x, n - 1);
   	}
   }
   
   alert(pow(2, 3)); // 8
   ```

注意递归方式完全不相同。

当 `pow(x, n)` 被调用时，执行分为两个分支：

```js
              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
```

1. 如果 `n == 1`，所有事情都会很简单，这叫做递归的**基础**(跳出条件)，因为它立即得到显而易见的结果：`pow(x, 1)` 等于 `x`。
2. 否则，我们可以用 `x * pow(x, n - 1)` 表示 `pow(x, n)`。在数学里，可能会这么写 `xn = x * xn-1`。这叫做**一个递归步骤**：我们将任务转变为更简单的行为（`x` 的乘法）和更简单的同类任务调用（更小的 `n` 给 `pow`）。后面步骤继续简化直到 `n` 等于 `1`。

我们也可以说 `pow` **递归的调用自身** 直到 `n == 1`。

比如，为了计算 `pow(2, 4)`，递归变体经过了下面几个步骤：

1. `pow(2, 4) = 2 * pow(2, 3)`
2. `pow(2, 3) = 2 * pow(2, 2)`
3. `pow(2, 2) = 2 * pow(2, 1)`
4. `pow(2, 1) = 2`

所以，递归生成了更简单的函数调用，然后 —— 更加简单，继续，直到结果变得很明显。

" extra-class">

~~~text
递归解决方案一般比迭代更简洁。

这里我们可以使用三元运算符 `?` 来替换 `if` 语句，从而让 `pow(x, n)` 更简洁并且可读性依然很高：

```js run
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}
```
~~~

最大的嵌套调用次数（包括首次）称为**递归深度**。在我们的例子中，它正好等于 `n`。

最大递归深度受限于 JavaScript 引擎。我们可以确信基本是 10000，有些引擎可能允许更大，但是 100000 很可能就超过了限制。有一些自动优化能够缓解这个（「尾部调用优化」），但是它们还没有被完全支持，只能用于简单场景。

这就限制了递归的应用，但是递归仍然被广泛使用。有很多任务使用递归思路会让代码更简单，更容易维护。

### 排序算法

> 在生活中，我们离不开排序。例如体育课上按身高排的队；又如考试过后按成绩排的名次。在编程中也是如此，例如当开发一个学生管理系统，需要按照学好从小到大进行排序；开发一个平台，需要把同类商品按价格从高到低排序。（当然，一般前端不负责处理业务逻辑。）由此可见，排序无处不在。排序看似简单，但是背后却隐藏了多种多样的算法与思想。

> 一个算法的好坏是通过 时间复杂度 与 空间复杂度 来衡量的。简单来说，时间复杂度 就是执行算法的 时间成本 ，空间复杂度 则是执行算法的 空间成本 。

#### 稳定性

稳定：如果 a 原本在 b 前面，而 a=b，排序之后 a 仍然在 b 的前面

不稳定：如果 a 原本在 b 的前面，而 a=b，排序之后 a 可能会出现在 b 的后面

#### 复杂度

时间复杂度 与 空间复杂度 都是用 “大 O” 来表示，写作 O(*)。有一点值得注意的是，我们谈论复杂度，一般谈论的都是时间复杂度。

常见时间复杂度的 “大 O 表示法” 描述有以下几种：

| 时间复杂度       | 非正式术语 |
| ---------------- | ---------- |
| O(1)             | 常数阶     |
| O(n)             | 线性阶     |
| O(n2)            | 平方阶     |
| O(log n)         | 对数阶     |
| O(n log n)       | 线性对数阶 |
| O(n3)            | 立方阶     |
| O(2<sup>n</sup>) | 指数阶     |

一个算法在 N 规模下所消耗的时间消耗从小到大如下：

O(1) < O(log n) < O(n) < O(n log n) < O(n2) < O(n3) < O(2<sup>n</sup>)

### 常见数组排序方法

#### 冒泡排序

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
5. 之所以叫冒泡排序，每一轮两两比较之后，都会冒出一个本轮最大的数，将其移动到本轮尾部。

![img](https://user-gold-cdn.xitu.io/2019/7/2/16bb2880dc1ebaac?imageslim)

```javascript
// 需要几个轮次 6个数排序 最大需要5轮
// 外层循环控制轮次
for (var i = 1; i < arr.length; i++) {
	for (var j = 0; j < arr.length - i; j++) {
		// 经过这样for循环,我们能找到本轮最大的数,并排在本轮尾部
		if (arr[j] > arr[j + 1]) {
			// 交换位置
			var temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
}
console.log(arr); // [1, 5, 12, 32, 40, 41]
```

#### 选择排序

选择排序是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。

![img](https://user-gold-cdn.xitu.io/2019/7/8/16bcf4425ac4d235?imageslim)

```javascript
for (var i = 0; i < arr.length; i++) {
	var minIndex = i;
	for (var j = i + 1; j < arr.length; j++) {
		if (arr[minIndex] > arr[j]) {
			minIndex = j;
		}
	}
	if (minIndex !== i) {
		// 交换位置
		var temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
}
console.log(arr);
```

#### 插入排序

它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

插入排序的算法步骤如下：

- 从第一个元素开始，该元素可以认为已经被排序；
- 取出下一个元素，在已经排序的元素序列中从后向前扫描；
- 如果该元素（已排序）大于新元素，将该元素移到下一位置；
- 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
- 将新元素插入到该位置后；
- 重复步骤 2~5。

![img](https://user-gold-cdn.xitu.io/2019/7/8/16bcf447e9291320?imageslim)

```javascript
for (var i = 1; i < arr.length; i++) {
	var j = i;
	var num = arr[j];
	while (j > 0 && arr[j - 1] > num) {
		arr[j] = arr[j - 1];
		j--;
	}
	arr[j] = num;
}
```

### 对象初识

#### 对象简介

> 对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法。

对象的作用是：封装信息**。比如 Student 类里可以封装学生的姓名、年龄、成绩等。

对象具有**特征**（属性）和**行为**（方法）。

面向对象的特征：封装、继承、多态。

**对象**：

只要不是那五种基本数据类型，就全都是对象。

如果使用基本数据类型的数据，我们所创建的变量都是独立，不能成为一个整体。

对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。

对象是保存到**堆内存**中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间。变量保存的是对象的内存地址（对象的引用）。

换而言之，对象的值是保存在**堆内存**中的，而对象的引用（即变量）是保存在**栈内存**中的。

如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响。

例如：

```javascript
var obj = new Object();
obj.name = "张三";
var obj2 = obj;

//修改obj的name属性
obj.name = "王五";
```

上面的代码中，当我修改 obj 的 name 属性后，会发现，obj2 的 name 属性也会被修改。因为 obj 和 obj2 指向的是堆内存中的同一个地址。

#### 对象的分类

1.内置对象：

- 由 ES 标准中定义的对象，在任何的 ES 的实现中都可以使用

- 比如：Math、String、Number、Boolean、Function、Object....

2.宿主对象：

- 由 JS 的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。

- 比如 BOM DOM。比如`console`、`document`。

3.自定义对象：

- 由开发人员自己创建的对象

#### 创建对象

方法一:

使用 new 关键字调用的函数，是构造函数 constructor。**构造函数是专门用来创建对象的函数**。

```javascript
var obj = new Object();
```

另外，使用`typeof`检查一个对象时，会返回`object`。

方法二:

使用对象字面量来创建一个对象：

```javascript
var obj = {};
```

使用对象字面量，可以在创建对象时，直接指定对象中的属性。语法：{属性名:属性值,属性名:属性值....}

例如：

```javascript
var obj2 = {
	name: "张三",
	age: 26,
	sex: "男",
	children: {
		name: "小明",
	},
	//我们还可以在对象中增加一个方法。以后可以通过obj2.sayName()的方式调用这个方法
	sayName: function() {
		console.log("smyhvae");
	},
};
```

对象字面量的属性名可以加引号也可以不加，建议不加。如果要使用一些特殊的名字，则必须加引号。

属性名和属性值是一组一组的键值对结构，键和值之间使用`:`连接，多个值对之间使用`,`隔开。如果一个属性之后没有其他的属性了，就不要写`,`  因为它是对象的最后一个属性。

#### 向对象中添加属性

```javascript
对象.属性名 = 属性值;
```

举例：

```javascript
var obj = new Object();
//向obj中添加一个name属性
obj.name = "张三";
//向obj中添加一个sex属性
obj.sex = "男";
//向obj中添加一个age属性
obj.age = 18;
console.log(obj);
```

打印结果：

```text
{
    "name":"孙悟空",
    "gender":"男",
    "age":18
}
```

#### 获取对象中的属性

```javascript
对象.属性名;
```

如果获取对象中没有的属性，不会报错而是返回`undefined`。

举例：

```javascript
var obj = new Object();

//向obj中添加一个name属性
obj.name = "张三";

//向obj中添加一个sex属性
obj.gender = "男";

//向obj中添加一个age属性
obj.age = 18;

// 获取对象中的属性，并打印出来
console.log(obj.sex); // 打印结果：男
console.log(obj.color); // 打印结果：undefined
```

#### 修改对象的属性值

```javascript
对象.属性名 = 新值;
obj.name = "tom";
```

#### 删除对象的属性

```javascript
delete obj.name;
```

#### 遍历对象中的属性：for in

```javascript
for (var key in user) {
	//xx.xx 这种形式 只能取原来具有的属性
	//非常重要! xx.abc  abc是变量,就必须通过  xx[abc] 形式取值
	console.log("属性" + key + "==>" + user[key]);
}
//对象中有几个属性，循环体就会执行几次。每次执行时，会将对象中的每个属性的属性名赋值给变量。
```

注意：for in遍历的时候，必须使用`obj[key]`来获取属性，不能使用`obj.key`获取。因为`[]`里的内容会当做变量解析，而`obj.key`表示的是`obj`的`key`属性（变量中不存在key属性），不会当做变量解析。

#### 构造函数创建对象

- 构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯上**首字母大写**。
- 构造函数和普通函数的区别就是**调用方式**的不同：普通函数是直接调用，而构造函数需要使用 new 关键字来调用。
- **this 的指向也有所不同**：
  - 1.以函数的形式调用时，this 永远都是 window。比如`fun();`相当于`window.fun();`
  - 2.以方法的形式调用时，this 是调用方法的那个对象
  - 3.以构造函数的形式调用时，this 是 new 出来的那个对象

#### new到底做了什么

- 开辟内存空间，存储新创建的空对象
- 将新建的对象设置为构造函数中的 this，在构造函数中可以使用 this 来引用 新建的对象
- 执行函数中的代码（包括设置对象属性和方法等）
- 将新建的对象作为返回值返回

因为 this 指的是 new 一个 Object 之后的对象实例。

```javascript
// 在js中 所有的对象都是函数 所有的函数也可以称为"对象"
// 此时 这个Human为手动创建的自定义构造函数对象
// 在js中 this的指向在调用前是不确定的.
// 面试: 构造函数对象的this指向new出来的实例对象
function Human() {
	this.name = "张三";
	this.age = 20;
	this.say = function() {
		alert(this.name + "的年龄为:" + this.age);
	};
}
// zs为通过Human创建的一个实例对象
var zs = new Human();
// 通过zs的实例对象调用的属性 和方法
alert("手动弹出name==>" + zs.name);
zs.say();

// var date = new Date();
// date.getFullYear()

// 如果不通过new实例对象,那么this指向调用者!!!
//全局声明的变量和函数，挂载在window对象上，使用时会省略window
window.Human();
```

#### this指向谁

1. 指向调用者，问题的关键就是找准调用者
2. 构造函数中的this，指向new出来的实例对象
3. 可以通过apply, bind, call...这些方法强行修改this的指向
4. 箭头函数中的this

注意：

- this不执行的时候，不知道指向谁
- 回调函数（函数作为参数的函数）中慎用this，因为this的指向可能会变

#### Json对象

> JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串

```javascript
var obj = { a: "Hello", b: "World" };
//这是一个对象，注意键名也是可以使用引号包裹的
var json = '{"a": "Hello", "b": "World"}';
//这是一个 JSON 字符串，本质是一个字符串
// 对象类型是不能通过网络进行传输的,只能是文本形式
var movie = {
	title: "我不是药神",
	casts: [
		{
			name: "徐峥",
			avatar: "http://xxxx.jpg",
			age: 45,
		},
		{
			name: "黄渤",
			avatar: "http://xxxx2.jpg",
			age: 42,
		},
	],
	pubDate: "2017-10-1",
	rate: 5,
};
console.log(movie);
// 1. 通过JSON.stringify(jsonObj) ==> 可以把对象转换为Json字符串
var jsonStr = JSON.stringify(movie);
console.log(jsonStr);
// 2. 通过JSON.parse把json字符串转换为对象
var movieStr = '{"name":"张三","age":20}';
var movieObj = JSON.parse(movieStr);
console.log(movieObj);
//转换为对象之后，即可通过.的形式调用属性的值
console.log(movieObj.name);

// 对象和json类型的对象都可以通过 JSON.stringify() 转换为字符串,
// 但是如果希望字符串转换json对象 必须是json字符串
var user = {
	name: "张三",
	age: 20,
};
var userStr = JSON.stringify(user);
// {"name":"张三","age":20}
// {name:'张三',age:20}
console.log(userStr);
var str = "{name:'张三',age:20}";
var obj = JSON.parse(str);
console.log(obj);
```

### 数组对象的常用方法

#### reverse()

反转数组，返回结果为**反转后的数组**（会改变原来的数组）。

语法：

```text
反转后的数组  =  数组.reverse();
```

举例：

```javascript
var arr = ["a", "b", "c", "d", "e", "f"];

var result = arr.reverse(); // 将数组 arr 进行反转

console.log("arr =" + arr);
console.log("result =" + result);
```

打印结果：

```javascript
arr = ["f", "e", "d", "c", "b", "a"];
result = ["f", "e", "d", "c", "b", "a"];
```

从打印结果可以看出，原来的数组已经被改变了。

#### sort()

对数组的元素进行从小到大来排序（会改变原来的数组）。

**无参数时**

如果在使用 sort() 方法时不带参，则默认按照**Unicode 编码**，从小到大进行排序。

**举例 1**：（当数组中的元素为字符串时）

```javascript
var arr1 = ["e", "b", "d", "a", "f", "c"];

var result = arr1.sort(); // 将数组 arr1 进行排序

console.log("arr1 =" + arr1);
console.log("result =" + result);
```

打印结果：

```javascript
arr1 = ["a", "b", "c", "d", "e", "f"];
result = ["a", "b", "c", "d", "e", "f"];
```

**举例 2**：（当数组中的元素为数字时）

```javascript
var arr2 = [5, 2, 11, 3, 4, 1];

var result = arr2s.sort(); // 将数组 arr2 进行排序

console.log("arr2 =" + arr2);
console.log("result =" + result);
```

打印结果：

```javascript
arr2 = [1, 11, 2, 3, 4, 5];
result = [1, 11, 2, 3, 4, 5];
```

上方的打印结果中，你会发现，使用 sort() 排序后，数字`11`竟然在数字`2`的前面。这是为啥呢？因为上面讲到了，`sort()`方法是按照**Unicode 编码**进行排序的。

**带参数时**

如果在 sort()方法中带参，我们就可以自定义排序规则。具体做法如下：

我们可以在 sort()添加一个回调函数，来指定排序规则。回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数

浏览器根据回调函数的返回值来决定元素的排序：（重要）

- 如果返回一个大于 0 的值，则元素会交换位置
- 如果返回一个小于 0 的值，则元素位置不变
- 如果返回一个 0，则认为两个元素相等，则不交换位置（说明sort()是个稳定排序）

**代码举例**：

```javascript
var arr3 = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
var result = arr3.sort(function(a, b) {	//a, b就是遍历到的相邻的两个元素
	return a - b; // 升序排列
	// return b - a; // 降序排列
});

console.log("arr3 =" + arr3); // [1,2,3,4,5,11]
console.log("result =" + result); // [1,2,3,4,5,11]
```

forEach()也可以实现对数组的遍历

回调函数中有三个参数：元素、下标、数组

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'd', 'c']
//第一个参数表示：当前遍历的元素
//第二个参数表示：当前遍历元素所在的下标
//第三个参数表示：正在遍历的这个数组
arr.forEach(function(item, index, array){
    console.log(item, index, array);
})
```



#### slice()

从数组中提取指定的一个或者多个元素，返回结果为**新的数组**（不会改变原来的数组）。

备注：该方法不会改变原数组，而是将截取到的元素封装到一个新数组中返回。

语法：

```javascript
新数组 = 原数组.slice(开始位置的索引, 结束位置的索引); //注意：包含开始索引，不包含结束索引
```

举例：

```javascript
var arr = ["a", "b", "c", "d", "e", "f"];

var result1 = arr.slice(2); //从下标为2值开始提取
var result2 = arr.slice(-2); //提取最后两个元素
var result3 = arr.slice(2, 4); //提取从下标为2到下标为4之间的值（不包括下标为4的值）
var result4 = arr.slice(4, 2); //空
```

#### splice()

从数组中**删除**指定的一个或多个元素，返回结果为**删除的元素组成的数组**（会改变原来的数组，会将指定元素从原数组中删除）。

语法：

```javascript
原数组.splice(起始索引index, 需要删除的个数, 第三个参数, 第四个参数...);
```

上方语法中，第三个及之后的参数，表示：向原数组中添加新的元素，这些元素将会自动插入到开始位置索引的前面。

举例 1：

```javascript
var arr1 = ["a", "b", "c", "d", "e", "f"];
var result1 = arr1.splice(1); //从第index为1的位置开始，删除元素

console.log("arr1：" + arr1);
console.log("result1：" + result1);

console.log("-----------------------");

var arr3 = ["a", "b", "c", "d", "e", "f"];
var result3 = arr3.splice(1, 3); //从第index为1的位置开始删除元素,一共删除三个元素

console.log("arr3：" + arr3);
console.log("result3：" + result3);

console.log("-----------------------");
```

打印结果：

```javascript
arr1：["a"]
result1：["b","c","d","e","f"]
-----------------------

arr3：["a","e","f"]
result3：["b","c","d"]
-----------------------
```

举例 2：（我们来看看**第三个参数**的用法）

```javascript
var arr4 = ["a", "b", "c", "d", "e", "f"];

//从第index为1的位置开始删除元素,一共删除三个元素。并且在 index=1 的前面追加两个元素
var result4 = arr4.splice(1, 3, "千古壹号", "vae");

console.log("arr4：" + arr4);
console.log("result4：" + result4);
```

打印结果：

```javascript
arr4：["a","千古壹号","vae","e","f"]
result4：["b","c","d"]
```

#### indexOf()和lastIndexOf()

```javascript
索引值 = 数组.indexOf(value);

索引值 = 数组.lastIndexOf(value);
```

解释：

- indexOf(value)：从前往后索引，获取 value 在数组中的第一个下标。
- lastIndexOf(value) ：从后往前索引，获取 value 在数组中的最后一个下标。

作用：

利用这个方法，我们可以判断某个值是否在指定的数组中。如果没找到则返回`-1`。

```javascript
var arr = ["a", "b", "c", "d", "e", "d", "c"];

console.log(arr.indexOf("c")); //从前往后，找第一个"c"在哪个位置,2
console.log(arr.lastIndexOf("d")); //从后往前，找第一个"d"在哪个位置,5
```

### 字符串对象的常用方法

- **charAt()** 获取相应位置的字符 

- **charCodeAt()** 指定位置字符 的 Unicode 编码 

- **indexOf()** / **lastIndexOf()** 返回字符在字符串中的位置 

- **concat()** 连接字符串 

- **slice()** 截取字符串，第二个参数是截止位置

- **substr()** 截取字符串，第二个参数是截取个数

- **toUpperCase()** / **toLowerCase()** 转换大小写

```javascript
var str = "how are you? and you?";

console.log(str.length); // 21
// charAt()获取相应位置字符
// 空格也 占位置
console.log(str.charAt(5)); // r
// charCodeAt() 方法可返回指定位置字符的 Unicode 编码
console.log(str.charCodeAt(5)); // 114

// indexOf() / lastIndexOf()
// 返回字符在字符串中的位置
console.log(str.indexOf("y")); // 8
console.log(str.lastIndexOf("y")); // 17

//concat() 连接字符串
var str2 = " me too";
console.log(str.concat(str2));

// slice(起始位置, 结束为止)	  方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
console.log(str.slice(0, 9)); // how are y
console.log(str.slice(0)); // how are you? and you?
console.log(str.slice(1, 4)); // 'ow '

// substr(起始位置,[取的个数])  截取字符串 返回截取的字符串
console.log(str.substr(0)); // 截取 整个字符串
console.log(str.substr(1, 4)); // ow a

// 转换大小写
console.log(str.toUpperCase()); // HOW ARE YOU? AND YOU?
console.log(str);
console.log(str.toLowerCase()); // how are you? and you?
```