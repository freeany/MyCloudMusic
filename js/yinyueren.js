// m-exposure点击按钮滚动轮播图
// 获取左右按钮及ul
var u_left = document.getElementsByClassName("u-left")[0]
var u_right = document.getElementsByClassName("u-right")[0]
// 获取轮m-exposure部分的轮播图的ul及里面的li
// 先获取u-slide
var u_slide = document.getElementsByClassName('u-slide')[0]
// 拿到下面的所有li
var slide_lis = u_slide.children;
// 添加点击事件
// 默认情况下，只显示右边按钮，点击右边按钮，图片从左边移出，再显示左边按钮，提供向左移动
var index = 0;
u_right.onclick = function () {
    u_left.style.display = "block";
    index++;
    if (index >= 4) {
        u_right.style.display = "none";
    }
    if (index >= 5) {
        return;
    }
    // 点击按钮右侧按钮一次，ul移动一个图片的距离
    animate(u_slide, -index * 280)
}

u_left.onclick = function () {
    index--;
    if (index <= 0) {
        u_left.style.display = "none";
        u_right.style.display = "block";


    }
    animate(u_slide, -index * 280)
}

// m-exposure 部分轮播图结束

// 全局垂直翻页轮播图 m-header ——  m-wait

// 获取golbal_banner
var golbal_banner = document.getElementsByClassName('g-golbal-banner')[0];
// 获取golbal_banner下的所有li标签
var lis = golbal_banner.children;
// 动画对象:m-header——m-wait所有的盒子 :g-content
// 获取g-content 
var g_content = document.getElementsByClassName('g-content')[0]
var veri = 0;
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute("index", i)
    lis[i].onmouseenter = function () {

        for (var j = 0; j < lis.length; j++) {
            lis[j].removeAttribute("class");
        }
        this.className = "current";
        veri = this.getAttribute("index")
        // 存取当前的i的索引值
        // 垂直动画函数
        animate1(g_content, -veri * window.innerHeight)
    };

}

// 滚轮控制轮播事件
window.onmousewheel = function (e) {
    // 向上翻页 往前
    if (e.wheelDelta < 0 && g_content.offsetTop % window.innerHeight == 0) {
        if (veri < golbal_banner.children.length - 1) {
            veri++;
            // 排他功能
            for (var j = 0; j < golbal_banner.children.length; j++) {
                golbal_banner.children[j].removeAttribute('class');
            }
            golbal_banner.children[veri].className = 'current'
            animate1(g_content, -veri * window.innerHeight);
        }




    }
    // 向下翻页，向后
    if (e.wheelDelta > 0 && g_content.offsetTop % window.innerHeight == 0) {
        if (veri > 0) {
            veri--;
            for (var j = 0; j < golbal_banner.children.length; j++) {
                golbal_banner.children[j].removeAttribute('class');
            }
            golbal_banner.children[veri].className = 'current'
            animate1(g_content, -veri * window.innerHeight)
        }

    }
}
// m-header     u-three三个a标签的跳转
var ul = document.getElementById('u1-three')
var a = ul.getElementsByTagName('a')
for (let i = 0; i < a.length; i++) {
    a[i].onclick = function () {
        veri = i + 1;
        for (var j = 0; j < golbal_banner.children.length; j++) {
            golbal_banner.children[j].removeAttribute('class');
        }

        golbal_banner.children[veri].className = 'current'
        animate1(g_content, -(veri) * window.innerHeight)

    }
}

//左右轮播封装函数
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 10);
}

// 全屏垂直轮播函数
function animate1(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetTop;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.top = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.top = target + "px";
        }
    }, 5);
}