var title = document.getElementById('title')
var loginLayer = document.getElementById('login-layer')
// alert(loginLayer.offsetParent)
title.onmousedown = function(e) {
    var currentX = e.pageX;
    var currentY = e.pageY;

    // 获取当前弹出层的定位置
    var currentLeft = loginLayer.offsetLeft
    var currentTop = loginLayer.offsetTop

    this.onmousemove = function(e1) {
        
        // 再次获取鼠标移动时的位置
        var nowX = e1.pageX
        var nowY = e1.pageY

        // 计算鼠标移动的距离
        var distX = nowX - currentX
        var distY = nowY - currentY

        var minLeft = 0
        var maxTop = 0
        // 获取当前窗口的宽度
        var currentWidth = window.innerWidth
        var currentHeight = window.innerHeight
        // 获取弹出层的宽度
        var loginLayerWidth = loginLayer.offsetWidth
        var loginLayerHeight = loginLayer.offsetHeight

        var maxLeft = currentWidth - loginLayerWidth;
        var maxTop = currentHeight - loginLayerHeight
        // console.log(maxLeft)
        // console.log(maxTop)
        

        var nowLeft = currentLeft + distX
        var nowTop = currentTop + distY

        if(nowLeft > maxLeft) {
            nowLeft = maxLeft
        }
        if(nowLeft < 0) {
            nowLeft = 0
        }
        if(nowTop < 0) {
            nowTop = 0
        }
        if(nowTop > maxTop) {
            nowTop = maxTop
        }
        // nowLeft = nowLeft >= maxLeft ? maxLeft : nowLeft
        // nowTop = nowTop <=  0 ? 0 :nowTop

        loginLayer.style.left = nowLeft + 'px'
        loginLayer.style.top = nowTop + 'px'
    }

    this.onmouseup = function() {
        this.onmousemove = null
        this.onmousedown = null
        
    }
}

// 点击×号关闭窗口
var zClose = document.getElementById('z-close')
var loginLayer = document.getElementById('login-layer')
var loginZheZhao = document.getElementById('login-zhezhao')
zClose.onclick = function() {
    loginLayer.style.display = ''
    // 取消遮罩
    loginZheZhao.style.display = ''
}

var loginBtn = document.getElementById('login-btn')
loginBtn.onclick = function() {
    // console.log(this)
    // 获取输入的值
    var phone = document.getElementById('phone')
    var pwd = document.getElementById('pwd')

    // 获取存放错误信息的div
    var loginError =  document.getElementById('login-error')
    var loginErrorSpan = loginError.getElementsByTagName('span')[0]

    // 获取自动登录的checkbox
    var autoLogin = document.getElementById('auto-login')

    // 获取框框，错误给其加上红色的边框
    var phoneNumber = document.getElementById('phoneNumber')
    var pwdNumber = document.getElementById('pwdNumber')

    var phoneVal = phone.value
    var pwdVal = pwd.value

    /* 
    当用户手机号没有输入时，提示用户，display = 'block'
    什么时候消除
    */


    if(!autoLogin.checked) {
        // reru
    }
    if(!phoneVal.trim()) {
        phoneNumber.style.border = '1px solid red'
        // phone.style.outlineStyle = 'red'
        loginError.style.display = 'block'
        loginErrorSpan.innerText = '请输入手机号'
        return 
    } else if(!pwdVal.trim()) {
        phoneNumber.style.border = ''
        pwdNumber.style.border = '1px solid red'
        // pwd.style.outlineStyle = 'red'
        loginError.style.display = 'block'
        loginErrorSpan.innerText = '请输入密码'
        return
    }

    // 如果用户的手机号与密码都输入正确，则获取数据进行登录

    $.ajax({  
        type: "post",  
        url: "http://localhost:3000/login/cellphone?phone="+phoneVal+"&password="+pwdVal,  
        // contentType: "application/x-www-form-urlencoded",
        // data: {phone:$("#phone").val(), password:$("#pwd").val()},  
        // data: $('#form1').serialize(),
        dataType: "json",  
        success: function(data){  
                    if(data.code === 200) {
                        console.log("登陆成功")
                        alert('登录成功')
                        // console.log(data)
                        /* 
                            登录成功之后，需要进行一些操作
                            1、将登录窗口关闭
                            2、将头像赋值到登录面上
                            3、产生新的ul
                        */
                       zClose.onclick()

                    //    获取登录二字的 a标签的值
                    var loginA = document.getElementById('login')
                    loginA.innerText = ''
                        
                    loginA.innerHTML = '<img src="'+data.profile.avatarUrl+'" alt="" width = 30 height = 30>'
                    
                    /*
                        将数据存放在localStorage  本地存储中

                    */

                    var did = data.account.id
                    var dname = data.profile.nickname
                    localStorage.setItem('loginId',did)
                    localStorage.setItem('loginname',dname)

                    

                    loginA.getElementsByTagName('img')[0].style.borderRadius = '30px'

                    }  
                },  
                error:function(e){  
                    alert("系统繁忙请稍后重试")    
                }  
        }); 
}