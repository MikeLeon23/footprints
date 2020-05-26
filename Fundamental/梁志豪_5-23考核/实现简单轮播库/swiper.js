;
(function (window) {
    // 声明构造函数
    function Swiper(selector, params) {
        this.swiper = document.querySelector(selector);
        this.swiperItems = this.swiper.children;

        this.params = Object.assign({
            loop: false,
            autoplay: false,
            pagination: false,
            arrows: false,
            drag: false
        }, params);

        this.count = 0;
        this.itemWidth = this.swiperItems[0].offsetWidth;
        this.timer = null;

        this.init();
    };

    // 整个swiper的初始化函数
    Swiper.prototype.init = function () {
        this.initWidth();
        if (this.params.arrows) {
            this.initArrow();
        }
        if (this.params.pagination) {
            this.initPagination();
        }
        if (this.params.autoplay) {
            this.autoplay();
        }
        if (this.params.drag) {
            this.initDrag();
        }
    };

    // 初始化swiper宽度的函数
    Swiper.prototype.initWidth = function () {
        if (this.params.loop) {
            this.swiper.appendChild(this.swiperItems[0].cloneNode(true));
        }
        this.swiper.style.width = this.swiperItems.length * 100 + "%";
        for (var i = 0; i < this.swiperItems.length; i++) {
            this.swiperItems[i].style.width = 100 / this.swiperItems.length + "%";
        }
    };

    // 初始化左右箭头的函数
    Swiper.prototype.initArrow = function () {
        var str = `<div class="arrow left"><</div>
                           <div class="arrow right">></div>`;
        this.swiper.insertAdjacentHTML("afterEnd", str);

        var arrows = document.getElementsByClassName("arrow");

        var that = this;
        arrows[0].onclick = function () {
            that.prev();
        };
        arrows[1].onclick = function () {
            that.next();
        };
    };

    // 移动到下一张的函数
    Swiper.prototype.next = function () {
        var that = this;
        if (that.count == that.swiperItems.length - 1) {
            if (that.params.loop) {
                that.count = 0;
                that.swiper.style.left = -that.itemWidth * that.count + "px";
            } else {
                that.count = -1;
            }
        }
        that.count++;
        that.move();
        that.changeDot();
    };
    // 移动到上一张的函数
    Swiper.prototype.prev = function () {
        var that = this;
        if (that.count == 0) {
            if (that.params.loop) {
                that.count = that.swiperItems.length - 1;
                that.swiper.style.left = -that.itemWidth * that.count + "px";
            } else {
                that.count = that.swiperItems.length;
            }
        }
        that.count--;
        that.move();
        that.changeDot();
    };

    // 自动轮播函数
    Swiper.prototype.autoplay = function () {
        var that = this;
        this.autoTimer = setInterval(function () {
            that.next();
        }, 2000);

        this.swiper.parentNode.onmouseenter = function () {
            clearInterval(that.autoTimer);
            that.autoTimer = null;
        };
        this.swiper.parentNode.onmouseleave = function () {
            that.autoTimer = setInterval(function () {
                that.next();
            }, 2000);
        };
    };

    // 初始化拖拽函数
    Swiper.prototype.initDrag = function () {
        var that = this;
        var max = -that.itemWidth * (that.swiper.children.length - 1);
        this.swiper.parentNode.onmousedown = function (event) {
            that.startX = that.swiper.offsetLeft;
            that.innerX = event.pageX - that.swiper.offsetLeft;

            window.onmousemove = function (event) {
                var endX = event.pageX - that.innerX;
                that.swiper.style.left = endX + "px";
                if (that.swiper.offsetLeft > 100) {
                    that.swiper.style.left = "100px";
                } else if (that.swiper.offsetLeft < max - 100) {
                    that.swiper.style.left = max - 100 + "px";
                }
            };
        };

        window.onmouseup = function (event) {
            window.onmousemove = null;
            var count = that.count;
            var distance = that.swiper.offsetLeft - that.startX;

            // if (that.params.loop && that.count == that.swiper.children.length - 1) {
            //     if(distance < 0){
            //         that.count = 0;
            //         that.swiper.style.left = distance + "px";
            //     }
            // } else if (that.params.loop && that.count == 0) {
            //     if(distance > 0){
            //         that.count = that.swiper.children.length - 1;
            //         that.swiper.style.left = -(that.swiper.children.length - 1) * that.itemWidth + distance + "px";
            //     }
            // }

            if (!that.params.loop) {
                if (that.swiper.offsetLeft > 0) {
                    that.move();
                } else if (that.swiper.offsetLeft < max) {
                    that.move();
                }
            }
            if (distance < - that.itemWidth / 3) {
                that.count = count >= that.swiper.children.length - 1 ? that.swiper.children.length - 1 : count + 1;
            } else if (distance > that.itemWidth / 3) {
                that.count = count <= 0 ? 0 : count - 1;
            }

            that.move();
            that.changeDot();
        };
    };

    // 初始化小圆点
    Swiper.prototype.initPagination = function () {
        var length = this.params.loop ? this.swiperItems.length - 1 : this.swiperItems.length;
        var str = `<ul class="pagination">`;
        for (var i = 0; i < length; i++) {
            str += `<li data-index="${i}"${i == 0 ? " class='active'" : ""}></li>`;
        }
        str += `</ul>`;
        this.swiper.parentNode.insertAdjacentHTML("beforeEnd", str);

        var that = this;
        document.querySelector(".pagination").onclick = function (event) {
            if (event.target.tagName == "LI") {
                that.count = event.target.dataset.index;
                that.move();
                that.changeDot();
            }
        };
    };

    // 小圆点变动函数
    Swiper.prototype.changeDot = function () {
        if (this.params.pagination) {
            document.querySelector(".pagination li.active").classList.remove("active");
            var i = this.count;
            if (this.params.loop) {
                i = i % (this.swiperItems.length - 1);
            }
            document.querySelectorAll(".pagination li")[i].classList.add("active");
        }
    };

    // swiper缓动函数
    Swiper.prototype.move = function () {
        var target = -this.itemWidth * this.count;
        if (this.swiper.offsetLeft == target) {
            return;
        }

        if (this.timer) {
            clearInterval(this.timer);
        }

        var that = this;
        this.timer = setInterval(function () {
            var start = that.swiper.offsetLeft;
            var step = (target - start) / 10;
            if (Math.abs(step) < 1) {
                step = step > 0 ? 1 : Math.floor(step);
            }
            that.swiper.style.left = start + step + "px";
            if (start + step == target) {
                clearInterval(that.timer);
                that.timer = null;
            }
        }, 1000 / 60);
    };

    window.Swiper = Swiper;
})(window);