# HTML5介绍

## HTML5简介

2014年10月29日，万维网联盟宣布，经过接近8年的艰苦努力，该标准规范终于制定完成HTML5，它是HTML4.0升级版，并不仅仅只是做为HTML标记语言的一个最新版本，更重要的是它制定了Web应用开发的一系列标准，成为第一个将Web做为应用开发平台的HTML语言。与传统的技术相比，HTML5 的语法特征更加明显，它定义了一系列新元素，如新语义标签、智能表单、多媒体标签等，可以帮助开发者创建富互联网应用，还提供了一些Javascript API，如地理定位、重力感应、硬件访问(页面要求访问相册)等，可以在浏览器内实现类原生应用，甚至结合Canvas我们可开发网页版游戏。

## HTML5增改内容

### 简化语法

1. 属性值可以省略引号 `eg: ` 不推荐这种写法

2. 具有布尔值的属性（比如：disabled ，readonly）只写属性值代表 true `eg:<input type="checkbox" checked> `

### HTML新增标签

**布局标签**

- `section`: 表示页面中的一个内容区块,比如章节、页眉、页脚或页面的其他部分。可以和`h1`、`h2`……等元素结合起来使用，表示文档结构。
- `article`: 表示页面中一块与上下文不相关的独立内容。比如一篇文章。
- `aside`: 表示一个页面的一部分，它的内容跟这个页面的其它内容的关联性不强，或者是没有关联，单独存在。`aside`元素通常显示成侧边栏(`sidebar`)或一些插入补充内容。通常用来在侧边栏显示一些定义，比如目录、索引、术语表等；也可以用来显示相关的广告宣传，作者的介绍，相关链接，当前页内容简介等。
- `header`: 表示页面中一个内容区块或真个页面的标题。
- `hgroup`: 表示对整个页面或页面中的一个内容区块的*标题*进行组合。
- `footer`: 表示整个页面或页面中一个内容区块的脚注。一般来说，他会包含创作者的姓名、创作日期以及创作者的联系信息。
- `nav`: 表示页面中导航链接的部分。
- `figure`: 表示一段独立的流内容，一般表示文档主体流内容中的一个独立单元。

**媒体标签**

- `video` 视频
- `audio` 音频

更多与语义化标签和介绍详见[HTML5元素周期表](http://www.html5star.com/manual/html5label-meaning/)

### 新增的全局属性

- **contentEditable** 单独某一个标签的属性，可以使内容能被点击编辑

```html
<div style="width: 200px;height: 200px;border: 1px solid red;" contentEditable></div>
```

- **designMode**（这个在js中进行使用，让页面中所有的元素开启可编辑模式） 让页面所有的标签都可以被编辑 比如div、p、h1等等

```js
window.onload = function() {
	document.designMode = "on";
}
```

- **hidden** 添加此属性的元素 display 值会改为 none，因此隐藏 

```html
<div style="width: 200px;height: 200px;border: 1px solid red;" hidden></div>
```

- 全屏显示 可以通过css设置元素子代的全屏样式，通过 js 控制元素打开全屏

```html
<style>
	.box:fullscreen img{
		width: 600px;
		height: 600px;
	}
</style>	
<body>
	<div class="box"><img src="./avatar.png" alt="sorry"></div>
</body>
```

```js
// 判断是否是全屏
function ifFullscreen(){
	return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || false;
}

// 开启全屏 兼容写法
function openFullscreen(ele){
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	}else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	}else if (ele.mozRequestFullscreen) {
		ele.mozRequestFullscreen();
	}else{
		alert("sorry,无法全屏");
	}
}

// 关闭全屏 兼容写法
function closeFullscreen(){
	// 退出全屏必须使用 document的api
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	}else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	}
}
```



- **draggable** 页面中设置了`draggable="true"`属性的元素可成为拖拽元素，具有以下方法：

  - `ondrag` 应用于被拖拽元素，整个拖拽过程都会调用

  - `ondragstart` 应用于被拖拽元素，当拖拽开始时调用

  - `ondragleave` 应用于被拖拽元素，当鼠标离开拖拽元素时调用

  - `ondragend` 应用于被拖拽元素，当拖拽结束时调用

    

    任意元素都可以是目标元素，具有以下方法：

  - `ondragenter` 应用于目标元素，当拖拽元素进入时调用

  - `ondragover` 应用于目标元素，当停留在目标元素上时调用

  - `ondrop` 应用于目标元素，当在目标元素上松开鼠标时调用

  - `ondragleave` 应用于目标元素，当拖拽元素离开目标元素时调用

```html
<style>
	*{
		margin: 0;
		padding: 0;
	}
	.inner{
		position: absolute;
		width: 100px;
		height: 100px;
		background-color: red;
	}
	.box{
		position: relative;
		width: 400px;
		height: 200px;
		margin: 50px auto;
		border: 1px solid red;
	}
</style>
<body>
	<div class="inner" draggable="true"></div>
	<div class="box"></div>
	
	<script type="text/javascript">
		var inner = document.querySelector(".inner");
		var box = document.querySelector(".box");
		var dragEle = null;
		inner.ondragstart = function (){
			console.log("开始拖拽元素");
			dragEle = this;
		}
		box.ondragover = function (e){
			e = e || window.event;
			//元素默认是禁止跟其他元素堆叠的  这里禁止默认事件
			e.preventDefault();
			console.log("拖拽元素停留在目标元素上时");
		}
		box.ondrop = function (e){
			e = event || window.event;
			e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
			console.log("拖拽元素在目标元素上松开鼠标");
			this.appendChild(dragEle);
		}
	</script>
</body>
```

### 新增input type类型

部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用。

- `email` 限制用户输入必须为Email类型
- `tel` 手机号码
- `url` 限制用户输入必须为URL类型
- `number` 只能输入数字
- `search` 具有搜索意义的表单属性
- `range` 范围 滑动条
- `color` 拾色器
- `time` 时间
- `date` 选取日、月、年
- `datetime` 选取时间、日、月、年（UTC 时间）(移动支持)
- `datetime-local` 选取时间、日、月、年（本地时间）
- `month` 选取月、年
- `week` 选取周和年

### 新增form表单元素

- `datalist` 数据列表 自动补全，常与`input`标签配合使用 实际开发中：需要自动补全的内容列表项可能很多，不可能挨个展示在页面中，一般是通过ajax局部页面刷新技术实现的。

```html
<input type=”text” list=”data”>
<datalist id=”data”>
	<option>男</option>
	<option>女</option>
	<option>不详</option> 
</datalist>
```

- `meter` 用来表示规定范围内的数量值，如磁盘使用量比例饿、关键词匹配程度等。需要注意的是，`meter`不可以用来标记那些没有已知范围的任意值，如重量、高度，除非已经设定了它们值的范围。

```html
<meter value="81" min="0" max="100" low="60" high="80"></meter>
```

- `progress` 进度条

```html
<progress value="22" max="100"></progress>
```

### 新增表单属性

- `autofocus` 获取焦点
- `autocomplete` 自动完成，用于表单元素，也可用于表单自身(on/off)
- `form` 指定表单项属于哪个form，处理复杂表单时会需要 一般一个页面只有一个form
- `novalidate` 关闭验证，可用于form标签
- `required` 必填项
- `pattern` 正则表达式 验证表单
- `autocomplete` 是否保存用户输入值 默认为on，关闭提示选择off
- `formaction` 主要应用于表单内某元素提交地址与整个表单提交地址不同，进行单个地址覆盖 如：

```html
<input type="submit" formaction="xxx.action">
```

### 新增表单事件

- `oninput` 用户输入内容时触发，可用于移动端输入字数统计
- `oninvalid` 验证不通过时触发

```html
网址: <input type="url" required oninvalid="alert('请填写此字段')"><br>
```

- `tabindex`  (控制 input 标签按 tab 键获取到焦点的顺序)

```html
姓名: <input type="text" tabIndex="1"> <br>
年龄: <input type="number" tabIndex="3"> <br>
电话: <input type="tel" tabIndex="2"> <br>
地址: <input type="text" tabIndex="4">
```

### 删除或替换的HTML元素

|                     在HTML 4中使用的属性                     |                    使用该属性的元素                    | 在HTML 5中的替代方案                                         |
| :----------------------------------------------------------: | :----------------------------------------------------: | ------------------------------------------------------------ |
|                             rev                              |                        link、a                         | rel                                                          |
|                           charset                            |                        link、a                         | 在被链接的资源的中使用HTTP Content-type头元素                |
|                        shape、coords                         |                           a                            | 使用area元素代替a元素                                        |
|                           longdesc                           |                      img、iframe                       | 使用a元素链接到较长描述                                      |
|                            target                            |                          link                          | 多余属性，被省略                                             |
|                            nohref                            |                          area                          | 多余属性，被省略                                             |
|                           profile                            |                          head                          | 多余属性，被省略                                             |
|                           version                            |                          html                          | 多余属性，被省略                                             |
|                             name                             |                          img                           | id                                                           |
|                            scheme                            |                          meta                          | 只为某个表单域使用scheme                                     |
|   archive、chlassid、codebose、codetype、declare、standby    |                         object                         | 使用data与typc属性类调用插件。需要使用这些属性来设置参数时，使用param属性 |
|                       valuetype、type                        |                         param                          | 使用name与value属性，不声明之的MIME类型                      |
|                          axis、abbr                          |                         td、th                         | 使用以明确简洁的文字开头、后跟详述文字的形式。可以对更详细内容使用title属性，来使单元格的内容变得简短 |
|                            scope                             |                           td                           | 在被链接的资源的中使用HTTP Content-type头元素                |
|                            align                             | caption、input、legend、div、h1、h2、h3、h4、h5、h6、p | 使用CSS样式表替代                                            |
|        alink、link、text、vlink、background、bgcolor         |                          body                          | 使用CSS样式表替代                                            |
| align、bgcolor、border、cellpadding、cellspacing、frame、rules、width |                         table                          | 使用CSS样式表替代                                            |
|         align、char、charoff、height、nowrap、valign         |                  tbody、thead、tfoot                   | 使用CSS样式表替代                                            |
| align、bgcolor、char、charoff、height、nowrap、valign、width |                         td、th                         | 使用CSS样式表替代                                            |
|            align、bgcolor、char、charoff、valign             |                           tr                           | 使用CSS样式表替代                                            |
|             align、char、charoff、valign、width              |                     col、colgroup                      | 使用CSS样式表替代                                            |
|                align、border、hspace、vspace                 |                         object                         | 使用CSS样式表替代                                            |
|                            clear                             |                           br                           | 使用CSS样式表替代                                            |
|                        compace、type                         |                       ol、ul、li                       | 使用CSS样式表替代                                            |
|                           compace                            |                           dl                           | 使用CSS样式表替代                                            |
|                           compace                            |                          menu                          | 使用CSS样式表替代                                            |
|                            width                             |                          pre                           | 使用CSS样式表替代                                            |
|                    align、hspace、vspace                     |                          img                           | 使用CSS样式表替代                                            |
|                 align、noshade、size、width                  |                           hr                           | 使用CSS样式表替代                                            |
|   align、frameborder、scrolling、marginheight、marginwidth   |                         iframe                         | 使用CSS样式表替代                                            |
|                          autosubmit                          |                          menu                          |                                                              |

**面试题：**什么是web标签语义化

标签语义化的目的在于能够直观的认识标签和属性的用途和作用，好处：

1. 使页面的内容结构化：结构更清晰，便于不同的屏幕设备解析；

2. 有利于SEO：和搜索引擎建立良好的关系，有助于爬虫更多的有效信息；

3. 便于团队开发和维护；

### CSS兼容处理

在不支持 HTML5 新标签的浏览器里，会将这些新的标签解析成行内元素（inline）对待，所以我们只需要将其转换成块元素（block）即可使用，但是在 IE9 版本以下，并不能正常解析这些新标签，但是却可以识别通过 `document.createElement('tagName')` 创建的自定义标签，于是我们的解决方案就是将 HTML5 的新标签全部通过 `document.createElement('tagName')` 来创建一遍，这样 IE 低版本也能正常解析 HTML5 新标签了，在实际开发中我们更多采用的是通过检测 IE 浏览器的版本来加载三方的一个 JS 库（html5shiv.min.js）来解决兼容问题。

```css
<!--[if gte IE 7]> <link rel="stylesheet" href="ie10.css"> <![endif]-->
<!--[if lte IE 8]> <script src="html5shiv.min.js"></script> <![endif]-->
```

**注意:** 在非IE浏览器中是看不到效果的

- lte：就是Less than or equal to的简写，也就是小于或等于的意思。
- lt ：就是Less than的简写，也就是小于的意思。
- gte：就是Greater than or equal to的简写，也就是大于或等于的意思。
- gt ：就是Greater than的简写，也就是大于的意思。
- !： 就是不等于的意思，跟javascript里的不等于判断符相同

## HTML5补充内容

### 多媒体

> 在HTML5之前，在网页上播放音频/视频的通用方法是利用Flash来播放，但是大多情况下，并非所有用户的浏览器都安装了Flash插件，由此使得处理音频/视频播放变的非常复杂，并且移动设备的浏览器并不支持Flash插件。

HTML5 新增 audio 标签 和 video 标签来解决音视频的问题;语法:

```html
<audio src="素材/小手拍拍.mp3" controls>不支持</audio>
<!--
	附加属性可以更友好控制音频的播放，如：
	autoplay 自动播放
	controls 是否显不默认播放控件
	loop 循环播放
	preload 预加载 同时设置autoplay时此属性失效
-->

<video src="素材/movie.ogg" width="400" height="300" controls></video>
<!--
	同样，通过附加属性可以更友好的控制视频的播放
	autoplay 自动播放
	controls 是否显示默认播放控件
	loop 循环播放
	preload 预加载，同时设置了autoplay，此属性将失效
	width 设置播放窗口宽度
	height 设置播放窗口的高度
-->
```

由于版权等原因，不同的浏览器可支持播放的格式是不一样的: 

多浏览器支持方案:

```html
<audio>
	<source src="素材/小手拍拍.mp3">
	<source src="素材/小手拍拍.wav">
	<source src="素材/小手拍拍.ogg">
</audio>


<video controls>
	<source src="素材/movie.ogg">
	<source src="素材/movie.mp4">
	<source src="素材/movie.webm">
	您的浏览器不支持
</video>
```

**通过 JS 控制(video 与 audio 相同)**

- 属性
  - currentTime 视频播放的当前进度
  - duration 视频的总时间
  - paused 视频播放的状态
- 方法
  - `load()`重新加载音频/视频元素
    - 语法: `audio|video.load()`
    - 用于在更改来源或其他设置后对音频/视频元素进行更新
  - `play()` 播放
  - `pause()` 暂停
  - 更多方法请自行查阅 [W3](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)
- 事件
  - `oncanplay:` 事件在用户可以开始播放视频/音频（audio/video）时触发。
  - `ontimeupdate:` 类似于鼠标移动的onmousemove事件，播放时不断触发，给ontimeupdate事件绑定函数可以持续报告当前的播放进度
  - `onended:` 播放完时触发
- 全屏：`video.webkitRequestFullScreen()`

```html
<div class="vd-box">
	<video class="vd1" src="movie.ogg"></video>
	<div class="tool-bar">
		<!-- 自己设定的进度条 -->
		<div class="process-bg">
			<div class="process-line"></div>
		</div>
	</div>
	<!-- load() 加载、play() 播放、pause() 暂停 -->
	<button class="btn-restart">重新播放</button>
	<button class="btn-load">load</button>
	<button class="btn-play">play</button>
	<button class="btn-pause">pause</button>
	<button class="btn-allTime">获取总时间</button>
	<button class="btn-nowTime">获取当前时间</button>
	<button class="btn-status">判断播放状态</button>
	<button class="btn-full">全屏显示</button>
</div>

<script>
	var restartBtn = document.querySelector('.btn-restart'),
		loadBtn = document.querySelector('.btn-load'),
		playBtn = document.querySelector('.btn-play'),
		pauseBtn = document.querySelector('.btn-pause'),
		allTimeBtn = document.querySelector('.btn-allTime'),
		nowTimeBtn = document.querySelector('.btn-nowTime'),
		statusBtn = document.querySelector('.btn-status'),
		fullBtn = document.querySelector('.btn-full'),
		vd = document.querySelector('.vd1');
		
	loadBtn.onclick = function () {
		vd.load();
	}
	playBtn.onclick = function () {
		vd.play();
	}
	pauseBtn.onclick = function () {
		vd.pause();
	}
	allTimeBtn.onclick = function () {
		console.log('总时间==>'+vd.duration)
	}
	nowTimeBtn.onclick = function () {
		console.log('当前播放到==>'+vd.currentTime)
	}
	statusBtn.onclick = function () {
		console.log('播放状态===>'+vd.paused)
	}
	fullBtn.onclick = function () {
		vd.webkitRequestFullScreen();
	}
	
    // 实现一个和播放进度同步的进度条
	vd.ontimeupdate = function  () {
		var nowTime = vd.currentTime;
		var allTime = vd.duration;
		var el = document.querySelector('.process-line');
		el.style.width = nowTime/allTime*100+'%';
		// console.log('当前播放到==>'+vd.currentTime)
	}
	restartBtn.onclick = function () {
		vd.currentTime = 0;
	}

</script>
```

### DOM扩展

**获取元素**

- `document.querySelector("selector")` html5新选择器，参数是css选择器参数，选择选中的第一个

- `document.querySelectorAll("selector")` 选择多个。类似 jQuery 选择器，可惜出现的太晚了

**类名操作**

- `Node.classList.add('class')` 添加class
- `Node.classList.remove('class')` 移除class
- `Node.classList.toggle('class')` 切换class，有则移除，无则添加
- `Node.classList.contains('class')` 检测是否存在class 非常好用，但是出现的太晚了 。。。

**自定义属性**

在HTML5中我们可以自定义属性，其格式如下 

```html
<div class="box" data-index="1"></div>
```

例如:

`data-info="我是自定义属性"`，通过`Node.dataset['info']` 我们便可以获取到自定义的属性值。

`Node.dataset`是以类对象形式存在的

当我们如下格式设置时，则需要以小驼峰格式才能正确获取

`data-my-name="mm"`，获取`Node.dataset['myName']`

### web存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，传统方式我们以document.cookie来进行存储的，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便，HTML5规范则提出解决方案。

1. `storage` 存储: 
   - `window.sessionStorage` 和`window.localStorage` (向本地保存数据,有可能在浏览器内存里面，有可能在硬盘上面)
2. 特性
   - 设置、读取方便
   - 容量较大，`sessionStorage` 约5M、`localStorage` 约20M。不同的浏览器大小可能有差异
   - 均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现），可以将对象 `JSON.stringify()` 编码成json字符串后存储
3. `window.sessionStorage`
   - 生命周期为当前窗口或标签页，一旦窗口或标签页被关闭了，那么所有通过 `sessionStorage` 存储的数据也就被清空了。
   - 在同一个窗口下数据可以共享
4. `window.localStorage`
   - 永久生效，除非手动删除
   - 可以多窗口共享
   - IE8 以上的 IE 版本才支持 `localStorage` 这个属性
   - `localStorage` 本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡
5. 两者本质区别：不同浏览器无法共享 `localStorage` 或 `sessionStorage` 中的信息。相同浏览器的不同页面间可以共享相同的 `localStorage`（页面属于相同域名和端口），但是不同页面或标签页间无法共享 `sessionStorage` 的信息。
6. 方法详解
   - `setItem(key, value)` 设置存储内容
   - `getItem(key)` 读取存储内容
   - `removeItem(key)` 删除键值为key的存储内容
   - `clear()` 清空所有存储内容
   - `key(n)` 以索引值来获取对应的键

```html
<input type="text" class="username">
<button class="btn">存储session</button>
<button class="btn2">存储local</button>
<button class="btn3">获取session</button>
<button class="btn4">获取local</button>
<button class="btn5">删除</button>
<button class="btn6">清空</button>
<button class="btn7">根据index获取</button>
<p class="text"></p>
<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
<script>
	window.localStorage.setItem('age', 30);
	$('.btn').click(function () {
		// session 和服务器建立链接,那么session存在于整个回话过程
		window.sessionStorage.setItem('name', $('.username').val());
	})	
	$('.btn2').click(function () {
		//localStorage 可以把数据存储到本地 不会过期
		window.localStorage.setItem('name', $('.username').val());
	})	
	$('.btn3').click(function () {
		var name = window.sessionStorage.getItem('name');
		$('.text').text(name);
	})
	$('.btn4').click(function () {
		var name = window.localStorage.getItem('name');
		$('.text').text(name);
	})
	$('.btn5').click(function () {
		window.localStorage.removeItem('name');
	})
	$('.btn6').click(function () {
		window.localStorage.clear();
	})
	$('.btn7').click(function () {
		var key = window.localStorage.key(0);
		console.log('key==>'+key);
	})
</script>
```

