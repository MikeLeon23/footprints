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

#### `offsetParent`

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



#### `scrollWidth` 和 `scrollHeight`

> 检测盒子的宽高 内容高度 + padding。（调用者：节点元素。属性。） 盒子内容的宽高。（如果有内容超出了，显示内容的宽/高度）

注意：假设元素内容超出盒子大小，盒子有 *padding* 属性

+ 有 `overflow: auto/hidden/scroll` 属性，则元素宽度 = 内容宽度 + 左 *padding* 值，元素高度 = 内容高度 + 上下 *padding* 值
+ 没有  `overflow: auto/hidden/scroll` 属性，则元素宽度 = 内容宽度 + 左 *padding* 值，元素高度 = 内容高度 + 上 *padding* 值



#### `scrollTop` 和 `scrollLeft`

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



#### `onscroll` 事件

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

   

### 小知识

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

