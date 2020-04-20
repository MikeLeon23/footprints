# JQuery

## JQuery是什么

> jQuery 是一个快速、简洁的 JavaScript 框架，是继 Prototype 之后又一个优秀的 JavaScript 代码库（或 JavaScript 框架）。jQuery 设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装 JavaScript 常用的功能代码，提供一种简便的 JavaScript 设计模式，优化 HTML 文档操作、事件处理、动画设计和 Ajax 交互。 目前这个阶段，主要介绍如何来使用 jQuery 操作 DOM，其实就是学习 jQuery 封装好的那些功能方法，这些方法叫做 API（Application Programming Interface 应用程序编程接口）。

## JQuery的基本使用

### 引入jQuery

- 获取源文件，引入到页面中

```js
// 先下载jQuery源文件
// 引入
// 同时注意引用顺序，引入之后才能使用，否则会报错 $ is not defined
<script src="jquery-3.3.1.min.js" />
```

- 使用cdn引入

```html
<script src="https://cdn.bootcss.com/jquery/3.4.1/core.js"></script>
```

### 入口函数

```javascript
// 何时引入业务代码
$(document).ready(function() {});
$(function() {}); //推荐
```

### jQuery实现DOM操作

```js
$('.box').click(function(){
    $('.box').css('background-color', 'yellow');
});
```



jQuery获取事件源，采用`$('css选择器')`这样的语法，所有css选择器都可以使用

```js
var $box = $('.box');
var $innerBox = $('.box .inner-box');
//通过jQuery语法获取的事件源是一个jq对象（类数组的形式，包装之后的dom元素）
//拿到的是jq对象，就只能使用jq方法，不能使用原生js的方法了

var box = document.querySelector('.box');
var innerBox = document.querySelector('.box .inner-box');
//通过原生js拿到的是一个dom对象
//拿到的是原生dom对象，就只能使用原生的dom方法进行操作
//写代码时，务必清楚你正在操作的是原生dom对象还是jq对象，这决定了你后续方法的使用
```

### 事件处理

- 事件源
  1. 触发事件的对象
  2. 在 js 中就是 dom 对象
  3. 在 jQuery 中 是包装过的 dom 对象
- 事件
  1. js 中 指的是 onclick , onmouseenter/onmouseleave , onmouseup/onmousedown
  2. jQuery 中 就是 click , mouseenter/mouseleave , mouseup/mousedown
- 事件处理程序

```javascript
// 1. js中
obj.onclick = function() {
	// 事件处理
};
// jQuery中
$(obj).click(function() {
	// 事件处理
});
// 区别
// obj.onclick  调用属性
// obj.click()  调用方法
```

## 详细介绍

### js 和 jQuery 入口函数的区别

- 执行时间

window.onload 必须等到页面内包括图片的所有元素加载完毕后才能执行。

$(document).ready()是 DOM 结构绘制完毕后就执行，不必等到加载完毕。只加载了 dom 框架，对于大的图片需要时间，这个不等。

- 编写个数

window.onload 不能同时编写多个，如果有多个 window.onload 方法，只会执行一个。

$(document).ready()可以同时编写多个，并且都可以得到执行。

```javascript
// 何时引入业务代码
$(document).ready(function() {});

//另一种方式
$(function() {}); //推荐
```

### jQuery 的基本选择器

| 符号               | 说明                                    | 用法                                  |
| ------------------ | :-------------------------------------- | :------------------------------------ |
| $('#demo')         | 选择 id 为 demo 的元素                  | $('#demo').css('color','red')         |
| $('.demo')         | 选择 class 为 demo 的所有元素           | $('.demo').css('color','red')         |
| $('div')           | 选择所有 div 标签元素                   | $('div').css('color','red')           |
| $('*')             | 选择所有标签元素                        | $('*').css('color','red')             |
| $('.arr.arr-left') | 选择同时具有 arr 和 arr-left 类名的元素 | $('.arr.arr-left').css('color','red') |

看起来和 css 的选择器没什么两样!

### jQuery 的其他选择器

- 层级选择器(css 也有)

| 符号 | 说明       | 用法                             |
| ---- | :--------- | :------------------------------- |
| 空格 | 后代选择器 | $('div span').css('color','red') |
| >    | 子代选择器 | $('div>span').css('color','red') |
| +    | 紧邻选择器 | $('div+p').css('color','red')    |
| ~    | 兄弟选择器 | $('div~p').css('color','red')    |

- 属性选择器

| 符号                       | 说明                                                        | 用法                                          |
| -------------------------- | :---------------------------------------------------------- | :-------------------------------------------- |
| $('a[href]')               | 具有 href 属性的 a 标签                                     | $('a[href]').css('color','red')               |
| $('a[href='baidu']')       | href 属性为'baidu'的 a 标签                                 | $('a[href='baidu']').css('color','red')       |
| $('a[href!='baidu']')      | href 属性不为'baidu'的 a 标签,包括不具有 href 属性的 a 标签 | $('a[href!='baidu']').css('color','red')      |
| $('a[href^='www']')        | href 属性以'www'开头的 a 标签                               | $('a[href^='www']').css('color','red')        |
| $('a[href$='cn']')         | href 属性以'cn'结尾的 a 标签                                | $('a[href$='cn']').css('color','red')         |
| $('a[href*='i']')          | href 属性包含'i'的 a 标签                                   | $('a[href*='i']').css('color','red')          |
| $('a\[href]\[title='内容']') | 具有 href 属性且 title 属性为'内容'的 a 标签                | $('a\[href][title='内容']').css('color','red') |

- 基本筛选选择器

| 符号       | 说明(index 从 0 开始)        | 用法                             |
| ---------- | :--------------------------- | :------------------------------- |
| :eq(index) | 匹配一个给定索引值的元素     | $('li:eq(1)').css('color','red') |
| :gt(index) | 匹配所有大于给定索引值的元素 | $('li:gt(1)').css('color','red') |
| :lt(index) | 匹配所有小于给定索引值的元素 | $('li:lt(2)').css('color','red') |
| :odd       | 匹配所有索引值为奇数的元素   | $('li:odd').css('color','red')   |
| :even      | 匹配所有索引值为偶数的元素   | $('li:odd').css('color','red')   |
| :first     | 获取匹配的第一个元素         | $('li:first').css('color','red') |
| :last      | 获取匹配的最后一个元素       | $('li:last').css('color','red')  |

- 其他选择器

| 符号            | 说明(index 从 0 开始)                | 用法                     |
| --------------- | :----------------------------------- | :----------------------- |
| :empty          | 匹配所有不包含子元素或者文本的空元素 | $('li:empty')            |
| :contains(text) | 匹配包含给定文本的元素               | $('li:contains('john')') |

### jQuery对象和DOM对象相互转换

jQuery 对象转换为 DOM 对象

- $('#btn')[0]
- $('#btn').get(0)

DOM 对象转换成 jQuery 对象

```js
var btn = document.getElementById('btn');
$(btn); 	//把 DOM 对象转成了 jQuery 对象
```

### DOM操作

#### 样式操作 `.css()`

- 获取样式（获取的是这个元素最终的样式）`$('.box').css('color')`
- 设置单个属性样式（设置的是行内样式）`$('.box').css('color', 'red')`
- 设置多个属性样式（对象形式）

```js
$('.box').css({
    'color': 'orange',
    'font-size': '40px',
    'height': '50px'
});
```

#### 属性操作 `.attr()`

- 获取属性   `$('img').attr('src')`  获取 img 的 src 属性值
- 设置属性   `$('img').attr({src:'text.jpg',alt:'sorry'})`
- removeAttr()   `$('img').removeAttr('src') `  删除 src 属性

#### html代码/文本/值

- 可以取值,设值
- html()   `$('p').html()`   `$("p").html('html 代码')`
- text()   `$('p').text() `  `$('p').text('内容')`
- value()   `$('input').value()`   `$('input').value('姓名')`
- prop()   `$('input').prop('checked')`   `$('input').prop('checked',false)`

#### 类名操作

- addClass() 	向被选元素添加一个或多个类（对应classList.add()）
- removeClass()     从被选元素删除一个或多个类（对应classList.remove()）
- toggleClass()     对被选元素进行添加/删除类的切换操作（对应classList.toggle()）
- hasClass()     判断被选元素是否存在类（对应classList.contains()）

#### DOM筛选过滤/查找

- eq(index);（和写在选择器里面的eq作用相同，但这个eq是个方法）

```js
$('li').eq(3).css('background-color', 'orange');
```

- find(); 符合条件的后代节点
- siblings(); 除了自己以外的所有兄弟节点
- children(); 所有孩子节点
- next(); 下一个兄弟节点
- nextAll(); 后面的所有兄弟节点
- nextUntil();后面的兄弟节点,直到...
- prev();上一个兄弟节点
- prevAll();
- prevUntil();
- parent(); 父节点
- parents(); 所有父节点
- parentsUntil();

### jQuery 动画

#### 隐藏（hide）和显示（show）

第一个参数表示速度，以毫秒为单位。也可以指定关键词，比如'slow'==800, 'normal'==400, 'fast'==200

第二个参数是回调函数，可以指定动画结束时做什么事情

- $(selector).show(2000);
- $(selector).show(slow); slow/normal/fast
- $(selector).show(2000,function(){});
- $(selector).show();

#### 滑入和滑出

- $(selector).slideDown(speed,callback);
- $(selector).slideUp(speed,callback);
- $(selector).slideToggle(speed,callback);

#### 淡入和淡出

- $(selector).fadeIn(speed,callback);
- $(selector).fadeOut(speed,callback);
- $(selector).fadeToggle(speed,callback);
- $(selector).fadeTo(speed,opacity); 到达指定透明度

> 注意：省略参数或者传入不合法的字符串，那么则使用默认值：400 毫秒

#### 自定义动画

`$(selector).animate(styles,speed,ease,callback)`

- 第一个参数表示：要执行动画的 CSS 属性（必选）
- 第二个参数表示：执行动画时长（可选）
- 第三个参数表示：运动函数，只支持 'swing'和'linear'，不支持贝赛尔曲线
- 第四个参数表示：动画执行完后立即执行的回调函数（可选）

```html
<div class="box"></div>
<button>动画开始</button>
<script src="js/jquery-3.4.1.min.js"></script>
<script>
	$('button').eq(0).click(function(){
        $('.box').animate({
            // 对象里面，属性名可以加引号，也可以不加（驼峰命名）
            // 属性值可以写成字符串'200px'，也可以直接写成数值200
            'margin-left':'800px',
            'width':100,
            height:100,
        }, 1000, 'linear', function(){console.log(1);});
    })
</script>
```

通常和数值相关的都能参与动画

也可以同时设置多个动画，但是下一个动画必须等到上一个完成，才会执行

#### 停止动画

- stop(); 停止当前动画，后面如果还有动画，会立即执行后面的动画。

为什么要停止动画？如果多个动画同时作用于一个单位上面，那么多个动画会进入排队。后一个动画的执行必须等前面的执行完毕。

- stop(stopAll,goToEnd)

stopAll:是否全部停止动画(停止队列中所有动画)，默认 false（只停止当前动画），true代表停止所有动画。

goToEnd: 是否将停止的动画，停在当前动画的最后一个状态，默认false代表停在当前状态，true代表停在动画结束状态。

```js
$('button').eq(0).click(function(){
    // 第一个动画
    $('.box').animate({
        'margin-left':'800px',
        'width':100,
        height:100,
    }, 1000, 'linear', function(){console.log(1);});
    // 第二个动画
    $('.box').animate({
        'margin-left':'400px',
        'width':200,
        height:200
    }, 1000, 'linear');
})
// 停止动画
$('button').eq(0).click(function(){
    $('.box').stop(true, true);		// 停止所有动画，并且停在当前动画的结束状态
})
```



### 节点操作

#### 创建节点

```js
var $p = $('<p>我是一个p标签</p>');	// 创建了一个jq对象
```

#### 插入节点

- append()
  - 参数 `jq对象` 或 `标签字符串` 或 `DOM对象`
  - 作用：在被选元素内部从后面插入。
  - 如果是页面中存在的元素，那么调用 append()后，会把这个元素放到相应的目标元素里面去；但是，原来的这个元素，就不存在了。(剪切)
  - 如果是给多个目标追加元素，那么方法的内部会复制多份这个元素，然后追加到多个目标里面去。

```js
var $p = $('<p>我是一个p标签</p>');
var el = document.createElement('span');

// 插入节点
$('.box').append($p);	// jq对象
$('.box').append(el);	// dom对象
$('.box').append('<div>我是一个div</div>');		// 标签字符串
```

- appendTo()

作用：把`$(selector)`追加到`node`中去

```js
$(selector).appendTo(node);
```

- prepend()

作用：在被选元素内部（作为子元素插入）从前面追加内容或节点。

- after()

作用：在被选元素之后，作为兄弟元素插入内容或节点

```text
$(selector).after(node);
```

- before()

作用：在被选元素之前，作为兄弟元素插入内容或节点

```text
$(selector).before(node);
```

> 对于这些添加方法，node 可以是`jq对象` 或 `标签字符串` 或 `DOM对象`。

#### 删除节点

```js
$(selector).empty();	//清空被选元素的所有子元素
$(selector).html('');	//同上
$(selector).remove();  //会把自己也删除
```

#### 复制节点

```text
$(selector).clone();	// 深复制，所有内容包括子节点都复制
```



### BOM相关

- height()	
- height(200)
- width()
- width(100) 

不带参数是获取，带数值参数是设置宽/高

取值类型为 `num` 可以直接参与运算。获取的宽/高是不包含border和padding的

#### 坐标值操作

- offset()

  - 作用：获取或设置元素相对于文档（整个HTML文档）的位置
  - $(selector).offset();
  - $(selector).offset({left:100, top: 150});

  获取的值是对象形式的（用花括号括起来）

- position()

  - 作用：获取相对于其最近的具有定位的父元素的位置。
  - $(selector).position();
  - 注意：只能获取，不能设置。

- scrollTop()

  - 作用：获取或者设置元素垂直方向滚动的位置（即网页卷进去的高度）
  - $(selector).scrollTop();
  - $(selector).scrollTop(100);

  可以用来做冻结顶部导航栏、回到顶部按钮

  同理还有scrollLeft()和scrollLeft(100)，获取或者设置元素水平方向滚动的位置

```javascript
// “回到顶部”按钮
$(".top").click(function() {
    // 兼容写法，兼容手机浏览器document.body
	var scrollTop = $(document.documentElement).scrollTop() || $(document.body).scrollTop();
    
    // 直接回到顶部，没有动画效果
	// $(document.documentElement).scrollTop(0);
    
    // 动画效果
	$(document.documentElement).animate({
		scrollTop: 0,
	}, 800, 'linear');
});
```

#### 网页滚动事件

`onscroll`网页滚动时触发事件

```js
// 网页滚动时，打印网页卷进去的高度
window.onscroll = function(){
    console.log($(document.documentElement).scrollTop());
}
```





### on方式绑定事件

`target.on(type,[selector],[data],fn); `在选择元素上绑定事件处理函数

- target：选择元素（jq 对象）
- type：事件类型（如click）
- selector：一个选择器字符串,用来过滤选定的元素（target 的后代）,如果省略,则 target 所有后代元素都会触发事件
- data：当一个事件被触发时要传递 event.data 给事件处理函数。可以省略。
- fn：该事件被触发时执行的函数。

注：on方式可以同时绑定多个事件，click(fn)只能绑定一个（绑定多个会覆盖）

### 事件委托（代理）

使用 on 方式，将事件委托给父级元素代理。

```html
<ul>
    <li>li_1</li>
    <li>li_2</li>
    <li>li_3</li>
    <li>li_4</li>
</ul>
<button>新增li</button>
<script>
    var count = 4;
    // 点击按钮新增li，但后生成的（动态追加的元素）li没有绑上事件
    $('button').click(function(){
        count++;
        $('ul').append('<li>li_'+count+'</li>');
    })
    //点击后生成的li不会有内容输出
    $('li').click(function(){
        console.log($(this).text());
    })
    
    // 想要给后生成的元素绑定事件，我们可以使用on方式（事件委托代理）（代理给父元素帮助我们实现）
    // target元素是要委托的父元素，on方法的第二个参数'li'是要绑定事件的子元素，如果没有第二个参数，this就指向ul了
    $('ul').on('click', 'li', function(){
        console.log($(this).text());
    })
</script>
```



### off解绑事件

- .off() 方法移除用.on()绑定的事件处理程序

```js
$('.box').off();	//移除绑定的所有事件
```

- .off(); 解除所有绑定的事件
- .off('click'); 解绑所有绑定的 click 事件，元素本身的事件不会被解绑
- .off( 'click', “xx” ); 解绑target下的，XX[selector]选中的目标上绑定的click事件
- .off( 'click', “xx” ,fn); 解绑target下的，XX[selector]选中的目标上，绑定的click事件中的fn函数

### 事件对象Event

```js
$('.box').click(function(event){
    // 这个event叫做事件对象，包含了事件触发时浏览器提供给我们的一些信息和方法，一般也写eve、e
    console.log(event);
})
```

- event.data 传递给事件处理程序的额外数据
- event.currentTarget 事件绑定的对象(事件源)，和 this 相同
- event.target 实际触发事件的对象，不一定===this
- event.pageX 鼠标相对于文档左部边缘的位置
- event.type 事件类型：click，mouseover…
- event.which 鼠标的按键类型：左 1 中 2 右 3
- event.keyCode 键盘按键代码

```js
// keyup是键盘按键抬起来事件
$('input').keyup(function(event){
    // 输入框中输入什么，下面的p标签中就同步显示什么
    $('p').text($(this).val());
    // keycode获取点击的按键（13是回车的按键编码）
    if(event.keyCode == 13){
        // 敲回车时背景色变成绿色
        $('p').css('background-color', 'green');
    }
})
```

- event.stopPropagation()； 阻止事件冒泡
- event.preventDefault(); 阻止默认行为

```js
$('.w1').click(function(event){
    event.stopPropagation();	//阻止事件冒泡
    event.preventDefault();		//阻止事件的默认行为，比如a标签默认点击跳转
})
```



## jQuery补充

### 链式编程

- 链式编程原理：return this; 调用”任何”一个方法都是返回了对象本身
- 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。

```html
<div class="box">
    <div class="inner-box">
        
    </div>
</div>
<script>
	// 每次方法的调用都返回this，才得以实现链式调用
    $(".inner-box").click(function() {
        $(this)
            .css("width", "80px")
            .css("font-size", "40px")
            .parent()
            .css("width", "200px")
            .end()
            .css("background-color", "black");
        // end()方法，结束当前链最近的一次过滤操作，并且返回最后一次匹配元素之前的状态。
    });
</script>
```

#### 隐式迭代

- 隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历（相当于自动为你执行了循环），执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。
- 如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。

```javascript
$(".btn").click(function() {
	console.log($(".box").text());
});
```

```html
<ul>
    <li style="color: red">li1</li>
    <li style="color: green">li2</li>
    <li style="color: orange">li3</li>
</ul>
<script>
	console.log($('li').text());	//li1li2li3，获取文本时，每个li的文本都能拿到
    console.log($('li').css('color'));	//rgb(255, 0, 0),获取的是第一个元素的颜色
</script>
```

#### each

- 大部分情况下是不需要使用 each 方法的，因为 jQuery 的隐式迭代特性。
- 如果要对每个元素做不同的处理，这时候就用到了 each 方法
- 作用：遍历 jQuery 对象集合，为每个匹配的元素执行一个函数
- `$(selector).each(function(index,element){});`
- Element 是一个 js 对象，需要转换成 jquery 对象

```html
<ul>
    <li>li0</li>
    <li>li1</li>
    <li>li2</li>
    <li>li3</li>
    <li>li4</li>
</ul>
<script>
	//假如想对每个元素li进行不同的操作，即jq对象手动循环，可以用each方法
    $('li').each(function(idx, item){
        if(idx%2 == 0){
            $(item).click(function(){
                console.log('world');
            })
        }else{
            $(item).click(function(){
                console.log('hello');
            })
        }
    })
</script>
```



### 多库共存

- 此处多库共存指的是：jQuery 占用了$ 和 jQuery 这两个变量。当在同一个页面中引用了 jQuery 这个 js 库，并且引用的其他库（或者其他版本的 jQuery 库）中也用到了$或者 jQuery 这两个变量，那么，要保证每个库都能正常使用，这时候就有了多库共存的问题。
- $.noConflict();让 jQuery 释放对$的控制权，让其他库能够使用$符号，达到多库共存的目的。此后，只能使用 jQuery 来调用 jQuery 提供的方法

### 插件机制

- jQuery 这个 js 库，虽然功能强大，但也不是面面俱到包含所有的功能。
- jQuery 是通过插件的方式，来扩展它的功能：
- 当你需要某个插件的时候，你可以“安装”到 jQuery 上面，然后，使用。
- 当你不再需要这个插件，那你就可以从 jQuery 上“卸载”它。

#### 第一步：引入样式库（如果有）

```html
<link rel="stylesheet" href="lightbox2-dev/dist/css/lightbox.css">
```

#### 第二步：引入依赖库

比如插件的使用用到了jQuery的语法，就需要先引入jQuery

```html
<script src="js/jquery-3.4.1.min.js"></script>
```

#### 第三步：引入核心库

核心库是插件实现功能的代码，是插件的核心

```html
<script src="lightbox-dev/dist/js/lightbox.js"></script>
```

必须先引入依赖库，再引入核心库。



### 轮播插件(swiper)

1.首先加载插件，需要用到的文件有swiper.min.js和swiper.min.css文件。可下载[Swiper文件](https://www.swiper.com.cn/download/index.html#file1)或使用[CDN](https://www.swiper.com.cn/cdn/index.html)。

```html
<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="dist/css/swiper.min.css">
</head>
<body>
    ...
    <script src="dist/js/swiper.min.js"></script>
    ...
</body>
</html>
```

2.HTML内容。

```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
导航等组件可以放在container之外
```

3.你可能想要给Swiper定义一个大小，当然不要也行。

```css
.swiper-container {
    width: 600px;
    height: 300px;
}  
```

4.初始化Swiper：最好是挨着</body>标签

```html
...
<script>
  // 构造函数，面向对象的编程思想
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
  </script>
</body>
```

如果不能写在HTML内容的后面，则需要在页面加载完成后再初始化。

```html
<script>
window.onload = function() {
  ...
}
</script>
```

或者这样（Jquery和Zepto）(推荐)

```html
<script>
$(document).ready(function () {
 ...
})
</script>
```

5.完成。恭喜你，现在你的Swiper应该已经能正常切换了。

如果作为CommonJs 或ES 模块引入

```js
//CommonJs
var Swiper = require('swiper');    
var mySwiper = new Swiper('.swiper-container', { /* ... */ });

//ES
import Swiper from 'swiper';    
var mySwiper = new Swiper('.swiper-container', { /* ... */ });
```

### 地图插件

- 在百度地图开放平台申请秘钥

  [百度地图开放平台秘钥申请](http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/getkey)

- 引入插件

```html
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=js7AGWN1lo6DIZB9HQLN753gDHA9rRZr"></script>
```

- 准备容器

```html
<div class="map" id="allmap"></div>
```

- 初始化地图实例、设置地图实例

```html
<script>
	// 初始化地图实例
    var map = new BMap.Map('allmap');
    // 设置地图中心点(经纬度)
    var point = new BMap.Point(113.774475,34.776698);
    map.centerAndZoom(point, 16);
    // 创建标注
    var marker = new BMap.Marker(point);
    // 将标注添加到地图中
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);	// 给标注跳动的动画
</script>
```



### Echarts插件

- 引入echarts插件

```html
<script src="https://cdn.bootcss.com/echarts/4.7.0/echarts.min.js"></script>
```

- 准备容器

```html
<div id="main" class="box"></div>
```

- 初始化一个echarts实例

```js;
var myChart = echarts.init(document.getElementById('main'));
```

- 指定图标的配置项和数据

```js
var option = {
            // 标题
            title: {
                text: 'ECharts'
            },
            tooltip: {},
            legend: {
                data: ['销量','进货量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: '进货量',
                type: 'bar',
                data: [10, 40, 66, 30, 20, 50]
            }
            ]
        };
```

- 使用刚刚指定的配置项和数据显示图表

```js
myChart.setOption(option);
```

- 可以通过修改配置项改变图表的形态