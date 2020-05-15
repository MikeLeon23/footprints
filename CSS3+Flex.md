# CSS3介绍

## CSS3简介

> CSS3 是 CSS（层叠样式表）技术的升级版本，于 1999 年开始制订，2001 年 5 月 23 日 W3C 完成了 CSS3 的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。
>
> CSS 演进的一个主要变化就是 W3C 决定将 CSS3 分成一系列模块。浏览器厂商按 CSS 节奏快速创新，因此通过采用模块方法，CSS3 规范里的元素能以不同速度向前发展，因为不同的浏览器厂商只支持给定特性。但不同浏览器在不同时间支持不同特性，这也让跨浏览器开发变得复杂。在新的或实验性的 CSS3 功能成为正式的 CSS3 规范之前，或者在一个规范的功能还没有最后确定之前，CSS 厂商前缀是浏览器公司提供对齐支持的一种方式。

可能使用的前缀有:

> Chrome: -webkit-
>
> Firefox: -moz-
>
> IE: -ms-
>
> IOS: -webkit-
>
> Opera: -o-
>
> safari: -webkit-

在大多数情况下，当你需要使用 CSS3 规范中的属性且需要使用一个前缀的时候，针对所使用的浏览器，添加上面的前缀就可以了。例如：如果想要添加一个 CSS 过渡效果，使用`transition`属性，并且先添加如下前缀:

```css
-webkit-transition: background 0.5s ease;
-moz-transition: background 0.5s ease;
-o-transition: background 0.5s ease;
transition: background 0.5s ease;
```

用户的浏览器将会对它所理解的过渡功能版本做出响应，而忽略其他的版本。目前浏览器厂商对于全面实现所有的 CSS3 功能竭尽全力，并且对于大多数现代浏览器来说，需要添加前缀的属性的数目正在快速减少。

**对于那些功能需要添加前缀，可以浏览: http://shouldiprefix.com/，处理添加前缀可以使用`Autoprefixer`插件，使用方式查看https://github.com/postcss/autoprefixer**

## CSS3新内容

### 选择器

CSS3 新增了许多灵活查找元素的方法，极大的提高了查找元素的效率和精准度。CSS3 选择器与 jQuery 中所提供的绝大部分选择器兼容。

**属性选择器**

通过属性来选择元素

- `E[attr]` 选择包含 attr 属性的所有元素
- `E[attr=mydemo]` 选择属性 attr 的值等于 mydemo 字符的所有元素
- `E[attr*=mydemo]` 选择属性 attr 的值任意位置包含 mydemo 字符的所有元素
- `E[attr^=mydemo]` 选择属性 attr 的值开始位置包含 mydemo 字符的所有元素
- `E[attr$=demos]` 选择属性 attr 的值结束位置包含 mydemo 字符的所有元素

示例：

```html
<style>
	p[title] {
		color: red;
	}
	p[title="hello"] {
		color: green;
	}
	p[class*="e"] {
		color: orange;
	}
	p[class$="o"] {
		color: #0000ff;
	}
	p[class^="w"] {
		color: purple;
	}
	p[data-name] {
		font-size: 25px;
	}
</style>
<body>
	<p title="hello">今天天气真好啊</p>
	<p title="nice">今天天气真好啊</p>
	<p class="word">今天天气真好啊</p>
	<p class="text">今天天气真好啊</p>
	<p class="texa">今天天气真好啊</p>
	<p class="ao">今天天气真好啊</p>
	<p data-name="today">今天天气真好啊</p>
</body>
```

**伪类选择器**

除了以前学过的:link、:active、:visited、:hover，CSS3 又新增了其它的伪类选择器

- 结构伪类  重点通过 E 来确定元素的父元素。 
  - `E:first-child` 第一个子元素 
  - `E:last-child` 最后一个子元素 
  - `E:nth-child(n)` 第 n 个子元素 
  -  `E:nth-last-child(n)` 同 `E:nth-child(n)` 相似，只是倒着计算 + n 是支持简单表达式的 
  - **注意: n 是从 1开始的自然数 E:nth-child(0) 无效**
- 目标伪类 
  - `E:target`  结合锚点进行使用，处于当前锚点的元素会被选中 

```html
<style>
	li:target{ 
		font-size: 30px; color: blue; 
	}
<style>
<body>
    <a href="#li3">点我</a> 
    <li id="li3">li3</li> 
</body>`
```

- 伪元素 
  - `E::before`、`E::after` 默认行内元素 `content` 属性必须写 
  - `E::first-letter`文本的第一个字母或字 
  - `E::first-line` 文本第一行 
  - `E::selection` 被选中的文本 
  - ":" 与 "::" 用于区分伪类和伪元素

### 颜色的变化

三种颜色的表达方式

- **#000000**:  十六进制表示颜色 ff0000/f00 表示红色 00ff00/0f0 表示绿色 0000ff/00f 表示蓝色
- **#00000000**:  8位数十六进制颜色的最后两位表示透明度大小 
- **rgba(0,0,0,0)/rgb(0,0,0)**:  Red、Green、Blue、Alpha 即 RGBA 
- **hsla(0,20%,50%,.7)**:  Hue、Saturation、Lightness、Alpha 即 HSLA 
  - H 色调 取值范围 0~360，360表示红色、120表示绿色、240表示蓝色 
  - S 饱和度 取值范围 0%~100% 
  - L 亮度 取值范围 0%~100% 
  - A 透明度 取值范围 0~1

关于透明度： 

1、 opacity只能针对整个盒子设置透明度，子盒子及内容会继承父盒子的透明度 2、 transparent不可调节透明度，始终完全透明。一般元素透明使用opacity, 制作制作遮罩层常用 rgba，制作三角形常用 transparent

### 阴影

**文本阴影**

```
text-shadow: h-shadow(x) v-shadow(y) blur(模糊半径) color(颜色)
```

- 水平偏移量，正值向右 负值向左

- 垂直偏移量，正值向下 负值向上

- 模糊半径，不能为负值

- 可以有多个影子，用逗号隔开

**盒子阴影**

```txt
box-shadow: h-shadow(x) v-shadow(y) blur(模糊半径) spread(扩展范围) color(颜色) inset(是否内嵌,可省略)
```

### 盒模型

CSS3 中可以通过`box-sizing`来指定盒模型，即可指定为`content-box`、`border-box`，这样我们计算盒子大小的方式就发生了改变

- `content-box`: 对象的实际宽度等于设置的 width 值和 border、padding 之和 (默认方式)
- `border-box`： 对象的实际宽度就等于设置的 width 值，即使定义有 border 和 padding 也不会改变对象的实际宽度，即 ( Element width = width )

我们把这种方式叫做 css3 盒模型

### 边框图片

`border-image` 属性是一个简写属性，用于设置以下属性：

- `border-image-source` 图片来源
- `border-image-slice` 图片边框向内偏移量 不写单位,默认像素,也可以是百分比
- `border-image-width` 边框宽度
- `border-image-outset` 边框图像区域超出边框的量
- `border-image-repeat` 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched 默认) 可以写 2 个值,一个代表水平方向,一个代表垂直方向

示例:

```css
.box {
	border: 20px solid red;
	border-image-source: url("img/bg.png");
	border-image-slice: 20;
	border-image-outset: 20;
	border-image-width: 20px;
	border-image-repeat: stretch;
	background-color: orange;
}
```

简写形式存在争议具体请参考[MDN border-image 语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image#正式语法)

### 渐变

**线性渐变**（linear-gradient）

沿着某条直线朝一个方向产生渐变效果

语法: 

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

- direction: 方向，可以是角度(10deg)顺时针，也可以是 to top/left/right/bottom

```css
background: linear-gradient(right ,red 60%,orange 80%);
```

- 颜色后面可以跟百分比，表示从百分几开始渐变，渐变的兼容写法（方向是相反的，而且不带to）

```css
background: -webkit-linear-gradient(right ,red 60%,orange 80%);
```

**重复渐变**（repeating-linear-gradient）

```css
background: repeating-linear-gradient(to right,red 0, red 10%, purple 10%, purple 20%);
```

可简写为：

```css
background: repeating-linear-gradient(to right,red 0 10%, purple 10% 20%);
```

一般是通过ui设计稿中直接提取的渐变、角度、颜色比重

**径向渐变**

从一个中心点开始沿着四周产生渐变效果

语法：

```css
background: radial-gradient((shape? size? (at position?))?, start-color, ..., last-color);
```

`?`表示可以省略

- shape 渐变形状 : circle | ellipse(椭圆)
- size 渐变大小:
  - closest-side（指定径向渐变的半径长度为从圆心到离圆心最近的边
  - closest-corner （指定径向渐变的半径长度为从圆心到离圆心最近的角）
  - farthest-side（指定径向渐变的半径长度为从圆心到离圆心最远的边）
  - farthest-corner（指定径向渐变的半径长度为从圆心到离圆心最远的角）

也可指定大小，需要注意的是，若渐变形状为圆形，则该渐变大小只能设置一个数且不能为百分数，而椭圆既可以为具体数值也可以为百分数。

**注意:** 

只传一个值，默认形状为圆形，传入的是半径大小，不能为百分比;
传两个值则代表形状为椭圆形，第一个是x轴半径，第二个是y轴半径
圆心位置参数一定要置于radial-gradient()第一个参数的末尾，顺序千万不能放反了

**重复渐变** 

```css
background: repeating-radial-gradient(circle at center,#f00 0,#f00 10%,#ff0 10%,#ff0 20%);
```

可简写为: 

```css
background: repeating-radial-gradient(circle at center,#f00 0 10%,#ff0 10% 20%);
```

### 背景图片加强

- background-size，设置背景图片的尺寸
  - `cover` 会自动调整缩放比例，保证图片始终填充满背景区域，如有溢出部分则会被隐藏
  - `contain` 会自动调整缩放比例，保证图片始终完整显示在背景区域
  - 注意：是需要根据高度还是宽度适配 width height 直接设置宽高(px 值或者百分比)

- background-origin(原点，起点)，设置背景定位的原点
  - `border-box` 以边框做为参考原点；
  - `padding-box` 以内边距做为参考原点；
  - `content-box` 以内容区做为参考点；

- background-clip，设置背景区域 clip(裁切)
  - `border-box` 裁切边框以内为背景区域；
  - `padding-box` 裁切内边距以内为背景区域；
  - `content-box` 裁切内容区做为背景区域

- 以逗号分隔可以设置多背景，可用于自适应局

```css
background: url("img/1.jpg") no-repeat left top, url(img/2.jpg) no-repeat right top;
```

### 过渡

**transition**

过渡，实现元素不同状态间的平滑过渡，经常用来制作动画效果

```css
transition: transition-property transition-duration transition-timing-function transition-delay;
```

- transition-property：规定应用过渡的 CSS 属性的名称 (一般都写 all);
- transition-duration：定义过渡效果花费的时间。默认是 0
- transition-timing-function：规定过渡效果的时间曲线。默认是 "ease"。还有linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
- transition-delay：规定过渡效果何时开始。默认是 0

**transform**

```css
transform: scale? translate? rotate? skew?;
```

- 缩放。scale(x, y) 可以对元素进行水平和垂直方向的缩放，x、y的取值可为小数，不可为负值，设置一个值时表示 x、y同时进行缩放。也可以单独缩放一个方向，scaleX(x)，scaleY(y)。
- 移动。translate(x, y) 可以改变元素的位置，x、y可为负值。也可以单独朝一个方向移动，translateX()，translateY()，translateZ()
- 旋转，rotate(deg) 可以对元素进行旋转，正值为顺时针，负值为逆时针。也可以单独绕一根轴旋转，rotateX()，rotateY()，rotateZ()
- 倾斜，skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换，skewX(x-angle)定义沿着 X 轴的 2D 倾斜转换，skewY(y-angle)定义沿着 Y 轴的 2D 倾斜转换。

### 透视

**perspective**有两种写法

1. 作为一个属性，设置给父元素，作用于所有 3D 转换的子元素 

2. 作为 transform 属性的一个值，作用于元素自身，子元素的 3D 效果可呈现。**透视会产生近大远小的效果**， `backface-visibility：visible/ hidden` 设置元素背面是否可见

结合透视和 3D 转换画一个立方体:

```html
<style>
	* {
		margin: 0;
		padding: 0;
	}
	.box {
		position: relative;
		width: 200px;
		height: 200px;
		margin: 50px auto;
		border: 1px dashed red;
		transform-style: preserve-3d;
		transition: all 2s linear;
		transform: rotateX(25deg) rotateY(25deg);
	}

	.box div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.font {
		transform: translateZ(100px);
		background-color: blue;
	}
	.behand {
		transform: translateZ(-100px);
		background-color: pink;
	}
	.left {
		transform: translateX(-100px) rotateY(90deg);
		background-color: red;
	}
	.right {
		transform: translateX(100px) rotateY(90deg);
		background-color: brown;
	}
	.top {
		transform: translateY(-100px) rotateX(90deg);
		background-color: yellow;
	}
	.bottom {
		transform: translateY(100px) rotateX(90deg);
		background-color: purple;
	}

	.box:hover {
		transform: rotateX(360deg) rotateY(360deg);
	}
</style>
<body>
	<div class="box">
		<div class="font"></div>
		<div class="behand"></div>
		<div class="left"></div>
		<div class="right"></div>
		<div class="top"></div>
		<div class="bottom"></div>
	</div>
</body>
```



### 动画

动画是 CSS3 中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果

**必要元素：**

- 通过`@keyframes`指定动画序列；
- 通过百分比将动画序列分割成多个节点；亦可以使用 `from/to` 不推荐
- 在各节点中分别定义各属性
- 通过 animation 将动画应用于相应元素

**关键属性:**

- `Animation-name` 动画名称(必填)
- `Animation-duration` 动画持续时间(必填)
- `animation-timing-function`
  - `linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)` 特定的贝塞尔曲线类型，4 个数值需在[0, 1]区间内 
  -  `steps(n)` 参数 n 为指定的间隔数，即把动画分为 n 步阶段性展示，n 必须是正整数
- `animation-delay` 动画延迟（只是第一次）
- `animation-iteration-count` 重复次数 infinite 无限次
- `animation-direction`动画是否重置后再开始播放
  - `alternate` 动画直接从上一次停止的位置开始执行，倒着来
  - `normal` 动画第二次直接跳到 0%的状态开始执行
- `animation-fill-mode`动画执行完毕后状态
  - `forwards` 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。就是让元素停止在动画结束的那一刻。
  - `backwards` 在 `animation-delay` 当动画完成后，保持最开始的第一帧的属性值（在第一个关键帧中定义）。就是让元素在动画结束后，回到动画开始的那一刻。
  - `both` 设置对象状态为动画结束或开始的状态，结束时状态优先。从效果上来看，和forwards是一样的。
- `animation-play-state` 动画状态（ `running` 播放 和 `paused` 暂停 ）

简写语法:

 ```css
animation: name duration timing-function delay iteration-count direction fill-mode;
 ```

**name duration 必须写,其余可以都不写**，而且前两个的顺序一般不改变（可以改变，但没必要）

举例：

```html
<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: orange;
		animation: move 2s 2s 5;	// 动画
	}
	.d2 {
		width: 100px;
		height: 100px;
		background-color: red;
		margin: 50px;
		transition: all ease 1s;	// 过渡
	}
	.d2.active {
		transform: translateX(200px);
	}
	@keyframes move {
		0% {
			transform: translate(0px);
		}
		100% {
			transform: translate(300px);
		}
	}
</style>
<body>
	<div class="box"></div>
	<div class="d2"></div>
</body>
```

### 帧动画

在应用 CSS3 动画时，有个控制时间的属性 timing-function 。它的取值中除了常用到的 贝塞尔曲线 以外，还可以是 **steps()** 函数。用以实现跳跃显示的效果，比如时钟上的秒针。

**steps(n,start/end)** 

- 第一个参数 number 为指定的间隔数，即把动画分为 n 步阶段性展示

- 第二个参数默认为 end，设置最后一步的状态，start 为结束时的状态，end 为开始时的状态(不用记,第二个参数不写就行)

**注意: n 必须是正整数**

### 过渡/动画监听

**过渡的事件**

过渡只有监听结束的方法，start 和 run 的监听方法在开发状态

监听语法：

```js
ele.addEventListener("transitionend", myFunction);
```

**动画的事件**

- `animationstart` CSS 动画开始后触发
- `animationiteration` CSS 动画重复执行时触发
- `animationend` CSS 动画完成后触发

监听语法: 

```js
ele.addEventListener("animationend", myStartFunction);
```

举例：

```js
var box = document.querySelector(".box");
var d2 = document.querySelector(".d2");
box.addEventListener("animationstart", function() {
	console.log("动画开始了...");
});
box.addEventListener("animationiteration", function() {
	console.log("动画重复执行了...");
});
box.addEventListener("animationend", function() {
	console.log("动画执行结束了...");
	//开启d2的过渡效果
	box.classList.add("active");
});
// 过渡只有监听结束的方法,  start 和 run 的监听方法在开发状态
d2.addEventListener("transitionend", function() {
	console.log("过渡结束...");
});
```

### calc(expression)

`calc(expression)` 函数用于动态计算长度值

- `expression` 	必须是一个数学表达式，结果将采用运算后的返回值。
- 需要注意的是，+ - 运算符前后都需要保留一个空格(* / 不需要但也建议保留一个空格)，例如：`width: calc(100% - 10px)`
- 任何长度值都可以使用`calc()`函数进行计算
- `calc()`函数支持 "+", "-", "*", "/" 运算
- `calc()`函数使用标准的数学运算优先级规则
- 要注意单位的位置，可以写`width:calc(100px / 2);`但像`width:clac(100 / 2px)`这样写则是错的

例子：

```css
header{
    width: calc(100% - 200px);	// 这样写的确很方便
    height: 80px;
    margin: 0 auto;
    background-color: red;
}
```



## Flex布局

布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖`display`属性 + `position`属性 +`float`属性，对于某些特殊布局非常不方便，比如，垂直居中就不容易实现。

2009年，W3C 提出了一种新的方案----[Flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。



### Flex布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box{
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```css
.box{
  display: inline-flex;
}
```

注意，设为 Flex 布局以后，<font color="red">子元素的`float`、`clear`和`vertical-align`属性将失效。</font>

### 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

### 容器的属性

以下6个属性设置在容器上。

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

#### flex-direction

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

它可能有4个值。

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

#### flex-wrap

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png)

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

它可能取三个值。

（1）`nowrap`（默认）：不换行。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)

（2）`wrap`：换行，第一行在上方。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)

（3）`wrap-reverse`：换行，第一行在下方。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

#### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

#### justify-content

`justify-content`属性定义了项目在主轴上的对齐方式。

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

#### align-items

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

#### align-content

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

该属性可能取6个值。

- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`（默认值）：轴线占满整个交叉轴。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

### 项目的属性

以下6个属性设置在项目上。

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

#### order

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0，可取负值。

```css
.item {
  order: <integer>;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)

#### flex-grow

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

#### flex-shrink

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)

#### flex-basis

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

#### flex

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

除了以上两种取值方式外，`flex`后面跟其它值的情况：

+ 当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：

```css
.item {flex: 1;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
```

+ 当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：

```css
.item-1 {flex: 0%;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
.item-2 {flex: 24px;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 24px;
}
```

+ 当 flex 取值为两个非负数字，则分别视为 flex-grow 和 flex-shrink 的值，flex-basis 取 0%，如下是等同的：

```css
.item {flex: 2 3;}
.item {
    flex-grow: 2;
    flex-shrink: 3;
    flex-basis: 0%;
}
```

+ 当 flex 取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，flex-shrink 取 1，如下是等同的：

```css
.item {flex: 200 300px;}
.item {
    flex-grow: 200;
    flex-shrink: 1;
    flex-basis: 300px;
}
```

#### align-self

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)

### margin在flex中的表现

在 flex 格式化上下文中，设置了 `margin: auto` 的元素，在通过 `justify-content` 和 `align-*` 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 `margin` 中去 。

<font color="red">需要注意的是：因为`margin`是将剩余空间分配给了元素，所以添加了`margin`后，`justify-content` 和 `align-items/content/self`属性就不能再被使用了。</font>

**flex布局下使用margin实现居中**

```css
.box {
    display: flex;
}
.inner {
    margin: auto;  /* 水平且垂直居中 */
    /* margin: auto 0; 的效果等价于align-items: center */
    /* margin-top: auto; 的效果等价于align-items: flex-end */
}
```

**使用margin实现space-between/around/evenly效果**

```html
<head>
    ...
    <style>
        .box{
            display: flex;
            width: 800px;
            margin: 30px auto;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <ul class="box">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</body>
```

对于以上HTML，使用margin模仿space-between/around/evenly的写法：

```css
/* 模仿space-around */
li{
    margin: 0 auto;
}

/* 模仿space-between */
li{
    margin: 0 auto;
}
li:first-child{
    margin-left: 0;
}
li:last-child{
    margin-right: 0;
}

/* 模仿space-evenly */
li{
    margin-left: auto;
}
li:last-child{
    margin-right: auto;
}
```

