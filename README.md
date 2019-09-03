# MyCloudMusic
模仿网易云音乐pc端的，功能交互上全都是纯原生js的写法，小伙伴们可以用这个锻炼自己的原生js的功底
  ps: 大多是一些原生js自带的API
  
  - 项目中使用了网易云的API
  - NeteaseCloudMusicApi
  - 如果需要连接后台接口，请移步
  - https://github.com/Binaryify/NeteaseCloudMusicApi
  - 安装环境，开启端口就可以访问后台数据了
  - 项目只对登录端口进行了交互以及音乐飙升榜的最热的前三首进行后台数据的渲染。
  - 使用本地缓存对登录功能进行拦截
  - 有适当的交互功能。
  - 关于单页面，使用ifram内嵌网页的形式。
  - 请打开default.html进入入口页面
       

# 项目中遇到的问题各种坑  以及 知识点的总结

- opacity设置opacity元素的所有后代元素会随着一起具有透明性

- padding无法对背景图生效，会产生一些问题
    解决方式----使用margin	

- justify-content: space-between;

- 背景图片的连写
- background:url("haoroomsCSS1_s.jpg") 0 0 no-repeat,
                     url("haoroomsCSS2_s.jpg") 200px 0 no-repeat,
                     url("haorooms.jpg") 400px 201px no-repeat;

- background-image:url("1.jpg"),url("2.jpg"),url("3.jpg");
- background-repeat: no-repeat, no-repeat, no-repeat;  
- background-position: 0 0, 200px 0, 400px 201px;  


- 单行溢出给父盒子加


- background-size作用于精灵图上，设置的是整个精灵图

- 设置目标图片的大小。（精灵图中指定的图片过大）
- **计算雪碧缩放的大小的公式: **background-size 的宽度值 = (雪碧图总宽度 * 目标图像宽度) /雪碧图中高分辨率图像宽度
- 高度auto，等比例缩放
- 在一些大项目中，精灵图太多。所以需要掌握此公式


- background-image: linear-gradient(green,yellow);

- dl dt dd很常用


- 给第一个dd设置样式不能用dd:first-child

- 写完静态之后，直接往html结构中填就行了。


- 事件的委派只能给直接子元素？？？--------------不是
- 响应函数，回调函数或者定时器要debug要在函数内部添加断点


- 怎样通过location.hash获取当前元素
  --- 截取字符串


- 给单个div取消box-sizing : border-box
- box-sizing: content-box;

- css命名方案

- 给a标签设置下划线，只能使用
- text-decrotion:none
- border-bottom:1px solid #000;


- 控制元素的显示与隐藏，也可以使用添加类移除类的方式来进行控制
- 当服务器上打开网页的宽度或其他有问题时，应该是浏览器缓存的问题


- ajax中的this指的是当前ajax对象

- 获取自定义属如果是数组的话，系统会将数组的[ ]两边进行去除。如果需要json转换过来，则需要手动加 [ ],然后使用json进行转换  ~~~~

## 项目总结一下吧
1. 做项目的时候，碰到了很多形形色色的问题
2. 考虑到用户的需要，性能，怎么做缓存音乐列表，更好的处理方式是什么？
3. 项目的整体架构，与细节处理。每一个点上的细节处理。。各个点之间形成配合，促进代码的性能，可读，健壮
4. 每个点如何配合？如何封装提供数据，如何共享数据。  什么样的结构让代码更好的管理	


							

