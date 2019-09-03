
/* 
    事件绑定函数
*/

function bind(obj,eventStr,callback) {
    if(obj.addEventListener) {
        obj.addEventListener(eventStr,callback,false);
    }else {
        obj.attachEvent("on"+eventStr,function() {
            callback.call(obj);
        })
    }
}

/* 
    获取样式的函数
*/

function getStyle(e,styleName) {
    if(getComputedStyle) {
        return getComputedStyle(e,null)[styleName];
    }else {
        return getCurrentStyle(e)[styleName];
    }
}

/* 
    添加类的函数
*/
function addClass(e,ClassName) {
    var classN = e.getAttribute("class");
    if(!classN) {
        classN = "";
    }
    if(!hasClass(e,ClassName)) {
        // 如果没有则添加
        e.setAttribute("class",classN+" "+ClassName);
    }

}

/* 
    删除类的函数
*/
function removeClass(e,ClassName) {
    if(hasClass(e,ClassName)) {
        
        // 如果没有则添加
        var reg = new RegExp("\\b"+ClassName+"\\b");
        var classN = e.getAttribute("class");
        var newClass = classN.replace(reg,"");

        e.setAttribute("class",newClass);
    }
}

/* 
    切换的练习
*/

function toggleClass(e,ClassName) {
    hasClass(e,ClassName) ? removeClass(e,ClassName) : addClass(e,ClassName)
}

/* 
    判断是否有这个类
*/
function hasClass(e,ClassName) {
    var reg = new RegExp("\\b"+ClassName+"\\b");

    var classN = e.getAttribute("class");
    return reg.test(classN);
}

/* 
    添加动画的样式

    谁的动画
    属性
    速度
    目标      -- 一般给20
    执行事件  --一般给20
    回调函数
*/
function move(obj,attr,speed,target,time,callback) {
    clearInterval(obj.timer);
    // 判断速度是正还是负。因为用户不可能指定正负，需要程序去判断
    
    //获取当前left的值
    var current = getStyle(obj,attr);
    // 处理负数的情况
    if(current.charAt(0) == "-") {
        // 处理负数转化为float类型为NaN的情况
        current = current.slice(1);
        current = -parseFloat(current);
    }else {
        current = parseFloat(current);
    }

    if(current>target) {
        speed = -speed;
    }

    obj.timer = setInterval(function() {
        // 监听老的值
        var oldValue = getStyle(obj,attr);
        // 处理负数的情况
        if(oldValue.charAt(0) == "-") {
            // 处理负数转化为float类型为NaN的情况
            oldValue = oldValue.slice(1);
            oldValue = -parseFloat(oldValue);
        }else {
            oldValue = parseFloat(oldValue);
        }
        
        //获取新的值
        var newValue = oldValue + speed;
        
        if((newValue>oldValue && newValue>target)  || (newValue<oldValue && newValue<target)) {
                newValue = target;
        }

        obj.style[attr] = newValue+"px";

        
        if(newValue == target) {
            clearInterval(obj.timer);

            callback && callback();
        }
    },time)
}


/* 
     元素js获取指定元素的第一个元素与最后一个元素
     兼容IE8
*/
function getFirstElementChild(element) {
    if(element.firstElementChild){//true--->支持
      return element.firstElementChild;
    }else{
      var node=element.firstChild;//第一个节点
      while (node&&node.nodeType!=1){
        node=node.nextSibling;
      }
      return node;
    }
  }
  //获取任意一个父级元素的最后一个子级元素
  function getLastElementChild(element) {
    if(element.lastElementChild){//true--->支持
      return element.lastElementChild;
    }else{
      var node=element.lastChild;//第一个节点
      while (node&&node.nodeType!=1){
        node=node.previousSibling;
      }
      return node;
    }
  }

    //解绑事件:
  /*
  * 注意:用什么方式绑定事件,就应该用对应的方式解绑事件
  * 1.解绑事件
  * 对象.on事件名字=事件处理函数--->绑定事件
  * 对象.on事件名字=null;
  * 2.解绑事件
  * 对象.addEventListener("没有on的事件类型",命名函数,false);---绑定事件
  * 对象.removeEventListener("没有on的事件类型",函数名字,false);
  * 3.解绑事件
  * 对象.attachEvent("on事件类型",命名函数);---绑定事件
  * 对象.detachEvent("on事件类型",函数名字);
  *
  *
  * */

  function removeEvent(obj,eventStr,callback) {
      var eventStr2 = "on"+eventStr
      if(window.removeEventListener) {
        obj.removeEventListener(eventStr,callback,false)
      }else if(window.attachEvent) {
          obj.detachEvent(eventStr2,callback)
      }else {
          obj[eventStr2] = null
      }
  }


  /* 
    轮播动画
  */

  function aninmation(obj,op) {
        setInterval(function(){
            op += 0.1
            obj.style.opacity = op
        },100)

        
  }


