# 记录"响应式开发一招制胜"这个课程的笔记
这个README.md记录的主要是学习这门课程中的笔记，以及时不时的知识点的记录和归纳
## markdown基本语法
## 1. 标题
```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```
注：标准语法一般在#后跟个空格再写文字，貌似简书不加空格也行。
## 2. 字体
```
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```
## 3. 引用
```
>这是引用的内容
>>这是引用的内容
>>>这是引用的内容
```
实际效果：
>这是引用的内容
>>这是引用的内容
>>>这是引用的内容
## 4. 分割线
三个或者三个以上的 - 或者 * 都可以。
```
---
****
```
效果：（可能有的平台显示的是一样的）
***
这里有点疑问：连续三个-好像不行
## 5. 图片
```
![图片alt](图片地址 "图片title")

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
```
## 6. 超链接
```
[超链接名](超链接地址 "超链接title")
title可加可不加
```
效果：
[百度](www.baidu.com)
## 7. 列表
- **无序列表**

无序列表用 - + * 任何一种都可以
```
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```
- **有序列表** 

数字+"."
```
1.列表内容
2.列表内容
3.列表内容

注意：序号跟内容之间要有空格
```
- **列表嵌套**

下一级列表之前敲三个空格即可
- 一级列表
   - 二级列表
   - 二级列表

## 8. 表格
```
|表头|表头|表头|
|---|:---:|---:|
|内容|内容|内容|
|内容|内容|内容|

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个，最好至少三个，为了不同平台都能正常显示
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```
实际效果：

|姓名|户籍所在地|年龄|
|---|:---:|---|
|shfh|sfs|10|
|sam|shdfi|16|

***注意，使用时发现，表格的语句上一行必须为空行，不然表格不生效。后一行也要是空行，否则后一行的内容也会包含在表格内***
## 9. 代码
单行代码：代码之间分别用一个反引号包起来
```
`代码内容`
```
多行代码：代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行
```
(```)这里加上html表示按照html格式高亮
代码内容
代码内容
代码内容
(```)
```
效果：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{margin: 0; padding: 0; font-size: 14px;}
        ul{list-style: none; height: 50px;padding-left: 30px; border-bottom: 5px solid #ff6600;}
        li{float: left;margin-top: 20px;}
        a{text-decoration: none;display: block;height: 30px; line-height: 30px; width: 100px; background-color: #cccccc;border-radius:6px 6px 0px 0px; text-align: center;}
        .on, a:hover{background-color: #ff6600; color: #ffffff;height: 40px;line-height: 40px; margin-top: -10px; border-radius:6px 6px 0px 0px}
    </style>
</head>
<body>
    <ul>
        <li><a class="on" href="#">首 页</a></li>
        <li><a href="#">新闻快讯</a></li>
        <li><a href="#">产品展示</a></li>
        <li><a href="#">售后服务</a></li>
        <li><a href="#">联系我们</a></li>
    </ul>
</body>
</html>
```
