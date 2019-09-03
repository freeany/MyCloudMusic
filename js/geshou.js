

    var lis = document.querySelectorAll('li.lis')
    //   console.log(lis);

    var cls = document.getElementsByClassName('rightone')
    //   console.log(cls)
    var imgli=document.querySelector('.singer-pig').children[0].children
    // console.log(imgli);
    
    var audio =document.getElementById('audio')
    // console.log(audio)
        for(var j=0;j<imgli.length;j++) {
            //给图片li注册点击事件，音频出现
            imgli[j].onclick=function() {
                audio.style.display='block'
            }
        }

        // audio.onclick=function() {
        //     autoplay
        // }


    for (var j = 0; j < cls.length; j++) {
    }


    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('num', i)
        lis[i].onclick = function () {
            for (var h = 0; h < cls.length; h++) {
                cls[h].style.display = 'none'
            }
            var sstr = this.getAttribute('num')
            cls[sstr].style = 'display:block'

        }
    }





