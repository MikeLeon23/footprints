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



### client家族

