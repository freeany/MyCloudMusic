var txt=document.getElementById('txt')
var button=document.getElementById('button')
var center=document.getElementById('center')
var arr=[1]
button.onclick=function() {
    var content=txt.value
    arr.push=txt.value
    //根据提交的内容动态的创建li放进ul
    var li=document.createElement('li')
    li.style.position="relative"
    li.innerText="评论："+ content
    var span=document.createElement(span)
    span.style.display='block'
    span.style.float='left'
    span.style.width='50px'
    span.style.height='50px'
    span.style.marginRight="10px"
    span.style.backgroundImage= "url('../assets/images/rankList/109951164173466093.jpg')"
    var now =new Date()
    var time=now.toLocaleTimeString()
    var i=document.createElement('i')
    i.style.position='absolute'
    i.style.left='60px'
    i.style.top="50px"
    i.innerText=time
    li.appendChild(i)
    li.appendChild(span)
    ul.insertBefore(li,ul.firstElementChild)
    txt.value=''

}
// console.log(arr);
    var uls=center.children
    for(var i=0;i<uls.length;i++) {
        if(i%2==0) {
          uls[i].style.backgroundColor="#dcd7d770"
        }
    }

    for(var i=0;i<uls.length;i++) {
    uls[i].onclick=function() {
        this.onclick=null
        for(var j=0;j<uls.length;j++) {
            uls[j].style.height='30px'
        }
        this.style.height='50px'
        // this.style.lineHeight="50px"
        for(var h=0;h<uls.length;h++) {
            var liss=uls[h].children[1]
            // console.log(liss)
            var i=document.createElement("i")
            i.classList=''
            liss.insertBefore(i,liss.firstElementChild)
        }

        this.children[1].children[0].classList='tupian'
    }
}
