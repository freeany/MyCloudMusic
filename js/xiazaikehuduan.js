
// 下载手机端按钮的Js
var u_downphone=document.getElementsByClassName('u-downphone')[0]
var mobile_qrcode=document.getElementsByClassName('mobile_qrcode')[0]
// 下载全部客户端（n-ad)js代码

var n_ad=document.getElementsByClassName("n-ad")[0]

var n_display=document.getElementsByClassName('n-display')[0]


// u_downphone.onclick=function (){
//     var isShow=mobile_qrcode.style.display
//     mobile_qrcode.style.display=isShow=="block"?"none":"block"
//     $(document).one("click",
//     function() { //对document绑定一个影藏Div方法
//         $(".mobile_qrcode").hide();
        
// });
u_downphone.onclick=f1;

function f1(){
    var isShow=mobile_qrcode.style.display
    mobile_qrcode.style.display=isShow=="block"?"none":"block"
    $(document).one("click",
    function() { //对document绑定一个影藏Div方法
        $(".mobile_qrcode").hide();
        
});
 event.stopPropagation();//阻止事件向上冒泡
}
$(".mobile_qrcode").click(function(event) {

    event.stopPropagation(); //阻止事件向上冒泡
});
n_ad.onclick=f2;
function f2(){
    var isShow=n_display.style.display
    n_display.style.display=isShow=="block"?"none":"block"
    $(document).one("click",
    function() { //对document绑定一个隐藏Div方法
        $(".n-display").hide();
        
});
event.stopPropagation();//阻止事件向上冒泡

};
$(".n-display").click(function(event) {

    event.stopPropagation(); //阻止事件向上冒泡
});


