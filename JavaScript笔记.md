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

| 方法              | 描述                                       | 备注  |
| :---------------- | :----------------------------------------- | :---- |
| Math.abs()        | 返回绝对值                                 |       |
| Math.floor()      | 向下取整（向小取）                         |       |
| Math.ceil()       | 向上取整（向大取）                         |       |
| Math.round()      | 四舍五入取整（正数四舍五入，负数五舍六入） |       |
| Math.random()     | 生成 0-1 之间的随机数                      | [0,1) |
| Math.max(x, y, z) | 返回多个数中的最大值                       |       |
| Math.min(x, y, z) | 返回多个数中的最小值                       |       |
| Math.pow(x,y)     | 返回 x 的 y 次幂                           |       |
| Math.sqrt()       | 对一个数进行开方运算                       |       |

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