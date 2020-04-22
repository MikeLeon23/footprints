# DOM

## JavaScript的组成

JavaScript 基础分为三个部分：

- **ECMAScript**：JavaScript 的语法标准。包括变量、表达式、运算符、函数、if 语句、for 语句等。
- **DOM**：文档对象模型，操作**网页上的元素**的 API。比如让盒子移动、变色、轮播图等。
- **BOM**：浏览器对象模型，操作**浏览器部分功能**的 API。比如让浏览器自动滚动。



## 事件

> JS 是以**事件驱动为核心**的一门语言。

### 事件的三要素

**事件的三要素：事件源、事件、事件处理程序**。

比如，我用手去按开关，灯亮了。这件事情里，事件源是：开关。事件是：按开关。事件处理程序是：灯的开和关。

再比如，网页上弹出一个广告，我点击右上角的`X`，广告就关闭了。这件事情里，事件源是：`X`。事件是：鼠标点击这个动作。事件处理程序是：广告关闭了。

于是我们可以总结出：谁引发的后续事件，谁就是事件源。

**总结如下：**

- 事件源：引发后续事件的 html 标签。
- 事件：js 已经定义好了（见下图）。
- 事件处理程序：对样式和 html 的操作。也就是 DOM。（程序员发挥的地方）

常见的事件如下：

| 属性        | 当一下情况发生时,出现此事件    |
| ----------- | ------------------------------ |
| onabort     | 图像加载被中断                 |
| onblur      | 元素失去焦点                   |
| onchange    | 用户改变域的内容               |
| onclick     | 鼠标点击某个对象               |
| ondblclick  | 鼠标双击某个对象               |
| onerror     | 当加载文档或图像时发生某个错误 |
| onfocus     | 元素获得焦点                   |
| onkeydown   | 某个键盘的键被按下             |
| onkeypress  | 某个键盘的键被按下或按住       |
| onkeyup     | 某个键盘的键被松开             |
| onload      | 某个页面或图像被完成加载       |
| onmousedown | 某个鼠标按键被按下             |
| onmousemove | 鼠标被移动                     |
| onmouseout  | 鼠标从某元素移开               |
| onmouseover | 鼠标被移到某元素之上           |
| onmouseup   | 某个鼠标按键被松开             |
| onreset     | 重置按钮被点击                 |
| onresize    | 窗口或框架被调整尺寸           |
| onselect    | 文本被选定                     |
| onsubmit    | 提交按钮被点击                 |
| onunload    | 用户退出页面                   |

**代码书写步骤如下：**（重要）

1. 获取事件源：document.getElementById("box");
2. 绑定事件：事件源box.事件onclick = function(){事件处理程序};
3. 书写事件处理程序：关于DOM的操作

最简单的代码举例：（点击 box1，然后弹框）

```html
<body>
	<div id="box1"></div>

	<script type="text/javascript">
		// 1、获取事件源
		var box1 = document.getElementById("box1");
		// 2、绑定事件
		box1.onclick = function() {
			// 3、书写事件处理程序
			alert("我是弹出的内容");
		};
	</script>
</body>
```

### 获取事件源的方式

获取事件源的常见方式如下：

```javascript
//方式一：通过id获取单个标签
var div1 = document.getElementById("box1"); 

//方式二：通过 标签名 获得 标签数组，所以有s
var arr1 = document.getElementsByTagName("div"); 

//方式三：通过 类名 获得 标签数组，所以有s
var arr2 = document.getElementsByClassName("hehe"); 
console.log(arr2[0]);	//通过下标获取真正的DOM对象
```

注意：上面代码中的数组，不是一个真正的数组，是一个类数组，有length属性，有索引（下标），可以使用for循环对这个类数组遍历，但是不具备数组的那些方法（pop, shift...）

### 绑定事件的方式

方式一：直接绑定匿名函数

```html
<div id="box1"></div>

<script type="text/javascript">
	var div1 = document.getElementsByTagName("box1");
	//绑定事件的第一种方式
	div1[0].onclick = function() {
		alert("我是弹出的内容");
	};
</script>
```

取消绑定事件的方法：

```js
div1[0].onclick = null;
```

方式二：行内绑定

```html
<!--行内绑定-->
<div id="box1" onclick="fn()"></div>

<script type="text/javascript">
    var p = document.getElementById("box1")
	function fn() {
		p.style.color = 'red';
	}
</script>
```

注意第一行代码，绑定时，是写的`"fn()"`，不是写的`"fn"`。因为绑定的这段代码不是写在 js 代码里的，而是被识别成了**字符串**。

下面这种方式也可以，但不常用

```html
<!--行内绑定-->
<div id="box1" onclick="fn(this)"></div>	行内绑定时可以传参数，把自己传进去

<script type="text/javascript">
	function fn(that) {		//这里不能用this，因为this有特殊含义
		that.style.color = 'red';
	}
</script>
```

**onload事件**

> 当页面加载（文本和图片）完毕的时候，触发 onload 事件。

```js
// 页面加载完之后再出发程序，用于防止页面从上到下加载，
// 使得按照原本的顺序，函数执行时，相关的内容还没有加载导致问题
window.onload = function(){
    var box = document.querySelector('.box');
}
```



### 事件处理程序

我们在上面是拿 alert 举例，不仅如此，我们还可以操作标签的属性和样式。举例如下：

点击鼠标时，原本粉色的 div 变大了，背景变红：

```html
<script type="text/javascript">
	var div1 = document.getElementById("box1");
	//点击鼠标时，原本粉色的div变大了，背景变红了
	div1.onclick = function() {
		div1.style.width = "200px"; //属性值要写引号
		div1.style.height = "200px";
		div1.style.backgroundColor = "red"; //属性名是backgroundColor，不是background-color
	};
</script>
```

上方代码的注意事项：

- 在 js 里写属性值时，要用引号
- 在 js 里写属性名时，是`backgroundColor`，不是 CSS 里面的`background-color`。



## DOM的介绍

### 什么是DOM

> DOM：Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让 js 操作 html 元素而制定的一个规范。HTML文档被包装成DOM对象，以便js对其进行操作。

DOM 就是由节点组成的。

### 解析过程

HTML 加载完毕，渲染引擎会在内存中把 HTML 文档，生成一个 DOM 树，getElementById 是获取内中 DOM 上的元素节点。然后操作的时候修改的是该元素的**属性**。

### DOM数（一切都是节点）

DOM 的数据结构如下：

![img](https://metro2703.github.io/bufan-doc/assets/img/dom.0ed3cfe2.png)

上图可知，**在 HTML 当中，一切都是节点**：（非常重要）

- **元素节点**：HMTL 标签。
- **文本节点**：标签中的文字（比如标签之间的空格、换行）
- **属性节点**：标签的属性。

整个 html 文档就是一个文档节点。所有的节点都是 Object。

### DOM节点的获取

DOM 节点的获取方式其实就是**获取事件源的方式**，在上一段已经讲到。这里再重复一下。

操作元素节点，必须首先找到该节点。有三种方式可以获取 DOM 节点：

```javascript
var div1 = document.getElementById("box1"); //方式一：通过id获取单个标签

var arr1 = document.getElementsByTagName("div"); //方式二：通过 标签名 获得 标签数组，所以有s

var arr2 = document.getElementsByClassName("hehe"); //方式三：通过 类名 获得 标签数组，所以有s
```

既然方式二、方式三获取的是标签数组，那么习惯性是**先遍历之后再使用**。

特殊情况：数组中的值只有 1 个。即便如此，这一个值也是包在数组里的。这个值的获取方式如下：

```javascript
document.getElementsByTagName("div1")[0]; //取数组中的第一个元素

document.getElementsByClassName("hehe")[0]; //取数组中的第一个元素
```

### 通过关系获取节点

DOM 的节点并不是孤立的，因此可以通过 DOM 节点之间的相对关系对它们进行访问。如下：

![img](https://metro2703.github.io/bufan-doc/assets/img/dom1.96b01af9.png)

节点的访问关系，是以**属性**的方式存在的。

JS 中的**父子兄**访问关系：

![img](https://metro2703.github.io/bufan-doc/assets/img/dom2.f94d591a.png)

这里我们要重点知道**parentNode**和**children**这两个属性的用法。下面分别介绍。

#### 获取兄弟节点

**1、下一个节点 | 下一个元素节点**：

> Sibling 的中文是**兄弟**。

（1）nextSibling：

- 火狐、谷歌、IE9+版本：都指的是下一个节点（包括标签、空文档和换行节点）。
- IE678 版本：指下一个元素节点（标签）。

（2）nextElementSibling：

- 火狐、谷歌、IE9+版本：都指的是下一个元素节点（标签）。

**总结**：为了获取下一个**元素节点**，我们可以这样做：在 IE678 中用 nextSibling，在火狐谷歌 IE9+以后用 nextElementSibling，于是，综合这两个属性，可以这样写：

```javascript
下一个兄弟节点 = 节点.nextElementSibling || 节点.nextSibling;
```

**2、前一个节点 | 前一个元素节点**：

> previous 的中文是：前一个。

（1）previousSibling：

- 火狐、谷歌、IE9+版本：都指的是前一个节点（包括标签、空文档和换行节点）。
- IE678 版本：指前一个元素节点（标签）。

（2）previousElementSibling：

- 火狐、谷歌、IE9+版本：都指的是前一个元素节点（标签）。

**总结**：为了获取前一个**元素节点**，我们可以这样做：在 IE678 中用 previousSibling，在火狐谷歌 IE9+以后用 previousElementSibling，于是，综合这两个属性，可以这样写：

```javascript
前一个兄弟节点 = 节点.previousElementSibling || 节点.previousSibling;
```

#### 获取父节点

调用者就是节点。一个节点只有一个父节点，调用方式就是

```javascript
节点.parentNode;
```

#### 获取单个的子节点

**1、第一个子节点 | 第一个子元素节点**：

（1）firstChild

（2）firstElementChild

兼容性同上，兼容写法：

```javascript
第一个子元素节点 = 节点.firstElementChild || 节点.firstChild;
```

**2、最后一个子节点 | 最后一个子元素节点**：

（1）lastChild

（2）lastElementChild

兼容性同上，兼容写法：

```javascript
最后一个子元素节点 = 节点.lastElementChild || 节点.lastChild;
```

#### 获取所有的子节点

（1）**childNodes**：标准属性。返回的是指定元素的**子节点**的集合（包括元素节点、所有属性、文本节点、注释）。是 W3C 的亲儿子。

- 火狐 谷歌等高本版会把换行也看做是子节点。

用法：

```javascript
子节点数组 = 父节点.childNodes; //获取所有节点。
```

（2）**children**：非标准属性。返回的是指定元素的**子元素节点**的集合。【重要】

- 它只返回 HTML 节点，甚至不返回文本节点。
- 在 IE6/7/8 中包含注释节点（在 IE678 中，注释节点不要写在里面）。

用法：（**用的最多**）

```javascript
子节点数组 = 父节点.children; //获取所有节点。用的最多。
```

兼容问题：

```javascript
// 自己封装方法 实现  获取元素的  素有子元素节点
function myChildren(el) {
	var children = el.children;
	var myChildrenArr = [];
	console.log(children);
	for (var i = 0; i < children.length; i++) {
		// 如何 判断 他是 注释节点  还是 元素几点
		// nodeType = 8   注释节点
		// nodeType = 1   元素节点
		// nodeType =  3  是文本节点
		if (children[i].nodeType === 1) {
			myChildrenArr.push(children[i]);
		}
	}
	return myChildrenArr;
}
var ulElChildren = myChildren(ulEl);
```

#### nodeType属性

这里讲一下 nodeType 属性。

- nodeType == 1 表示的是元素节点（标签） 。记住：元素就是标签。
- nodeType == 2 表示是属性节点。
- nodeType == 3 是文本节点。
- nodeType == 8 注释节点

#### 获取除自己以外的所有兄弟节点

```javascript
function getSiblings(el) {
	var siblings = [];
	var pNode = el.parentNode;
	var children = pNode.children;
	for (var i = 0; i < children.length; i++) {
		// 兼容ie8
		if (children[i].nodeType === 1) {
			// 不是el再push
			if (children[i] !== el) {
				siblings.push(children[i]);
			}
		}
	}
	return siblings;
}
```

**获取自己之后的所有兄弟节点**（锁的思想）

```js
function sibilingAfterMe(el){
    var pNode = el.parentNode;
    var children = pNode.children;	
    //children是伪数组，这也是为什么不能用indexOf()的原因
    var temp = [];
    var lock = true;	//无法直接获取索引，需要用到锁的思想
    for(var i = 0; i < children.length; i++){
        if(children[i] != el){
            lock = true;
            continue;
        }
        //如果锁不在了，执行push
        if(!lock){
            temp.push(children[i]);
        }
    }
    return temp;
}
```

### DOM节点的操作

上一段的内容：节点的**访问关系**都是**属性**。

本段的内容：节点的**操作**都是**函数**（方法）。

#### 创建节点

格式如下：

```javascript
	新的标签(元素节点) = document.createElement("标签名");
```

比如，如果我们想创建一个 li 标签，或者是创建一个不存在的 adbc 标签，可以这样做：

```html
<script type="text/javascript">
	var a1 = document.createElement("li"); //创建一个li标签
	var a2 = document.createElement("adbc"); //创建一个不存在的标签
</script>
```



#### 插入节点

插入节点有两种方式，它们的含义是不同的。都需要借助父元素。

方式 1：

```javascript
父节点.appendChild(新的子节点);
```

解释：父节点的最后插入一个新的子节点。

方式 2：

```javascript
父节点.insertBefore(新的子节点, 作为参考的子节点);
```

解释：

- 在参考节点前插入一个新的节点。
- 如果参考节点为 null，那么他将在父节点里面的最后插入一个子节点。

```javascript
btn.onclick = function() {
	box.appendChild(imgEl);
	// 同一个节点 只能 添加一次
	// box.appendChild(imgEl);
	// box.appendChild(pEl);
	// 使用方法：父节点.insertBefore(要插入的节点，参考节点)；
	box.insertBefore(pEl, imgEl);
	// 如果参考节点为null，那么他将在节点最后插入一个节点。
};
```

注意：多次对同一个dom元素进行插入，只会生效最后一次

#### 删除节点

格式如下：

```javascript
父节点.removeChild(子节点);
```

解释：**用父节点删除子节点**。必须要指定是删除哪个子节点。

如果我想删除自己这个节点，可以这么做：

```javascript
node1.parentNode.removeChild(node1);
```

#### 复制节点（克隆节点）

格式如下：

```javascript
要复制的节点.cloneNode(); //括号里不带参数和带参数false，效果是一样的。

要复制的节点.cloneNode(true);	//深复制，子节点也复制
```

括号里带不带参数，效果是不同的。解释如下：

- 不带参数/带参数 false：只复制节点本身，不复制子节点。
- 带参数 true：既复制节点本身，也复制其所有的子节点。

### 节点的属性操作

我们可以获取节点的属性值、设置节点的属性值、删除节点的属性。

我们就统一拿下面这个标签来举例：

```html
<img src="images/1.jpg" class="image-box" title="美女图片" alt="地铁一瞥" id="a1" />
```

下面分别介绍。

#### 获取节点的属性

方式 1：

```javascript
元素节点.属性;
元素节点[属性];
```

方式 2：

```javascript
元素节点.getAttribute("属性名称");
```

举例：

```javascript
console.log(myNode.src);
console.log(myNode.className);
console.log(myNode.getAttribute("class")); //注意是class，不是className
console.log(myNode.getAttribute("title"));
```

#### 设置节点的属性

方式 1 举例：（设置节点的属性值）

```javascript
myNode.src = "images/2.jpg"; //修改src的属性值
myNode.className = "image2-box"; //修改class的name
```

方式 2：

```javascript
元素节点.setAttribute(属性名, 新的属性值);
```

举例：（设置节点的属性值）

```javascript
myNode.setAttribute("src", "images/3.jpg");
myNode.setAttribute("class", "image3-box");
myNode.setAttribute("id", "你好");
```

#### 删除属性

格式：

```javascript
元素节点.removeAttribute(属性名);
```

举例：（删除节点的属性）

```javascript
myNode.removeAttribute("class");
myNode.removeAttribute("id");
```

**总结：**

获取节点的属性值和设置节点的属性值，都有两种方式，但这两种方式是有区别的。

- 方式一的`元素节点.属性`和`元素节点[属性]`:绑定的属性值不会出现在标签上。
- 方式二的`get/set/removeAttribute`: 绑定的属性值会出现在标签上。

这其实很好理解，方式一操作的是属性而已，方式二操作的是标签本身。

#### 类名的操作

- `Node.classList.add('class')` 添加 class
- `Node.classList.remove('class')` 移除 class
- `Node.classList.toggle('class')` 切换 class，有则移除，无则添加
- `Node.classList.contains('class')` 检测是否存在 class 非常好用 但是出现的太晚了 。。。



### 节点内容操作

> 就是对节点里边的内容进行增加、删除、修改...可以是标签也可以是文本内容

DOM 对象的属性和 HTML 的标签属性几乎是一致的。例如：src、title、className、href 等。

#### 获取内容和设置内容

innerHTML 和 innerText 

- **Node.innerHTML**：获取双闭合标签里面的内容（识别标签）。
- **Node.innerText**：只获取双闭合标签里面的文本内容（不识别标签）。（老版本的火狐用 textContent）

**获取内容举例：**

如果我们想获取 innerHTML 和 innerText 里的内容，看看会如何：（innerHTML 会获取到标签本身，而 innerText 则不会）

![img](https://metro2703.github.io/bufan-doc/assets/img/inner.c8c688da.png)

**修改内容举例：**（innerHTML 会修改标签本身，而 innerText 只当做单纯的文本来解析）

![img](https://metro2703.github.io/bufan-doc/assets/img/inner-1.fc59321c.png)

```javascript
btn.onclick = function() {
	// inputEl.value = '不凡学院';
	// 修改表单的值
	inputEl.value = Math.floor(Math.random() * 10);
};

btn2.onclick = function() {
	// 插入文本内容
	boxEl.innerText = "今天天气很热";
	boxEl.innerText = "<p></p>"; // 当做了文本处理,并没有解析成标签
	// 每一次innerText 都会替换掉box里边  之前的所有内容
};

btn3.onclick = function() {
	boxEl.innerHTML = "<p>我是一个p标签</p>";
	//解析成了  标签
	// 每一次innerHTML 都会 替换掉 掉 box 里边之前的所有内容
	// 可以动态地生成页面
};
```

**总结：**

想修改里边的HTML结构，就使用innerHTML，可以用它来动态的生成页面。

只想修改里边的文本，就使用innerText

#### 表单内容操作

```html
<input type="text">
//想获取用户输入的内容
<br>
篮球：<input class="like" type="checkbox" value="0"> <br>
足球：<input class="like" type="checkbox" value="0"> <br>
排球：<input class="like" type="checkbox" value="0"> <br>
<select name="" id="list">
    <option value="0">郑州</option>
    <option value="0">北京</option>
    <option value="0">上海</option>
    <option value="0">深圳</option>
</select>
<script>
    //value属性用于获取表单的值
	var input = document.getElementsByTagName('input')[0];
    //失去焦点时获取表单值
    input.onblur = function(){
        console.log(input.value);
    }
    //获得焦点时，输入框内容清空
    input.onfocus = function(){
        input.value = '';
    }
    //第二个复选框选中
    var checkbox = document.getElementsByClassName('like')[1];
    checkbox.checked = true;
    //如果是下拉选择框：就写selected = true;
    
    //onchange事件，内容改变时触发
    //改变下来选择框选中的内容时，输出选中的是谁
    var select = document.getElementById('list');
    select.onchange = function(){
        console.log(this.selectedIndex);
        console.log(this.value);
    }
</script>
```



### DOM扩展（H5）

1. 获取元素

   `document.querySelector("selector")` html5 新选择器，参数是 css 选择器参数,选择选中的第一个

   `document.querySelectorAll("selector")` 选择多个

2. 类名操作

- `Node.classList.add('class')` 添加 class
- `Node.classList.remove('class')` 移除 class
- `Node.classList.toggle('class')` 切换 class，有则移除，无则添加
- `Node.classList.contains('class')` 检测是否存在 class 非常好用 但是出现的太晚了 。。。

3. 自定义属性

在 HTML5 中我们可以自定义属性，其格式如下 `data-*=""`，例如:

`data-info="我是自定义属性"`，通过`Node.dataset['info']` 我们便可以获取到自定义的属性值。

`Node.dataset`是以类对象形式存在的

当我们如下格式设置时，则需要以小驼峰格式才能正确获取

```
data-my-name="mm"`，获取`Node.dataset['myName']
```

## JS补充

### 事件监听器

思考一下，`事件源.onclick = function(){...};`  这种绑定事件方式的缺点？

- 同一个事件源只能绑定一个事件。
- 如果有多个，后面的会覆盖前面的。

#### addEventListener

> addEventListener 是 W3C DOM 规范中提供的注册事件监听器的方法。是绑定事件的又一种方式。

它的优点包括：

- 它允许给一个事件注册多个 listener。
- 它提供了一种更精细的手段控制 listener 的触发阶段。（即可以选择捕获或者冒泡）。
- 它对任何 DOM 元素都是有效的，而不仅仅只对 HTML 元素有效。

#### addEventListener的使用

语法：`target.addEventListener(type,listener,useCapture]);`

- target： 文档节点、document、window 或 XMLHttpRequest。 (事件源)
- type： 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。
- listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
- useCapture ：是否使用捕获，默认为 false，表示在事件冒泡阶段调用事件处理函数；true 表示在事件捕获阶段调用处理函数；

```javascript
d1.addEventListener('click', function(){
    alert('d1);
}, true)

d2.addEventListener('click', foo, false)

function foo(){
    alert('d2');
}
```

#### 事件捕获和事件冒泡

> DOM事件流（event flow ）存在三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。

**事件捕获（event capturing）：** 当鼠标点击或者触发dom事件时（被触发dom事件的这个元素被叫作事件源），浏览器会从根节点 =>事件源（由外到内）进行事件传播。

**事件冒泡（dubbed bubbling）：** 事件源 =>根节点（由内到外）进行事件传播。

![capture.jpg](https://i.loli.net/2019/08/14/cQAd2iBJTRU9b4q.jpg)

dom标准事件流的触发的先后顺序为：先捕获再冒泡。即当触发dom事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡。

#### removeEventListener移除绑定

- 如果同一个监听事件分别为“事件捕获”和“事件冒泡”注册了一次，一共两次，这两次事件需要分别移除。两者不会互相干扰。
- 移除的事件必须为外部事件（外部封装的函数）。
- 总结来讲，就是移除时，必须和绑定时一一对应。

```javascript
d2.addEventListener("click", foo, false);
d2.removeEventListener("click", foo, false);
function foo() {
	alert("d2");
}
```

#### IE8以下兼容问题

- target.attachEvent(type, listener);
- target.detachEvent(type,listener);

```javascript
/**
 * 兼容IE8和标准浏览器
 * el 绑定元素
 * type 事件类型,IE8要加on
 * func 执行方法
 **/
function myAddEventListener(el, type, func) {
	// attachEvent 是IE 专有的方法
	if (el.attachEvent) {
		el.attachEvent("on" + type, func);
	} else {
		el.addEventListener(type, func);
	}
}
```

### 定时器

#### 创建定时器

- setTimeout(); 延迟执行
- setInterval(); 循环执行

#### 移除定时器

只有起了名字的定时器，才能移除

- clearTimeout(); 清除延迟执行的定时器
- clearInterval(); 清除循环执行的定时器

#### 使用

```javascript
setTimeout(function() {
	console.log("延迟了5s才执行");
}, 5000);

var timer = setInterval(function() {
	console.log("每隔1s执行一次");
}, 1000);

// 清除定时器时 需要给定时器命名(用一个变量接受设置的定时器)
btn.onclick = function() {
	clearInterval(timer);
};
```

#### 倒计时案例

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
		<style>
			h1 {
				width: 250px;
				margin: 100px auto 50px auto;
			}

			.item {
				width: 500px;
				height: 50px;
				margin: 0 auto;
				text-align: center;
				font-size: 30px;
				color: orange;
			}

			strong {
				background-color: orange;
				padding: 0 10px;
				color: #fff;
				border-radius: 4px;
			}
		</style>
	</head>

	<body>
		<h1>距离光棍节,还有</h1>
		<div class="item">
			<span><span class="day">00</span>天</span>
			<strong><span class="hour">00</span>时</strong>
			<strong><span class="min">00</span>分</strong>
			<strong><span class="second">00</span>秒</strong>
		</div>

		<script>
			var endTime = new Date("2019-11-11");
			var dayEl = document.querySelector(".day");
			var hourEl = document.querySelector(".hour");
			var minEl = document.querySelector(".min");
			var secondEl = document.querySelector(".second");
			setInterval(function() {
				// 获取当前时间
				var nowTime = new Date();
				var cha = endTime - nowTime; // 获取相差的毫秒数
				// console.log(cha);
				// 转换  天  时  分  秒
				var DAY_MS = 1000 * 60 * 60 * 24;
				var HOUR_MS = 1000 * 60 * 60;
				var MIN_MS = 1000 * 60;
				var SECOND_MS = 1000;
				var day = Math.floor(cha / DAY_MS);
				console.log(day);
				var hour = Math.floor((cha % DAY_MS) / HOUR_MS);
				var min = Math.floor((cha % HOUR_MS) / MIN_MS);
				var second = Math.floor((cha % MIN_MS) / SECOND_MS);
				dayEl.innerText = wrap(day);
				hourEl.innerText = wrap(hour);
				minEl.innerText = wrap(min);
				secondEl.innerText = wrap(second);
			}, 1000);

			function wrap(num) {
				return num < 10 ? "0" + num : num;
			}
		</script>
	</body>
</html>
```