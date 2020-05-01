# BOM

`ECMAScript` 是 `javascript` 的核心，但是如果要在 `web` 中使用 `javascript`，那么 `BOM` (浏览器对象模型)才是真正的核心。BOM 提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关。

`BOM` 的核心对象是 `window` ，它表示浏览器的一个实例。在浏览器中， `window` 对象有双重角色，它既是通过 `javascript` 访问浏览器窗口的一个接口，又是 `ECMAScript` 规定的 `Global` 对象。所有全局作用域中声明的变量、函数都会变成 `window` 对象的属性和方法。

## Event

### 事件对象

> 事件触发会生成事件对象 `event`，`event` 对象是跟事件相关的数据集合，比如点击事件中触发事件的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态，input 输入事件中用户按下了那个键等。

#### 获取event对象

```js
event || window.event	// 兼容IE的写法
```

#### event对象的属性

| 属性名                | 说明                                                         |
| --------------------- | ------------------------------------------------------------ |
| `event.type`          | 事件类型                                                     |
| `event.target`        | 触发事件的目标元素，IE<8不可用                               |
| `event.srcElement`    | 触发事件的目标元素，IE<8专用                                 |
| `event.currentTarget` | 绑定事件的目标元素，IE<8不可用，相当于绑定的事件处理函数中的 `this` |
| `event.pageX/Y`       | 触发事件时鼠标距离页面的上/左边距，IE<9不可用                |
| `event.clientX/Y`     | 触发事件时鼠标距离页面可视区域的上/左边距                    |
| `event.screenX/Y`     | 触发事件时鼠标距离屏幕的上/左边距                            |
| `event.offsetX/Y`     | 触发事件时鼠标距离触发事件的元素的内填充边（padding edge）在 X/Y 轴方向上的偏移量。 |
| `event.key/keyCode`   | 键盘事件中键盘的按键和按键的ASCII码值                        |
| `event.button`        | 鼠标点击的按键(只认识三个键) 可在 `onmousedown` 事件中测试，0是左键 |

![ascii_Table2.png](https://i.loli.net/2020/04/22/OQMCTRwU9lzmiXB.png)

### 事件委托

事件委托，又名事件代理。就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

> 通过监听一个父元素，来给不同的子元素绑定事件，减少监听次数，从而提升速度。 由于事件的冒泡机制，可以使用事件委托的方式给元素添加事件

**为什么要使用事件委托？**

1. 在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的与 dom 节点进行交互，访问 dom 的次数越多，引起浏览器重绘与重排的次数也就越多，就会延长整个页面的交互就绪时间。
2. 如果给一类元素添加事件，再添加过事件之后新添加的元素不会被绑定上之前事件

**使用取快递来解释这个现象：** 有三个同事预计会在周一收到快递。为签收快递，有两种办法：一是三个人在公司门口等快递；二是委托给前台 MM 代为签收。现实当中，我们大都采用委托的方案（公司也不会容忍那么多员工站在门口就为了等快递）。前台 MM 收到快递后，她会判断收件人是谁，然后按照收件人的要求签收，甚至代为付款。这种方案还有一个优势，那就是即使公司里来了新员工（不管多少），前台 MM 也会在收到寄给新员工的快递后核实并代为签收。

这里面有两个要点：

1. 现有委托前台的同事是可以代为签收的，即程序中的现有的 dom 节点是有事件的；
2. 新员工也是可以被前台 MM 代为签收的，即程序中新添加的 dom 节点也是有事件的。

举例：

```html
<h1>Contents</h1>

<div class="contents">
	<ul class="book">
		<li class="chapter">Chapter 1</li>
		<li class="chapter">Chapter 1</li>
	</ul>
</div>

<script>
    // 常见的事件委托写法
    // 原生JS写法
    var bookEle = document.querySelector(".book");
    bookEle.onclick = function(){	// 把事件委托给父元素ul
        var target = event.target.closest("li");	// 当点击的是li或者li内部的元素时，event.target是指向这个元素的，获取它的最近的li(如果本身不是就向上查找)
        if(target && target.tagName == "LI"){
            target.style.backgroundColor = "red";
        }
    };    
    
    // jQuery写法
    // target元素是要委托的父元素，on方法的第二个参数'li'是要绑定事件的子元素，如果没有第二个参数，this就指向ul了
    $('ul').on('click', 'li', function(){
        console.log($(this).text());
    })
</script>
```

注意：事件一般是委托给父元素的

#### closest方法

 `Element.closest()` 方法用来获取：匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回 `null`。 换句话说，方法 closest 在元素中检查每个父类。如果与选择器匹配，则停止搜索并返回祖先。IE不支持此方法

语法：

```js
var ele = element.closest(selectors); 
```

例如：

```html
<article>
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>

<script>
  	var el = document.getElementById('div-03');
    
	var r1 = el.closest("#div-02");  
	// 返回 id 为 div-02 的那个元素

    var r2 = el.closest("div div");  
	// 返回最近的拥有 div 祖先元素的 div 祖先元素，这里的话就是 div-03 元素本身

	var r3 = el.closest("article > div");  
	// 返回最近的拥有父元素 article 的 div 祖先元素，这里的话就是 div-01

	var r4 = el.closest(":not(div)"); 
	// 返回最近的非 div 的祖先元素，这里的话就是最外层的 article
</script>
```

#### “行为型”模式

我们还可以使用事件委托**声明式**地通过特定属性和类为元素添加“行为”。

模式分为两步：

1. 我们向元素添加一个特殊属性。
2. 用文档范围级的处理器追踪事件，如果事件发生在具有特定属性的元素上 —— 则执行该操作。



```html
add: <input type="button" value="1" data-counter>
add1: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {
    if (event.target.dataset.counter != undefined) { // 如果属性存在的话
      event.target.value++;
    }
  });
</script>
```



### 阻止冒泡

#### 推荐方法

```js
event.stopPropagation();
```

#### IE10及以下方法

```js
event.cancelBubble = true
```

**兼容写法**

```js
event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
```

### 阻止默认事件

默认事件是某些事件会默认触发的操作，比如链接点击跳转等

```js
event.preventDefault ? event.preventDefault() : event.returnValue = false;
```

## 三大家族

### offset家族

> 家族成员：`offsetWidth` `offsetHeight` `offsetLeft` `offsetTop` `offsetParent`

#### offsetWidth 和 offsetHeight

检测盒子自身宽高

> 这两个属性，他们绑定在了所有的节点元素上。获取之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。

> ```
> offset宽/高 = 盒子自身的宽/高(width/height) + padding +border
> ```

#### offsetLeft 和 offsetTop

检测距离有定位的父盒子的左边/上面的距离

> 如果父级都没有定位则以 `body` 为准， `offsetLeft` 从父亲的 `padding` 开始算（包括padding），父亲的 `border` 不算。 在父盒子有定位的情况下，`offsetLeft == style.left`(去掉 px)

offsetTop/Left 和 style.top/left 的区别：

1. 最大区别在于 `offsetTop/Left` 可以返回没有定位盒子的距离左侧的位置（其实是相对body）。而 `style.top/left` 不可以
2. `offsetTop/Left` 返回的是整数，而 `style.top/left` 返回的是字符串，除了数字外还带有单位：`px`
3. `offsetTop/Left` 只读，而 `style.top/left` 可读写。（只读是获取值，可写是赋值）
4. `obj.style.xxx` 只能获取行内样式
5. `offsetXX`取得的结果是向上取整的整数，而`obj.style.xxx`则是四舍五入保留一位小数

```html
<div class="d1" style="position:relative;width: 300px;height: 200px;background-color: green;"></div>
<script>
	var d1= document.getElementsByClassName('d1')[0];
	d1.onclick = function(){
		d1.style.width = '400.499999999999999px';
		console.log(d1.offsetWidth);	// 401 向上取整
		console.log(d1.style.width);	// "400.5px" 四舍五入保留一位小数
		d1.style.top = "50.49999999999999px";
		console.log(d1.style.top)	// "50.5px"
		console.log(d1.offsetTop)	// 51
	}
</script>
```

#### offsetParent

检测父系盒子中带有定位的父盒子节点

> 1、返回该对象的父级 （带有定位）
>
>   如果当前元素的父级元素没有进行 CSS 定位(absolute,relative,fixed) `offsetParent` 为 `body` 2、如果当前元素的父级元素中有 CSS 定位 `offsetParent` 取最近的那个父级元素。

#### 匀速、缓动动画

动画原理

- 物体运动： 起点，终点，速度（距离/时间）
- 盒子的位置 = 盒子本身所在的位置 + 步长

> 缓动动画计算方式：
>
> leader = leader + (target - leader) / 10;
>
> 起点 = 起点 + (终点 - 起点) / 10;

```js
// 匀速动画的封装
function averageMove(ele, target) {
	// 先清除上一个元素上绑定的定时器   防止定时器叠加
	clearInterval(ele.timer);
	// 设置定时器
	ele.timer = setInterval(function() {
		// 起点 style.left 只能获取行内样式，并且是字符串，我们需要的是数值
		var start = ele.offsetLeft;
		// 步长  需要判断方向
		var step = target > start ? 10 : -10;
		// 运动 运动距离 = 起点 + 步长
		ele.style.left = start + step + "px";
		// 需要停止定时器的条件  终点与起点的距离 <= 步长
		if (Math.abs(target - start) <= Math.abs(step)) {
			clearInterval(ele.timer);
			// 直接到终点
			ele.style.left = target + "px";
		}
	}, 17);
}

// 缓动动画封装
function slowlyMove(ele, target) {
	// 先清除上一个元素上绑定的定时器   防止定时器冲突
	clearInterval(ele.timer);
	// 设置定时器
	ele.timer = setInterval(function() {
		// 起点 style.left 只能获取行内样式
		var start = ele.offsetLeft;
		// 步长  需要判断方向
		var step = (target - start) / 10;
		// 判断步长区间
		if (Math.abs(step) < 1) {
			// [-1,1]
			step = step > 0 ? 1 : Math.floor(step);
		}
		// 运动 运动距离 = 起点 + 步长
		ele.style.left = start + step + "px";
		// 需要停止定时器的条件  终点与起点的距离 <= 步长
		if (start + step === target) {
			console.log("stop ...");
			clearInterval(ele.timer);
		}
	}, 17);
}
```

#### 小知识

定时器的返回值是一个 requestId（定时器的序列号，是数字），可以用来清除定时器。但是清除定时器之后，返回值不会发生改变。如果想要严谨，可以将`timer = null;`

### scroll家族

- `scrollWidth` 
- `scrollHeight` 
-  `scrollTop` 
-  `scrollLeft`



#### scrollWidth 和 scrollHeight

> 检测盒子的宽高 内容高度 + padding。（调用者：节点元素。属性。） 盒子内容的宽高。（如果有内容超出了，显示内容的宽/高度）

注意：假设元素内容超出盒子大小，盒子有 *padding* 属性

+ 有 `overflow: auto/hidden/scroll` 属性，则元素宽度 = 内容宽度 + 左 *padding* 值，元素高度 = 内容高度 + 上下 *padding* 值
+ 没有  `overflow: auto/hidden/scroll` 属性，则元素宽度 = 内容宽度 + 左 *padding* 值，元素高度 = 内容高度 + 上 *padding* 值



#### scrollTop 和 scrollLeft

注意：这两个是**可读写**的

> 前提: 目标元素有滚动条 被浏览器或父类遮挡的头部和左边部分。 可以获取或设置一个元素的内容垂直滚动的像素数。element.scrollTop/Left = XXX

**获取页面卷入高度的浏览器兼容问题： **

 各浏览器下 scrollTop 的差异

- IE6/7/8： 
  - 没有 doctype 声明的页面里可以使用 document.body.scrollTop 来获取 scrollTop 高度；
  - 有 doctype 声明的页面则可以使用 document.documentElement.scrollTop ；
- Safari: safari 比较特别，有自己获取 scrollTop 的函数 ： window.pageYOffset ；
- Firefox、Chrome: 火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop ；

兼容写法： 

```js
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft || 0;
```



#### onscroll 事件

> 当元素的滚动条滚动时触发的事件。

`onscroll`事件貌似任何实体元素都可以绑定，这里的实体元素包括 DOM 元素、window 元素、document 元素。

```js
element.onscroll=function(){};
```

注意：设置此事件的元素一定要有**滚动条**


#### window 的滚动事件

- `window.scroll(x,y)`是让 window 滚动条滚动到那个 x,y 坐标。//x 是水平坐标，y 是垂直坐标。

- `window.scrollBy(-x,-y)`是让 window 滚动条相对滚动一段像素距离，- 10 即相对向左/向上滚动 10 像素。

- `window.scrollTo(x,y)`和`window.scroll(x,y)`一样，但是它不兼容 IE。

- `element.scrollIntoView(boolean)` 让元素贴顶或者贴底，相对于可视区域



#### 实现网页顺滑滚动

实现网页顺滑滚动（smooth scroll）的原生方式有四种：

1. 给html设置一个样式属性，`html { scroll-behavior: smooth; }`

2. `window.scroll` 方法传对象参数

   ```js
   window.scroll(options);
   window.scrollTo(options);
   window.scrollBy(options);
   ```

   `options` 是一个包含三个属性的对象：

   1. `top` 是文档中的纵轴坐标
   2. `left` 是文档中的横轴坐标
   3. `behavior`  类型 `String`，表示滚动行为，支持参数 `smooth`(平滑滚动)，`instant`(瞬间滚动),默认值 `auto`，实测效果等同于 `instant`

   ```js
   btn.onclick = function () {
   	window.scroll({
   		top: 1000,
   		left: 1000,
   		behavior: "smooth"
   	});
   }
   ```

3. `elem.scrollIntoView(options)` IE 不支持填写 `options` 选项

   `options` 是一个包含三个属性的对象：

   - `behavior` 可选

     定义动画过渡效果， `"auto"`或 `"smooth"` 之一。默认为 `"auto"`。

   - `block` 可选

     定义垂直方向的对齐， `"start"`, `"center"`, `"end"`, 或 `"nearest"`之一。默认为 `"start"`。

   - `inline` 可选

     定义水平方向的对齐， `"start"`, `"center"`, `"end"`, 或 `"nearest"`之一。默认为 `"nearest"`。

4. 自己写一个缓动动画



### client家族

> 家族成员`clientWidth` `clientHeight` `clientTop` `clientLeft`

#### clientWidth 和 clientHeight

检测盒子的大小，计算方式：自身宽高 + padding，内容溢出不算，滚动条宽度（默认宽度17）不算。

获取浏览器可视区域宽高

+ `document.documentElement.clientWidth/clientHeight`  获取浏览器可视区域的宽高，没有 IE 兼容问题
+ `window.innerWidth/innerHeight`	IE <= 8 不支持，表示获取 *window* 可视区域的内部大小(带滚动条)
+ `window.outerWidth/outerHeight`	IE <= 8 不支持，表示整个浏览器窗体的大小，包括侧边栏（如果存在）、窗口镶边（window chrome）和调正窗口大小的边框（window resizing borders/handles）。该属性为只读，没有默认值
+ `window.screen.width/height` 返回屏幕的宽度或高度。在返回该值时，IE 会考虑缩放设置。只有在缩放比例为 100% 时，IE 才返回真实的屏幕宽度。
+ `window.screen.availWidth` 返回浏览器窗口可占用的水平宽度（单位：像素）。

#### clientTop 和 clientLeft

> 表示元素内容区域与元素的左上边距。只读属性。内容区域 = 内容 + *padding*，*padding* 之外就剩 *border*，所以这两个属性实际上指的是元素上左边框的宽度。

PS：这两个属性可以搭配 *offset* 家族获取任一元素与 *body* 之间的上左边距

代码：

```js
// 递归
// inner-body-left = inner.offsetLeft + inner.offsetParent.clientLeft + inner.offsetParent-body-left
function getDistance(ele){
	if(ele == document.body){
		return {
			top: 0,
			left: 0
		};
	}
	return {
		top: ele.offsetTop + 
        	ele.offsetParent.clientTop + 
        	getDistance(ele.offsetParent).top,
		left: ele.offsetLeft + 
        	ele.offsetParent.clientLeft + 
        	getDistance(ele.offsetParent).left
	}
}
```

## window

### window.open()

使用 `window.open()` 方法既可以导航到一个特定的 URL，也可以打开一个新的浏览器窗口。

语法：

```js
var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);
```

**返回值**

WindowObjectReference：打开的新窗口对象的引用。如果调用失败，返回值会是 `null`。如果父子窗口满足“**同源策略**”，可以通过这个引用访问新窗口的属性或方法。

```js
var win = window.open("../test.html","_blank",
    "height=400,width=400,top=10,left=10,resizable=yes");

win.resizeTo(500,500);	// 调整大小

win.moveTo(100,100);	// 移动位置

// 关闭新打开的窗口，close()方法无须满足同源策略，对任何窗口都能使用
win.close();

// 网站名解析:https://www.baidu.com
// https：协议
// www：服务器(可有可无)
// baidu.com：域名
```

返回的WindowObjectReference对象还有一个 `opener` 属性，其中保存着打开它的原始窗口对象。这个属性只在弹出窗口中的最外层 `window` 对象（top）中有定义，而且指向调用 `window.open()` 的窗口或框架。例如：

```js
var win = window.open("http://www.baidu.com/","_blank",
    "height=400,width=400,top=10,left=10,resizable=yes");

console.log(win.opener === window);   // true
```

**参数**

1. 要加载的URL
2. 窗口目标，相当于 a 标签的 target 属性
3. 一个特性字符串

通常只须传递第一个参数，最后一个参数只在不打开新窗口的情况下使用。

```js
// <iframe src="./2-location对象.html" width="800" height="400" name="ifr"></iframe>
window.open('https://www.baidu.com');
window.open("https://www.baidu.com",'_self');
// window.open("https://www.baidu.com",'ifr');
```

如果给 `window.open()` 传递的第二个参数并不是一个已经存在的窗口或框架，那么该方法就会根据在第三个参数位置上传入的字符串创建一个新窗口或新标签页。如果没有传入第三个参数，那么就会打开一个带有全部默认设置（工具栏、地址栏和状态栏等）的新浏览器窗口（或者打开一个新标签页）。在不打开新窗口的情况下，会忽略第三个参数。

第三个参数是一个逗号分隔的设置字符串，表示在新窗口中都显示哪些特性。下表列出了可以出现在这个字符串中的设置选项。

| 设置       | 值      | 说明                                                         |
| ---------- | ------- | ------------------------------------------------------------ |
| fullscreen | yes或no | 表示浏览器窗口是否最大化。仅限IE                             |
| height     | 数值    | 表示新窗口的高度。不能小于100                                |
| left       | 数值    | 表示新窗口的左坐标。不能是负值                               |
| location   | yes或no | 表示是否在浏览器窗口中显示地址栏。不同浏览器的默认值不同。如果设置为no，地址栏可能会隐藏，也可能会被禁用（取决于浏览器） |
| menubar    | yes或no | 表示是否在浏览器窗口中显示菜单栏。默认值为no                 |
| resizable  | yes或no | 表示是否可以通过拖动浏览器窗口的边框改变其大小。默认值为no   |
| scrollbars | yes或no | 表示如果内容在视口中显示不下，是否允许滚动。默认值为no       |
| status     | yes或no | 表示是否在浏览器窗口中显示状态栏。默认值为no                 |
| toolbar    | yes或no | 表示是否在浏览器窗口中显示工具栏。默认值为no                 |
| top        | 数值    | 表示新窗口的上坐标。不能是负值                               |
| width      | 数值    | 表示新窗口的宽度。不能小于100                                |

举例：

```js
// 这行代码会打开一个新的可以调整大小的窗口，窗口初始大小为400×400像素，并且距屏幕上沿和左边各10像素，且窗口大小可以改变
window.open("http://www.baidu.com/","_blank",
    "height=400,width=400,top=10,left=10,resizable=yes"); // 会打开新页面

window.open("http://www.baidu.com/","_self",
    "height=400,width=400,top=10,left=10,resizable=yes"); // 忽略第三个参数,不会打开新页面
```

### history对象

> 保存从窗口打开后，成功访问过的url的历史记录栈。出于安全方面的考虑，开发人员无法得知用户浏览过的 URL。不过，借由用户访问过的页面列表，同样可以在不知道实际 URL 的情况下实现后退和前进。

**属性**

`length` ：保存着历史记录的数量。这个数量包括所有历史记录，即所有向后和向前的记录。对于加载到窗口、标签页或框架中的第一个页面而言，`history.length` 等于1。

**方法**

- `history.go(n)` 参数n表示向后或向前跳转的页面数的一个整数值。负数表示向后跳转（类似于单击浏览器的“后退”按钮），正数表示向前跳转（类似于单击浏览器的“前进”按钮）。

```js
history.go(2)    // 前进两页
history.go(-1)   // 后退一页
history.go(0)	 // 刷新
```

- `history.back()`   后退一页
- `history.forward()`    前进一页

### location对象

> location对象保存当前窗口正在打开的URL的对象，它既是 `window` 对象的属性，也是 `document` 对象的属性（`window.location` === `document.location`）

**属性**

| 属性名   | 例子                         | 说明                                                         |
| -------- | ---------------------------- | ------------------------------------------------------------ |
| hash     | "#contents"                  | 返回 URL 中的 hash（#号后跟零或多个字符），如果 URL 中不包含散列，则返回空字符串 |
| host     | "www.zhihu.com:80"           | 返回服务器名称和端口号（如果有）                             |
| hostname | "www.zhihu.com"              | 返回不带端口号的服务器名称                                   |
| href     | "http://www.ceshi.com/index" | 返回当前加载页面的完整URL。而 `location` 对象的 `toString()` 方法也返回这个值 |
| pathname | "/search"                    | 返回URL中的目录和（或）文件名                                |
| port     | "8080"                       | 返回 URL 中指定的端口号。如果 URL 中不包含端口号，则这个属性返回空字符串 |
| protocol | "http:"                      | 返回页面使用的协议。通常是 http: 或 https:                   |
| search   | "?q=javascript"              | 返回URL的查询字符串。这个字符串以问号开头                    |
| origin   | "http://www.ceshi.com/index" | 返回页面使用协议+网站名                                      |

**方法**

- assign()方法，在当前窗口打开，可后退
  `location.assign(url)` => `location.href=url` => `location=url`

- replace()方法，在当前窗口打开，使用 replace 方法跳转地址不会体现到历史记录中，不可后退即替换当前页面的地址
  `location.replace(url)`

- reload()方法，重新加载页面
  - 普通刷新，优先从浏览器本地缓冲获取资源
    F5
    `history.go(0)`
    `location.reload(false)`，默认是false，可以不写

  - 强制刷新，无论本地是否有缓存，总是强制从服务器获取资源

    Ctrl + F5

    `location.reload(true)`

### navigator对象

包含有关访问者浏览器的信息。

- `navigator.language`：浏览器设置的语言；

- `navigator.appCodeName`（不准确）：属性是一个只读字符串，声明了浏览器的代码名。在所有以 Netscape 代码为基础的浏览器中，它的值是 "Mozilla"。为了兼容起见，在 Microsoft 的浏览器中，它的值也是 "Mozilla"，同时在safari在浏览器的 `console` 里运行`navigator.appCodeName` 得出的结果还是"Mozilla"，所以这个看起来并不实用，因为IE、chrome、safari返回的都是“Mozilla”。

- `navigator.appName`（不准确）：返回所使用浏览器的名称。由于兼容性问题，HTML5 规范允许该属性返回 "Netscape"。该属性并不一定能返回正确的浏览器名称。在基于 Gecko 的浏览器 （例如 Firefox）和基于 WebKit 的浏览器（例如 Chrome 和 Safari）中，返回的浏览器名称都是 "Netscape"。

- `navigator.appVersion`（已废弃）：属性可返回浏览器的平台和版本信息。该属性是一个只读的字符串。该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

- `navigator.platform`：是一个只读的字符串，声明了运行浏览器的操作系统和（或）硬件平台。可能的值有: "Win32", "Linux i686", "MacPPC", "MacIntel"等。

- `navigator.userAgent`（用的最多，也可以说相对更准确）：是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。主要是各家浏览器厂商都想要自己的浏览器被其他的兼容，所以都会或多或少的加上一些其他的信息在里面。
  代码：

```js
var browserName = navigator.userAgent.toLowerCase(); 
//区分手机端还是PC端
isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(browserName));
//判断浏览器
isIE = /msie/i.test(browserName) && !/opera/.test(browserName);
isIE6 = /msie 6.0/i.test(browserName);
isIE7 = /msie 7.0/i.test(browserName);
isIE8 = /msie 8.0/i.test(browserName);
isFirefox = /firefox/i.test(browserName);
isChrome = /chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName);
isOpera = /opera/i.test(browserName);
isSafari = /webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName));
//判断微信
isWeixin = /micromessenger/i.test(browserName);
```

 `navigator.onLine`：属性是一个只读的布尔值，声明了系统是否处于脱机模式。 

```js
// 监听浏览器联网状态，断网或者连上网会弹出相应提示
window.addEventListener("offline", function(e) {alert("offline");})
window.addEventListener("online", function(e) {alert("online");})
```

`navigator.cookieEnabled`：属性可返回一个布尔值，如果浏览器启用了 cookie，该属性值为 true。如果禁用了 cookie，则值为 false。 

### screen对象

screen 对象基本上只用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息，如像素宽度和高度等。该对象作用不大，我们一般不太使用。

### window的其他方法

+ `widnow.onresize`：当页面窗口大小发生变化的时候会触发该事件

- `resizeBy(w, h)`：根据指定的像素来调整窗口的大小。

  该方法定义指定窗口的右下角移动的像素，左上角将不会被移动(它停留在其原来的坐标)。有两个参数，第一个参数是必需的，指定窗口宽度增加的像素数。第二个参数可选，指定窗口高度增加的像素数。两个参数可为正数，也可为负数。

- `resizeTo(w, h)`：用于把窗口大小调整为指定的宽度和高度。

　　该方法两个参数都是必需的，用来指定设置窗口的宽度和高度，以像素计。

- `moveBy(xnum, ynum)`：可相对窗口的当前坐标把它移动指定的像素。

　　该方法有两个参数，第一个参数指定要把窗口右移的像素数，第二个参数指定要把窗口下移的像素数。

- `moveTo(x, y)`：可把窗口的左上角移动到一个指定的坐标。

　　该方法有两个参数，第一个参数指定窗口新位置的 x 坐标，第二个参数指定窗口新位置的 y 坐标。

- `scrollBy(xnum, ynum)`：可把内容滚动指定的像素数。

　　该方法有两个必需参数，第一个参数指定把文档向右滚动的像素数。第二个参数指定把文档向下滚动的像素数。

- `scrollTo(x, y)`：可把内容滚动到指定的坐标。

　　该方法有两个必需参数，第一个指定要在窗口文档显示区左上角显示的文档的 x 坐标。第二个参数指定要在窗口文档显示区左上角显示的文档的 y 坐标。

## URL

是统一资源定位符（Uniform Resource Locator）的简称，是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该如何处理它。

URL 的一般语法格式为：

```http
protocol://host[:port]/path/[?query]#fragment
```

| 组成     | 说明                                                   |
| -------- | ------------------------------------------------------ |
| protocol | 通讯协议                                               |
| host     | 域名或网络ID地址 www.baidu.com                         |
| port     | 端口号                                                 |
| path     | 资源路径 以 / 分隔的路径地址，表示主机上的文件存放地址 |
| query    | 参数 以 ? 键值对的形式表示，多个键值对通过 & 符号分隔  |
| fragment | 片段  # 后面的内容，常见于链接，锚点                   |



## 其他

### 函数防抖和节流

#### 函数防抖debounce

> **指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。**即一段时间内多次触发同一事件，只执行最后一次，或者只是在开始时执行一次，中间不执行。

函数防抖分为立即执行版和非立即执行版，取决于在事件首次触发时是否要执行一次

```js
var count = 0;
ele.onmousemove = debounce(function(){
    box.innerText = ++count;
}, 500);

// 非立即执行版，事件触发的时候不会立即执行一次，必须在连续wait时间中事件没有触发才会执行一次，如果在wait时间内事件触发，则重新开始计时
function debounce(func, wait){
    return function(){
      	if(func.timer){
            clearTimeout(func.timer);
        }
        func.timer = setTimeout(function(){
            func();
        }, wait);
    };
}

// 立即执行版，事件触发的时候立即执行一次，然后开始计时，之后和非立即执行版一样
function debounce(func, wait){
    return function(){
      	if(!func.timer){
            func();
        }else{
            clearTimeout(func.timer);
        }
        func.timer = setTimeout(function(){
            func.timer = null;
        }, wait);
    };
}
```

> 函数防抖可以理解为法师放技能的时候需要读条，技能条没读完又放技能就会重新读条

#### 函数节流 throttle

> 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
>

节流会稀释函数的执行频率。一般有两只实现方式，分别是时间戳版和定时器版

```js
var count = 0;
ele.onmousemove = throttle(function(){
    box.innerText = ++count;
}, 500);

// 时间戳版
function throttle(func, wait){
    var previous = 0;
    return function(){
    	var now = Date.now();
        if(now - previous > wait){
            func();
            previous = now;
        }
    };
}

// 定时器版
function throttle(func, wait){
    var timeout = null;
    return function(){
        if(!timeout){
        	timeout = setTimeout(function(){
                timeout = null;
            	func();
        	}, wait);            
        }
    };
}

// 如果想要立即执行的定时器版，只要把func()移到定时器外面即可
function throttle(func, wait){
    var timeout = null;
    return function(){
        if(!timeout){
            func();
        	timeout = setTimeout(function(){
                timeout = null;
        	}, wait);            
        }
    };
}
```

### 获取元素的样式

行内样式可以通过 `ele.style.styleName` 获取

内联样式和外联样式可以通过以下两种方式获取：

1. `window.getComputedStyle(element, [pseudoElt]).styleName`	返回的是一个带单位的字符串

   + 仅用于谷歌和火狐等标准浏览器
   + *element* 用于获取计算样式的元素
   + *pseudoElt* 指定一个要匹配的伪元素的字符串。必须对普通元素省略（或 *null*），一般都写成 *null*，如果要获取伪元素的样式，则写上要获取的伪元素的名字

2. `element.currentStyle.styleName` 仅用于 *IE 9* 以下

3. 兼容写法

   <pre style="background-color: rgb(39, 40, 34);color: rgb(255, 204, 153);padding: 20px 0;">
   	/**
       * 获取任意元素的css样式
       **/
       function getStyle(ele,styleName){
           if(ele.currentStyle){
               return ele.currentStyle[styleName];
           }else{
               return window.getComputedStyle(ele,null)[styleName];
           }
       }    
   </pre>

   

### 修改浏览器滚动条样式

我们可以使用以下伪元素选择器去修改各式 *webkit* 浏览器的滚动条样式:

- `::-webkit-scrollbar` — 整个滚动条.
- `::-webkit-scrollbar-button` — 滚动条上的按钮 (上下箭头)
- `::-webkit-scrollbar-thumb` — 滚动条上的滚动滑块
- `::-webkit-scrollbar-track` — 滚动条轨道
- `::-webkit-scrollbar-track-piece` — 滚动条没有滑块的轨道部分
- `::-webkit-scrollbar-corner` — 当同时有垂直滚动条和水平滚动条时交汇的部分
- `::-webkit-resizer` — 某些元素的corner部分的部分样式(例：*textarea* 的可拖动按钮)

好看的样式：

```css
body::-webkit-scrollbar {
    /*滚动条整体样式*/
    width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
}
body::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius   : 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
}
body::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #ededed;
    border-radius: 10px;
}
```

### 新的动画函数

#### 传统动画的弊端

编写动画的关键是循环间隔的设置，一方面，循环间隔足够短，动画效果才能显得平滑流畅；另一方面，循环间隔还要足够长，才能确保浏览器有能力渲染产生的变化。

大部分的电脑显示器的刷新频率是 *60HZ*，也就是每秒钟重绘60次。大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也不会提升。因此，最平滑动画的最佳循环间隔是 *1000ms / 60* ，约为 *16.7ms*。

在实际项目中我们经常会遇到生成动画的需求，传统方法是通过使用 `setTimeout` 和 `setInterval` 进行实现，但是定时器动画有两个弊端：

- 时间间隔并不好拿捏，设置太短浏览器重绘频率太快会产生性能问题，太慢的话又显得像PPT不够平滑。
- 它们实际上只是把任务添加到了任务队列中，但是如果前面的任务还没有执行完成，它们必须要等待。 所要执行的动画就会被搁置。



为了解决这个问题 HTML5 加入了 `requestAnimationFrame`

特点如下:

+ `requestAnimationFrame` 不需要设置时间，采用系统时间间隔，保持最佳绘制效率，能达到最佳的动画效果。
+ `requestAnimationFrame` 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成。
+ 当 `requestAnimationFrame()` 是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销

#### requestAnimationFrame

MDN的上的解释：

> `window.requestAnimationFrame()` 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。 

**语法**

```js
var requestId = requestAnimationFrame(callback);
```

这会让 `callback` 函数在浏览器每次重绘的最近时间运行。

多个 `requestAnimationFrame` 回调只会有一次几何重新计算和重绘，而不是多次。

**注意：**requestAnimationFrame()调用一次就执行一次，不会循环执行，如果想要循环执行的效果，那么可以在回调函数内部再次调用requestAnimationFrame()，形成循环。写法如下：

```js
requestAnimationFrame(function fn(){
    requestAnimationFrame(fn);
});
```



**返回值**

请求 ID ，是一个整数，是回调列表中唯一的标识。是个非零值，没别的意义。可以传这个值给 `window.cancelAnimationFrame()` 以取消回调函数。 

```js
// 取消回调的周期执行
cancelAnimationFrame(requestId);
```

**回调函数参数**

requestAnimationFrame会默认给回调函数（callback） 传递一个参数 —— 从页面加载开始经过的毫秒数。这个时间也可通过调用 `performance.now()` 得到。如果在回调函数中需要使用这个参数，需要给回调函数写一个形参，在回调函数中，这个形参代表的就是requestAnimationFrame传给回调函数的参数。如下：

```js
// 给requestAnimationFrame默认传递的参数一个名字：time
requestAnimationFrame(function fn(time){
    console.log(time);
    requestAnimationFrame(fn);	
})
```

> 注：`performance.now()` 返回一个表示从性能测量时刻开始经过的毫秒数

**例子**

```html
<div id="box"></div>
<script type="text/javascript">
    var n = 0;
    function move(){
        n += 5;
        box.style.left = n + "px";
        if(n < 300) requestAnimationFrame(move);
    }
    move();
</script>
```

**与`setInterval` 对比**

```js
// 让页面加载两秒
var count = 0;

// requestAnimationFrame实现
window.onload = function (){
    var old = performance.now();
    var end = null;
    function fn(time){
    	console.log(time - old);
    	old = time;
    	count ++;
    	if(count === 20){
    		window.cancelAnimationFrame(end);
        	return;	// 这里如果不return的话，后面end=requestAnimationFrame(fn)还会继续执行
    	}
    	end = requestAnimationFrame(fn);
    }
    requestAnimationFrame(fn);
};
// 另一种写法
window.onload = function(){
    var old = performance.now();
    var end = null;
    requestAnimationFrame(function fn(time){
        console.log(time - old);
        old = time;
        count++;
        if(count < 20){
            end = requestAnimationFrame(fn);
        }else{
            window.cancelAnimationFrame(end);
            end = null;
        }
    });
};

// setInterval实现
window.onload = function (){
    var timer = setInterval(function (){
    	count ++;
    	var time = performance.now();
    	console.log(time - old);
    	if(count === 20){
    		clearInterval(timer);
    	}
    	old = time;
    },1000/60)
}
```

误区：clearInterval()、clearTimeout()执行只会让定时器不执行下一次，本次会一直执行到底。如果clearInterval()和clearTimeout()后面还有语句，也会执行。

#### 时间型动画

**setInterval()创建动画的缺点：**

- 无法控制动画完成的时长
- 可能由于别的任务堵塞，导致定时器执行时间产生巨大波动

这些问题可以通过requestAnimationFrame创建动画解决。

**补间动画：**在固定的时间点，有固定的位置。只需要根据运动的已过时间t计算移动距离s

使用requestAnimationFrame创建一个通用的动画函数：

```js
/**
 * 补间动画方法
 * @param { Number } start 开始数值
 * @param { Number } end   结束数值
 * @param { Number } time  补间时间
 * @param { Function } callback 每帧的回调函数
 **/
function animate(start, end, time, callback){
	var startTime = performance.now(); // 设置开始的时间戳
	var differ = end - start; // 拿到数值差值
	// 创建每帧之前要执行的动画
    function loop(now){
        var passTime = now - startTime; // 获取当前时间和开始的时间差
        var per = passTime / time; // 计算当前已过百分比
        if( per >= 1 ){  // 判读如果已经执行
            per = 1; // 设置为最后的状态
        }
        var pass = differ * per; // 通过已过时间的百分比 * 开始结束数值差得出当前的数值
        callback(pass); // 调用回调函数,把数值传递进去,这里的回调函数应该是移动函数
        if(per < 1) requestAnimationFrame(loop) //下一帧调用每帧之前要执行的函数
    }
    requestAnimationFrame(loop) // 下一帧调用每帧之前要执行的函数
}
```

带有时序函数的动画封装：

```js
function animate(timing, draw, duration){
    var start = performance.now();
    requestAnimationFrame(function animate(time){
        // timeFraction 从 0 增加到 1
        var timeFraction = (time - start) / duration;
        if(timeFraction > 1) timeFraction = 1;
        
        // 计算当前动画状态
        var process = timing(timeFraction);
        
        draw(process); // 绘制
        
        if(timeFraction < 1){
            requestAnimationFrame(animate);
        }
    })
}
```

解析：

这里animate函数接受3个描述动画的基本参数：

+ `duration`  动画运行的总毫秒数。 比如 1000

+ `timing(timeFraction)`  计算动画进度的函数（ 时序函数）。获取从 0 到 1 的小数时间，返回动画进度，通常也是从 0 到 1。类似 CSS 属性 `transition-timing-function`，传入一个已过去的时间与总时间之比的小数（0 代表开始，1 代表结束），返回动画完成度（类似 Bezier 曲线中的 y）。

+ `draw(process)`  获取动画完成状态并绘制的函数。值 `progress = 0` 表示开始动画状态，`process = 1` 表示结束状态。这是实际绘制动画的函数。例如：

```js
function draw(process){
    box.style.left = process + "px";
}
```

与 CSS 动画不同，我们可以在这里设计任何时序函数和任何绘图函数。时序函数不受 Bezier 曲线的限制。并且 `draw` 不局限于操作 CSS 属性，还可以为类似烟花动画或其他动画创建新元素。 



#### 时序函数

**线性时序函数**

```js
function linear(timeFraction){
	return timeFraction;
}
```

**幂函数**

```js
function quad(timeFraction) {
  return Math.pow(timeFraction, 2)	// 抛物线
}
```

**拉弓（先退再进）**

```js
// 其实就是一个开口向上，过原点，对称轴在y轴右边的二次函数
function circle(x, timeFraction){
	return Math.pow(timeFraction, 2) * ((x+1) * timeFraction - x);
}
```

**弹跳**

bounce 函数的效果类似于我们抛球后，球落下然后弹跳几次停下来，但是顺序是相反的。

```js
function bounce(timeFraction){
    for(var a = 0,b = 1, result; 1; a += b, b/= 2){
        if(timeFraction >= (7 - 4 * a) / 11){
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}
```

**伸缩动画**

另一个“伸缩函数”接受附加参数 x 作为“初始范围”。

```js
function elastic(x, timeFraction){
	return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction); 
}
```

#### 逆转：ease

有一组时序函数。它们的直接应用称为“easeIn”。有时我们需要以相反的顺序显示动画。这是通过“easeOut”变换完成的。

**easeOut**变换

在“easeOut”模式中，我们将 `timing` 函数封装到 `timingEaseOut`中：

```js
timingEaseOut(timeFraction) = 1 - timing(1 - timeFraction);
```

换句话说，我们有一个“变换”函数 `makeEaseOut`，它接受一个“常规”时序函数 `timing` 并返回一个封装器，里面封装了 `timing` 函数： 

```js
// 接受时序函数，返回变换后的变体
function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}
```

 例如，我们可以使用上面描述的 `bounce` 函数： 

```javascript
var bounceEaseOut = makeEaseOut(bounce);
```

 这样，弹跳不会在动画开始时执行，而是在动画结束时。这样看起来更好： 

- 常规弹跳 —— 物体在底部弹跳，然后突然跳到顶部。
- `easeOut` 变换之后 —— 物体跳到顶部之后，在那里弹跳。

```js
function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

let bounceEaseOut = makeEaseOut(bounce);

brick.onclick = function() {
    animate({
        duration: 3000,
        timing: bounceEaseOut,
        draw: function(progress) {
            box.style.left = progress * 600 + 'px';
        }
    });
};
```

#### easeInOut变换

我们还可以在动画的开头和结尾都显示效果。该变换称为“easeInOut”。

给定时序函数，我们按下面的方式计算动画状态：

```js
if (timeFraction <= 0.5) { // 动画前半部分
  return timing(2 * timeFraction) / 2;
} else { // 动画后半部分
  return (2 - timing(2 * (1 - timeFraction))) / 2;
}
```

封装后：

```js
function makeEaseInOut(timing) {
  return function(timeFraction) {
    if (timeFraction < .5)
      return timing(2 * timeFraction) / 2;
    else
      return (2 - timing(2 * (1 - timeFraction))) / 2;
  }
}

bounceEaseInOut = makeEaseInOut(bounce);
```

