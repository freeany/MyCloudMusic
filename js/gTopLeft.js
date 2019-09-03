var indexScroll = 0;
        var mTop = document.getElementById('m-top')

        // ifram操作父元素。
        // 
       var parentA = window.parent.document
      //  console.log(parentA.getElementById('music'))
    //    console.log(parentA)
       var gTop = parentA.getElementById("g-topbar")
        // console.log(gTop)
       window.onscroll = function() {
            // console.log(window.pageYOffset)     
            indexScroll =  window.pageYOffset;   
            mTop.dataset.indexS = indexScroll

            gTop.style.top = -indexScroll+'px'
}