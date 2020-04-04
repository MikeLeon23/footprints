var imgArr = ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg', 'm6.jpg'];

// var arrowL = document.querySelector('.banner .arr-l');
// var arrowR = document.querySelector('.banner .arr-r');
var bannerImg = document.querySelector('.banner .img img');
var dotul = document.querySelector('.banner .dot');
dotsInit(dotul, imgArr);
var dotArr = document.querySelectorAll('.dot .dot-item');
var count = 0;

// banner图左右箭头点击事件处理函数
function swipe(flag) {
    if (flag) {
        count++;
        if (count > imgArr.length - 1) {
            count = 0;
        }
    } else {
        count--;
        if (count < 0) {
            count = imgArr.length - 1;
        }
    }
    setImg();
}

// 根据count值设置banner图的函数
function setImg() {
    var str = 'img/';
    bannerImg.src = str + imgArr[count];
    for (var i = 0; i < dotArr.length; i++) {
        dotArr[i].classList.remove('active');
    }
    dotArr[count].classList.add('active');
}

// 导航小圆点初始化函数
function dotsInit(ul, arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            str = str + '<li class="dot-item active"><a href="#" onclick="go('+i+')"></a></li>'
        } else {
            str = str + '<li class="dot-item"><a href="#" onclick="go('+i+')"></a></li>';
        }
    }
    ul.innerHTML = str;
}

// 导航小圆点点击切换banner图函数
function go(i) {
    count = i;
    setImg();
}