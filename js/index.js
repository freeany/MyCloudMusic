/* 
    轮播图
    1、动态创建小圆点
    2、动态获取ul的宽度
    3、给所有的小圆点添加对应的单机响应函数


    需要封装的函数
    设置原点的颜色。
    开启轮播
*/

var mBanner = document.getElementById('m-banner')
// 获取轮播图中的li
var bannerUl = document.getElementById('banner-ul')
var lis = bannerUl.getElementsByTagName('li')

// 创建ul的小圆点,添加到wrap的后面
var bannerDots = document.createElement('div')
bannerDots.setAttribute('id','banner-dots')
bannerDots.classList.add('banner-dots')
var dotsUl = document.createElement('ul')
bannerDots.appendChild(dotsUl)
for(var i =0;i<lis.length;i++) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.href = '#'
    li.appendChild(a)
    dotsUl.appendChild(li)
}

var bannerWrap = document.getElementById('bannerWrap')
bannerWrap.appendChild(bannerDots)



// 创建第一张图片放到最后一张图片后面
// var firstLi = lis[0].cloneNode(true)
// bannerUl.appendChild(firstLi)

// 将li的offsetWidth相加当做ul的宽度
var ulWidth = 0;
// console.log(lis[2].offsetWidth)
for(var i =0;i<lis.length;i++) {
    ulWidth += lis[i].offsetWidth
    // console.log(lis[i].offsetWidth)

    // li中设置了margin-right
    ulWidth += 250;

}


// console.log(lis.length)
// console.log(ulWidth)
bannerUl.style.width = ulWidth + 'px'


// 初始化小圆点
var index = 0
// 获取小圆点中所有的a
var dotDiv = document.getElementById('banner-dots')
var dots = dotDiv.getElementsByTagName('a')

// console.log(dots)
var dot = dots[index]
// 给当前小圆点改变样式
dot.style.background = 'url(./assets/images/index/banner0819.png) no-repeat -16px -344px'

// 调用自动播放
autoplay()

// 颜色数组
var color = ['#ad4c3c','#293836','#ffcc00','#f5d0be','#ea9602','#02153d','#f5c3f8']
// 初始化轮播图
mBanner.style.backgroundColor = color[0]
var autoTimer
// 实现自动播放
function autoplay() {
    clearInterval(autoTimer)
    var op = 0;
    // 最后改
    autoTimer = setInterval(function() {
        bannerUl.style.animation = "none";
        op = 0;
        index++
        setColor(function() {
            setTimeout(function() {

                mBanner.style.background = color[index]
                bannerUl.style.animation = "none";
                bannerUl.style.animation = "bian 5s ease infinite";
            },500)
        })

        var target = -980 * index 
        // bannerUl.style.transition = 'all 1s'
        
        // aninmation(bannerUl,op)
        // if(index === 1) {
        
        // }
        setTimeout(function() {
            bannerUl.style.left = target + 'px'
        },500)
        // $("#banner-ul").fadeIn("linear",function(){
        //     // alert("Animation Done.");
        //     bannerUl.style.left = target + 'px'

        //   })

    },5000)

}

// 当鼠标移入时，自动播放停止
// 轮播图总
// var mBanner = document.getElementById('m-banner')
mBanner.onmouseenter = function() {
    // console.log("a")
    bannerUl.style.animation = 'none'
    clearInterval(autoTimer)
}
// mBanner.onmouseenter 
mBanner.onmouseleave = function() {
    autoplay()
}



// 给按钮注册点击事件,给banner-dots注册事件，通过事件委派
dotDiv.onclick = function(e) {
    e.preventDefault || e.preventDefault()

    // 获取当前点击的属性
    var tarEle = e.srcElement || e.target
    for(var i =0;i<dots.length;i++) {
        if(tarEle === dots[i]) {
            e.preventDefault || e.preventDefault()
            // alert(i)
            index = i
            // alert(index)
            
            // return false
        //}
        console.log(index)
        // 让当前元素向左移动730+250的距离

        var target= -980*index
        var speed = 730//执行速度
        var time = 0
        // move(bannerUl,"left",speed,target,time,function(){
        //     // alert("执行完毕");
        //     // 切换按钮的背景色
        //     setColor();
        //     // autoPlay();
        // })

            bannerUl.style.left = target + 'px'
            setColor(function() {
                mBanner.style.background = color[index]
            })
        }
    }
}

var bannerLeftIcon = document.getElementById('banner-left-icon')
bannerLeftIcon.onclick = function() {
    index--
    setColor(function() {
        mBanner.style.background = color[index]
    })
    var target = -980 * index 
    // bannerUl.style.transition = 'all 1s'
    bannerUl.style.left = target + 'px'
}
var bannerRightIcon = document.getElementById('banner-right-icon')
bannerRightIcon.onclick = function() {
    index++
    setColor(function() {
        mBanner.style.background = color[index]
    })

    var target = -980 * index 
    // bannerUl.style.transition = 'all 1s'
    bannerUl.style.left = target + 'px'
}
function setColor(fn) {
    // mBanner.style.background = color[index]

    if(index === lis.length) {
        index = 0
        // 瞬间移动到0
        bannerUl.style.transition = ''
        setTimeout(() => {
            bannerUl.style.left = 0+'px'
        }, 500);

    }
    if(index < 0 ) {
        index = lis.length-1
        // 瞬间移动到最右边
        bannerUl.style.transition = ''
        bannerUl.style.left = -980 * index +'px'

    }
    // 排他法
    for(var j = 0;j<dots.length;j++) {
        dots[j].style.background = ''
    }

    
    if(!dots[index]) {
     dot = dots[0]   
    } else {
        dot = dots[index]
    }
    // 给当前小圆点改变样式
    dot.style.background = 'url(./assets/images/index/banner0819.png) no-repeat -16px -344px'
    fn && fn()
}




// 当鼠标移动到榜单上面的音乐，则显示播放，添加与收藏的按钮
var displayPlay = document.querySelectorAll('.discover-module .module-left .n-bill .bill-main dd')
var displayPlayDiv = document.querySelectorAll('.discover-module .module-left .n-bill .bill-main dd div')
// console.log(displayPlay)
for(var i =0;i<displayPlay.length;i++) {
    // console.log(displayPlay[i])
    displayPlay[i].onmouseover = function() {
        // alert('a')
        // console.log('进入')
        for(var j =0;j<displayPlayDiv;j++) {
            displayPlayDiv[j].classList.contains('oper')
            displayPlayDiv[j].classList.remove('oper')
        }
        this.querySelector('div').classList.add('oper')
    }
    displayPlay[i].onmouseleave = function() {
        // alert('b')
        this.querySelector('div').classList.remove('oper')
    }
}



// 页面初始化完毕发送ajax，初始化音乐飙升榜
var asone = document.querySelectorAll('.bill-main dd div .one')
// alert(asone.length)
var astwo = document.querySelectorAll('.bill-main dd div .two')
var dataMusicObject = []
var arr22 = []
$.ajax({  
    type: "get",  
    url: "http://localhost:3000/toplist/detail",  
    // contentType: "application/x-www-form-urlencoded",
    // data: {phone:$("#phone").val(), password:$("#pwd").val()},  
    // data: $('#form1').serialize(),
    
    dataType: "json",  
    success: function(data){  
                if(data.code === 200) {
                    console.log("获取音乐榜单成功....")
                    // 获取音乐飙升榜
                    // console.log(data.list[0].tracks[0].first)
                    // console.log(data.list[0].tracks[1].first)
                    // console.log(data.list[0].tracks[2].first)
                    var n1 = data.list[2].tracks[0].first
                    var n2 = data.list[2].tracks[1].first
                    var n3 = data.list[2].tracks[2].first

                    var nArr = [n1, n2,n3];
                    // console.log(nArr)

                    var spans = document.querySelectorAll('.bill-main dd span')
                   

                    var astwo = document.querySelectorAll('.bill-main dd div .two')
                    // console.log(spans)
                    for(let i =0;i<spans.length;i++) {
                        if(!nArr[i]) {
                            break
                        }
                        spans[i].innerText = nArr[i]
                        // spans[i].dataset = nArr[i]+''        //???????????

                        // 发送ajax根据关键字获取该歌曲的id
                        var url = 'http://localhost:3000/search/suggest?keywords= '+nArr[i]
                        // console.log(url)
                        $.ajax({
                            type: 'post',
                            async: true,
                            url : url,
                            dataType: 'json',
                            success : function(data) {
                                // console.log(data)
                                // console.log(data)
                                // if(data.code  === 200) 
                                var id = data.result.songs[2].id
                                // console.log(id)
                                var name_this = data.result.songs[3].name
                                var img_url = data.result.songs[3].artists[0].img1v1Url
                                // console.log(spans[i])
                                asone[i].setAttribute('data-mid',id)
                                asone[i].setAttribute('data-mname',name_this)
                                asone[i].setAttribute('data-mimgurl',img_url)

                                arr22= [
                                    
                                ]

                                // console.log('123qwe',asone[i].parentNode.parentNode)

                                // asone[i].setAttribute('data-mid',id)
                                // astwo[i].setAttribute('data-mname',name_this)

                                // alert('a')
                                // console.log(data.result.songs[3].id)
                                // console.logdata.result.songs[3].name
                                // 给播放按钮 与 收藏按钮 注册点击事件             cuowu
                                // 页面初始化的时候就要把音乐的信息存放到a标签的自定义属性中

                                // 很重要,因为本来应该时asone.length, 但是由于只有三个属性,所以就写死3
                                // for(var j =0;j<3;j++) {
                                    // asone[i].onclick = function() {
                                        // 获取id
                                        // console.log(this.dataset.mid)
                                        // 获取到id通过id获取该歌曲的数据
                                        // console.log(asone[j])
                                        // console.log(asone[i].dataset.mid)//为什么不能用
                                        // var mid = asone[j].getAttribute('data-mid')
                                        // console.log(asone[j].getAttribute('data-mid'))
                                    
                                        // var mname = asone[j].getAttribute('data-mname')
                                        // console.log(asone[j].getAttribute('data-mname'))
                                        // 发送ajax根据id获取该歌曲的url
                                        $.ajax({
                                            type : 'post',
                                            async : true,
                                            url: 'http://localhost:3000/song/url?id='+id,

                                            dataType : 'json',

                                            success : function(data) {
                                                // console.log(data)
                                                // 将data中的url与  a标签上的data-name属性封装为一个对象
                                                var songs_url = data.data[0].url

                                                asone[i].setAttribute('data-murl',songs_url)
                                                
                                                // arr22 = [
                                                //     {
                                                //         'songs_url':songs_url
                                                //     }
                                                // ]
                                                arr22.push({'songs_url':songs_url})
                                                // alert(arr22)
                                                // console.log('bbbbbbbbbbbbbbbb')
                                                // console.log(songs_url)
                                                // console.log(this)
                                                // var songs_name = this.dataset.mname
                                                var songObj = {
                                                    songs_url : songs_url,
                                                    songs_name : name_this,
                                                    songs_imgUrl : img_url
                                                }
                                                dataMusicObject.push(JSON.stringify(songObj))

                                                // 因为是异步操作,所以要把这个放在里面
                                                 // 将该对象传递到default.html中的音乐播放器中的一个div里面作为自定义属性.
                                                var parentH =  window.parent.document
                                                                                                
                                                var dataMusic =  parentH.getElementById('dataMusic')
                                                // console.log(parentH.getElementById('dataMusic'))
                                                //  var dataMusicObject =  [1,2,3]

                                                // console.log(dataMusicObject)
                                                
                                                dataMusic.setAttribute('data-musicdata',dataMusicObject)
                                                // alert(asone)
                                                // console.log('------------------------2318')
                                                // console.log(asone)
                                                asone[i].onclick = function(e) {
                                                    // alert(this)
                                                    // alert(i)
                                                    // console.log('9912890189281090')
                                                    // console.log(asone[i].dataset)
                                                    var aa = asone[i].dataset
                                                    // alert(asone[i].dataset)
                                                    var arr22 =  [
                                                            // {
                                                            //     'mid' : asone[i].dataset.mid
                                                            // },
                                                            {
                                                                // mname  murl
                                                                'songs_url' : asone[i].dataset.murl,
                                                                'songs_name' : asone[i].dataset.mname,
                                                                'songs_imgUrl' : asone[i].dataset.mimgurl
                                                            }
                                                        ]
                                                    // alert('点击')
                                                    // alert(i)
                                                    e.preventDefault || e.preventDefault()
                                                    // alert('aa')
                                                    var arr23 = JSON.stringify(arr22)
                                                    // alert(arr23)
                                                    dataMusic.setAttribute('data-m2',arr23)

                                                    return false
                                                }
                                               
                                                // console.log('aaaa',dataMusicObject)
                                                // playKongJian()
                                                // ..---------------------
                                            }

                                        })
                                // }
                            }
                        })
                    }

                }
               
            },  
    error:function(e){  
        // alert("系统繁忙请稍后重试")    
    }  
}); 





for(var j = 0;j<astwo.length;j++) {
    astwo[j].onclick = function() {

    }
}


// 给所有的one、two注册点击事件







