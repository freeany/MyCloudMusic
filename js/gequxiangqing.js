var area = document.querySelector('textarea')
console.log(area);
// area.onclick{

// }

var back = document.querySelector('.back')
// window.pageYOffset
window.onscroll = function () {
    if (window.pageYOffset == 0) {
        back.style.display = 'none'
    } else {
        back.style.display = 'block'
    }
}

// window.onload=function(){
//     window.scrollTop==0
// }
// window.location.href = location.href;
window.onbeforeunload = function(){
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}

// window.onload = function () {
//     setTimeout(function () {
//         window.scrollTo(0, 0)
//     })
// }