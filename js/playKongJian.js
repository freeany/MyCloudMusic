setTimeout(fun, 3000)
function fun() {
    var dm2;
    var dm3
    // var asone = document.querySelectorAll('.bill-main dd div .one')



    // for(let k =0;k<asone.length;k++) {
    //     asone[k].onclick = function(e) {
    //         e.preventDefault || e.preventDefault()
    //         var a = asone[k].dataset
    //         return false

    //     }
    // }

    //创建id函数->偷懒
    function id(id) {
        return document.getElementById(id);
    }

    //封装函数？优化代码？不存在的！

    //创建音乐功能对象
    var audioPlayer = id("audioPlayer");//音乐播放器组件的id
    var musicPlayer = {
        play: function () {
            audioPlayer.play();
        },
        stop: function () {
            audioPlayer.pause();
        },
        volume: function () {
            return audioPlayer.volume;
        },
        src: function () {
            return audioPlayer.src;
        },
        startTime: function () {
            var x = 0;
            var y = 0;
            x = parseInt(audioPlayer.currentTime / 60);
            y = parseInt(audioPlayer.currentTime % 60);
            if (x < 10) {
                x = "0" + x;
            }
            if (y < 10) {
                y = "0" + y;
            }
            return x + ":" + y;
        },
        endTime: function () {
            var x = 0;
            var y = 0;
            x = parseInt(audioPlayer.duration / 60);
            y = parseInt(audioPlayer.duration % 60);
            if (x < 10) {
                x = "0" + x;
            }
            if (y < 10) {
                y = "0" + y;
            }
            return "/ " + x + ":" + y;
        },
        currentTime: function () {
            return audioPlayer.currentTime; //为了获取更加精细的数值
        },
        duration: function () {
            return audioPlayer.duration;    //为了获取更加精细的数值
        }
    }

    //测试      用于存放数据
    var srcArr = [];
    var dataMusic = document.getElementById('dataMusic')
    // console.log('aaaa',dataMusic)
    var dataMusicData = dataMusic.getAttribute('data-musicdata')
    var dataMusicData1 = '[' + dataMusicData + ']'

    // console.log(dataMusicData)


    // 解析之后从后台获取的数据
    var objectDataMusic = JSON.parse(dataMusicData1)


    // console.log(objectDataMusic)
    var timer333;
    var timer111 = setInterval(function () {
        var dm = document.getElementById('dataMusic')
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        dm2 = dm.getAttribute('data-m2')
        // alert(dm2)
        if (dm2 && dm2!='undefined') {
            // alert('被动了')
            // dm2 = '['+dm2+']'
            // alert(dm2)
            dm3 = JSON.parse(dm2)
            // console.log('111111111111111111111111111111111')
            // console.log(dm3)

            // if(dm3[0]) {
            srcArr.push(dm3[0])

            
            clearInterval(timer111)
        }
    }, 500)
    
    var music_src_cike = {
        songs_url: "./assets/audio/Assassin's_Creed.mp3",
        songs_name: "Assassin's_Creed"
    };
    var music_src_baijin = {
        songs_url: "./assets/audio/StandStar.mp3",
        songs_name: "StandStar白金之星"
    };

    var music_src_dujiao = {
        songs_url: "./assets/audio/dujiao.mp3",
        songs_name: "独角兽"
    };

    var music_src_itd = {
        songs_url: "./assets/audio/InTheEnd.mp3",
        songs_name: "In The End变奏版"
    };

    // for(var i =0;i<objectDataMusic.length;i++) {

    // }
    srcArr.unshift(music_src_baijin, music_src_cike, music_src_dujiao, music_src_itd);

    if(objectDataMusic.length>2) {
        for(var q =0; q<objectDataMusic.length;q++) {
            srcArr.push(objectDataMusic[q])
        }
    }
   
    // var srcArr = objectDataMusic;


    // console.log('--------------------------------------=======')
    // console.log(srcArr);

    var srcIndex = srcArr.length;                                       //更改处

    //本地变动的值
    var soundVolume = musicPlayer.volume();



    //底部js效果块获取
    var music = id("music");    //底部music播放栏

    //获取4个播放控件
    var pBtn = id("pBtn");      //上一首按钮
    var playBtn = id("playBtn");//播放按钮
    var ztBtn = id("ztBtn");    //暂停按钮
    var nBtn = id("nBtn");      //下一首按钮

    //获取进度条和进度球
    var line_red = id("line-red");//红色进度条
    var line_ball = id("line-ball");//进度球
    var lineBox = id("lineBox");    //总进度条
    //获取进度条和进度球的值
    var w_red = line_red.offsetWidth;   //红色进度条，初始0     注意：更改这个值无效
    var l_ball = line_ball.offsetLeft;  //进度球，初始为-8      注意：更改这个值无效
    var widthNum = lineBox.offsetWidth; //总进度条

    //获取时间
    var start_time = id("start-time");
    var end_time = id("end-time");

    //获取音量控件
    var sound_line = id("sound-line");          //音量总容器
    var sound_line_red = id("sound-line-red");  //红色音量进度条
    var sound_ball = id("sound-ball");          //音量球进度条
    var sound = id("sound");                    //当成一个按钮
    var soundBox = id("soundBox");              //控制display


    //播放模式
    var round_list = id("round-list");

    //锁和相关特效
    var suo1 = id("suo1");
    var suo2 = id("suo2");

    //底部列表框
    var listBtn = id("music-listBox-btn");  //列表框按钮
    var big_list = id("big_list");          //列表显示


    //列表块
    var musicListBoxText = id("music-listBox");//列表图标旁边的内容
    musicListBoxText.innerText = srcArr.length;
    var list_text = id("list_text");
    list_text.innerText = "播放列表(" + srcArr.length + ")";

    var timer;//用来同步宽度
    var timer1;//用来同步进度条
    var timer2 = null;//用来同步底部播放器特效


    //初始事件
    function init() {
        end_time.innerText = musicPlayer.endTime();
    };
    init();

    //点击事件

    //播放按钮点击事件
    playBtn.onclick = function () {
        //让暂停按钮显示
        this.style.display = "none";
        ztBtn.style.display = "block";
        musicPlayer.play();
        // console.log(audioPlayer.src);
        // alert(musicPlayer.src());
    }

    //暂停按钮点击事件
    ztBtn.onclick = function () {
        this.style.display = "none";
        playBtn.style.display = "block";
        musicPlayer.stop();
    }

    //上一首按钮点击事件
    pBtn.onclick = function () {
        ztBtn.style.display = "none";
        playBtn.style.display = "block";
        musicPlayer.stop();
        var index = 0;
        for (let i = 0; i < srcArr.length; i++) {
            var reg = new RegExp(srcArr[i].songs_url);    //原理：用正则来判断索引
            if (reg.test(audioPlayer.src)) {
                index = i;
                break;
            }
        }
        index--;
        if (index < 0) {
            index = 0;
        }
        // audioPlayer.src = "./" + srcArr[index].songs_url;
        audioPlayer.src = srcArr[index].songs_url;
        if (audioPlayer) {
            setTimeout(function () {
                end_time.innerText = musicPlayer.endTime();     //关于音频总时长，IE不知为何获取不到，在IE dege版本中控制台中会打印两行，一行正确数值， 一行underfind
                musicPlayer.play();
                id("words-sp1").innerText = "当前歌曲： " + srcArr[index].songs_name;
                ztBtn.style.display = "block";
                playBtn.style.display = "none";
            }, 200);
        }
    }


    console.log(srcArr);
    //下一首按钮点击事件
    nBtn.onclick = function () {
        ztBtn.style.display = "none";
        playBtn.style.display = "block";
        musicPlayer.stop();
        var index = 0;
        for (let i = 0; i < srcArr.length; i++) {
            var reg = new RegExp(srcArr[i].songs_url);    //原理：用正则来判断索引
            if (reg.test(audioPlayer.src)) {
                index = i;
                break;
            }
        }
        index++;
        if (index > srcArr.length - 1) {
            index = srcArr.length - 1;
        }
        // audioPlayer.src = "./" + srcArr[index].songs_url;
        audioPlayer.src = srcArr[index].songs_url;
        if (audioPlayer) {
            setTimeout(function () {
                end_time.innerText = musicPlayer.endTime();
                musicPlayer.play();
                id("words-sp1").innerText = "当前歌曲： " + srcArr[index].songs_name;
                ztBtn.style.display = "block";
                playBtn.style.display = "none";
            }, 200);
        }
    }

    //隐藏或显示音量控件
    sound.onclick = function (event) {
        event.stopPropagation();
        if (soundBox.style.display != "block") {
            soundBox.style.display = "block";
        } else {
            soundBox.style.display = "none";
        }
    }
    // console.log(document.getElementsByClassName("container")[0]);
    document.body.onclick = function (event) {
        // event.target == document.getElementsByClassName("container")[0]
        if (event.target == document.getElementsByClassName("container")[0] && soundBox.style.display != "none") {
            soundBox.style.display = "none";
        }
        // console.log("2");
    }


    //播放模式切换
    round_list.onclick = function () {
        if (this.className != "iconfont icon-danquxunhuan") {
            this.className = "iconfont icon-danquxunhuan";
            this.title = "当前模式:单曲循环";
        } else {
            this.className = "iconfont icon-xunhuanbofang";
            this.title = "当前模式:列表循环";
        }
    }


    //锁的切换
    suo1.onclick = function () {
        this.style.display = "none";
        suo2.style.display = "block";
        music.onmouseleave = function () {
            clearTimeout(timer2);
            timer2 = setTimeout(function () {       //懒得进行改动了，也懒得封装，麻烦死了
                music.style.bottom = "-47px";
            }, 2000);
        };
    }

    suo2.onclick = function () {
        this.style.display = "none";
        suo1.style.display = "block";
        music.onmouseleave = false;
    }

    music.onmouseover = function () {
        this.style.bottom = "0px";
        clearTimeout(timer2);
    }
    music.onmouseleave = function () {
        clearTimeout(timer2);
        timer2 = setTimeout(function () {
            music.style.bottom = "-47px";
        }, 2000);
    }


    //列表框效果
    listBtn.onclick = function () {
        if (big_list.style.display != "block") {
            big_list.style.display = "block";
        } else {
            big_list.style.display = "none";
        }
    }
    var xBtn = id("xBtn");
    xBtn.onclick = function () {
        big_list.style.display = "none";
    }

    //进度条点击事件
    var tran_line = document.getElementById("tran-line");
    tran_line.onclick = function (event) {      //注释懒的写了
        var a1 = this.offsetLeft;
        var a2 = this.parentNode.offsetLeft;
        var a3 = this.parentNode.parentNode.offsetLeft;
        var a4 = this.parentNode.parentNode.parentNode.offsetLeft;
        var a5 = a1 + a2 + a3 + a4;
        var bizhiX = event.clientX - a5;
        // console.log(bizhiX);
        playBtn.style.display = "block";
        ztBtn.style.display = "none";
        setTimeout(function () {
            playBtn.style.display = "none";
            ztBtn.style.display = "block";

        }, 200);
        line_ball.style.left = bizhiX - 8 + "px";
        var curt = parseInt(musicPlayer.duration() / (lineBox.offsetWidth / bizhiX));
        // console.log(musicPlayer.duration());
        // console.log(lineBox.offsetWidth);
        // console.log(bizhiX);
        //总时间/当前时间 = 总进度条长度/当前进度
        audioPlayer.currentTime = curt;
        start_time.innerText = musicPlayer.startTime();
        line_red.style.width = bizhiX + "px";
        musicPlayer.play();
    }

    //音量点击事件
    var tran_line = document.getElementById("tran_line");
    tran_line.onclick = function (event) {        //注释懒得写了
        event.stopPropagation();
        // 148
        var a1 = window.innerHeight - 148;
        // console.log(a1);
        // console.log(event.clientY - a1);
        sound_ball.style.top = event.clientY - a1 - 6 + "px";
        sound_line_red.style.height = sound_line.offsetHeight - sound_ball.offsetTop - 6 + "px";
        // console.log(sound_line_red.offsetHeight, sound_ball.offsetTop);
        audioPlayer.volume = sound_line_red.offsetHeight / sound_line.offsetHeight;
        var musTitSty = "当前音量:" + parseInt(musicPlayer.volume() * 100) + "%";
        sound_ball.title = musTitSty;


    }

    //鼠标拖拽事件

    //音量拖拽事件
    sound_ball.onmousedown = function (event) {
        var y = event.clientY;
        var bizhi = y - this.offsetTop;     //获取当时点击的坐标，然后减去元素的相对于父元素的距离，从而得到一个相对的比值
        document.onmousemove = function (event) {
            var y = event.clientY;
            var abTop = y - bizhi;          //重新获取鼠标坐标，然后减去比值，从而得到元素相对父元素的距离
            if (abTop <= -6) {
                abTop = -6;
            }
            if (abTop >= 80) {
                abTop = 80;
            }
            var musTitSty = "当前音量:" + parseInt(musicPlayer.volume() * 100) + "%";
            sound.title = musTitSty;
            sound_line_red.style.height = sound_line.offsetHeight - abTop - 6 + "px";
            sound_ball.style.top = abTop + "px";
            sound_ball.title = musTitSty;
            audioPlayer.volume = (sound_line.offsetHeight - abTop - 6) / sound_line.offsetHeight;
            if (audioPlayer.volume > 0) {
                sound.className = "iconfont icon-shengyin";
            } else {
                sound.className = "iconfont icon-icon--";
            }
        }
        document.onmouseup = function () {
            this.onmousemove = false;
            this.onmouseup = false;
        }
    }


    //进度条拖拽事件
    line_ball.onmousedown = function (event) {
        var x = event.clientX;
        var bizhi = x - this.offsetLeft;
        document.onmousemove = function (event) {
            musicPlayer.stop();
            playBtn.style.display = "block";
            ztBtn.style.display = "none";
            var x = event.clientX;
            var abLeft = x - bizhi;
            if (abLeft < -8) {
                abLeft = -8;
            }
            if (abLeft > 488) {
                abLeft = 488;
            }
            line_ball.style.left = abLeft + "px";
            line_red.style.width = abLeft + 8 + "px";
            var s_miao = parseInt(line_red.offsetWidth / (lineBox.offsetWidth / musicPlayer.duration()));
            audioPlayer.currentTime = s_miao;
            start_time.innerText = musicPlayer.startTime();
        }
        document.onmouseup = function () {
            this.onmousemove = false;
            playBtn.style.display = "none";
            ztBtn.style.display = "block";
            musicPlayer.play();
            this.onmouseup = false;
        }
    }



    //定时器
    //宽度同步定时器
    timer = setInterval(function () {
        music.style.width = window.innerWidth + "px";
    }, 100);



    //进度条定时器
    timer1 = setInterval(function () {
        // console.log(w_red); //红色的进度条
        // console.log(musicPlayer.currentTime());//时间；单位s
        // console.log(musicPlayer.duration());//总时长
        // console.log(widthNum);  //总长度
        // console.log(audioPlayer.readyState,"wryyy");

        var ballWidth = parseFloat(l_ball + (widthNum / musicPlayer.duration()) * musicPlayer.currentTime()).toFixed(4);
        //创建ballWidth这个变量用来获得每秒进行位移的距离，设置小数点、配合定时器可以将这个数值展现的更加精准，但是上限也就那样
        if (ballWidth >= widthNum - 8) {
            ballWidth = widthNum - 8;
        }
        //原理和上一样
        var lineWidth = parseFloat((widthNum / musicPlayer.duration()) * musicPlayer.currentTime()).toFixed(4);
        if (lineWidth >= widthNum) {
            lineWidth = widthNum;
        }

        if (!audioPlayer.ended && !audioPlayer.paused) {
            line_ball.style.left = ballWidth + "px";
            line_red.style.width = lineWidth + "px";
        }

        //当音乐结束后,根据判断
        if (audioPlayer.ended) {
            playBtn.style.display = "block";
            ztBtn.style.display = "none";
            if (round_list.className === "iconfont icon-danquxunhuan") {
                setTimeout(function () {
                    musicPlayer.play();
                    playBtn.style.display = "none";
                    ztBtn.style.display = "block";
                }, 200);
            } else {
                var reg = new RegExp(srcArr[srcArr.length - 1].songs_url);
                if (!reg.test(audioPlayer.src)) {   //当音乐播放器结束时，执行下一首，假如下一首是数组中最后一首歌，便不执行
                    setTimeout(nBtn.onclick(), 200);
                }
            }

        }

        //播放时间
        if (!audioPlayer.paused) {
            start_time.innerText = musicPlayer.startTime();
            //title方面
            for (let i = 0; i < srcArr.length; i++) {
                var reg = new RegExp(srcArr[i].songs_url);    //原理：用正则来判断索引
                if (reg.test(audioPlayer.src)) {
                    // console.log(srcArr[i])
                   setTimeout(function(){
                    document.title = "正在播放：" + srcArr[i].songs_name;
                   },100)
                    break;
                }
            }
        }

        //结束时间
        end_time.innerText = musicPlayer.endTime();

        // 将当前值data-m2的值取出来
        if (srcIndex != srcArr.length) {     //更改处
            console.log('长度被改变了')

            var dm = document.getElementById('dataMusic')
            // dm.setAttribute('data-m2',undefined)       
            // alert('已发现被更改')
            playBtn.style.display = "block";
            ztBtn.style.display = "none";
            srcIndex = srcArr.length;
            // alert(srcIndex)
            setTimeout(function () {
                musicPlayer.play();
                playBtn.style.display = "none";
                ztBtn.style.display = "block";
            }, 200);
            setTimeout(function () {
                audioPlayer.src = srcArr[srcArr.length - 1].songs_url;
                id("words-sp1").innerText ="当前歌曲:" +  srcArr[srcArr.length - 1].songs_name;
               
                // dm2 = undefined;

                 timer333 = setInterval(function () {
                    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    dm2 = dm.getAttribute('data-m2')
                    // console.log(dm2)
                    // alert(dm2)
                    if (dm2 != "undefined" && dm2) {
                        // alert('a')
                        // dm2 = '['+dm2+']'
                        // console.log(dm2)
                        dm3 = JSON.parse(dm2)
                        document.title = "正在播放：" + dm3[0].songs_name;


                        srcArr.push(dm3[0])
                        console.log(srcArr)
                        
                        dm.setAttribute('data-m2',undefined) 
                        clearInterval(timer333)
                    }
                }, 0)
            },0);
        }

        //
    }, 100);
}