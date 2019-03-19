$(function(){
   
    var playerFn = {
        palyflag:true, // 控制音乐播放暂停 , 只有在切歌时置为true代表重新播放
        voiceIndex:0, // 播放歌曲的索引
        source:$('#audio source'),//存放歌曲地址
        causeTime:0, // 暂停时时间
        isCaused: false, // 事否惊行了暂停播放 ，切歌时将其置为false
        audios:document.getElementById("audio"), //播放器对象
        timer:null, // 声音播放定时器
        isDownMouse:false, // 是否点下标 进度
        allTime:0, // 当前播放音频的总长度
        goTime:0, // 快进的时间节点
        isDownVoice:true, //是否点下鼠标 音量
        voiceArr:[{
                src:"voice/1.mp3",
                title:"悟空",
                author:'戴荃'
            },{
                src:"voice/2.mp3",
                title:"红色高跟鞋",
                author:'陈一发'
            },{
                src:"voice/3.mp3",
                title:"卜可勤",
                author:'陈一发'
            },{
                src:"voice/4.mp3",
                title:"离人愁",
                author:'李袁杰'
            },{
                src:"voice/5.mp3",
                title:"背对背拥抱",
                author:'林俊杰'
            }

        ],
        player:document.getElementById("audio"),//播放器对象
        init:function(){
            //初始化第一歌音频
            playerFn.initFirstVoice();
            // 播放
            $('.playBtn').click(function(){
                playerFn.playVoice()
            })
            // 下一首
            $('.next').click(function(){
                playerFn.next()
            })
            // 上一首
            $('.prev').click(function(){
                playerFn.prev()
            })
            // 拖拽改变播放进度
            $('.playPoint').mousedown(function(){
                playerFn.timeDown()
            }) 
            // 拖拽改变音量
            $('.soundPoint').mousedown(function(){
                playerFn.voiceDown()
            })
           
        },
        // 初始化第一个音频
        initFirstVoice:function(){
            playerFn.audios.oncanplay = function(){
                playerFn.allTime = Math.ceil(playerFn.audios.duration);
                var allTimeHMS = playerFn.getHMS(Math.ceil(playerFn.allTime));
                $('.timeAll').html("&nbsp;/&nbsp;" + allTimeHMS);
                console.log(playerFn.allTime)
            }
        },
        // 播放
        playVoice:function(){
            var source = $('#audio');
            alert(2)
            if(playerFn.palyflag && !playerFn.isCaused){   // 从新播放
                console.log('播放')
                console.log( playerFn.audios.currentTime)
                playerFn.resizeTime() // 重置样式
                source.attr('src',playerFn.voiceArr[playerFn.voiceIndex].src);
                console.log(playerFn.audios);
                playerFn.audios.load(); // 重新加载video，如果不该变地址后将无法获取正确的video
                playerFn.audios.play();
                playerFn.playbackProgress(1);
                playerFn.palyflag = false
            } else if (!playerFn.palyflag && !playerFn.isCaused) { // 暂停
                console.log('暂停')
                playerFn.isCaused = true,
                playerFn.palyflag = false
                playerFn.causeTime = playerFn.audios.currentTime;
                playerFn.playbackProgress(2);
                playerFn.audios.pause();
            } else if (!playerFn.palyflag && playerFn.isCaused) { // 暂停后的播放                            
                console.log('暂停后的播放')
                playerFn.palyflag = false
                playerFn.isCaused = false,
                playerFn.audios.play();
                playerFn.playbackProgress(3);
            }
        },
       
        // 播放进度条以及时间行进
        // 1 为正常播放以及切歌
        // 2 为暂停
        // 3 为暂停后的播放
        // 4 为拖动后的播放
        playbackProgress:function(type){
            // 正常播放切歌
            if(type == 3){ // 暂停后的播放
                playerFn.audios.currentTime = playerFn.causeTime;
            } else if (type == 2) {  // 暂停
                clearInterval(playerFn.timer)
            } else if (type == 4) {
                playerFn.audios.currentTime = playerFn.goTime;
                console.log(playerFn.audios.currentTime,'playerFn.audios.currentTime')
            }
            playerFn.audios.oncanplay = function(){
                playerFn.allTime = Math.ceil(playerFn.audios.duration);
                var allTimeHMS = playerFn.getHMS(Math.ceil(playerFn.allTime));
                $('.timeAll').html("&nbsp;/&nbsp;" + allTimeHMS);
                playerFn.timer = setInterval(function(){
                    var nowTime = Math.ceil(playerFn.audios.currentTime);
                    var nowTimeHMS = playerFn.getHMS(Math.ceil(nowTime));
                    var allWidth = $('.playRole').width()
                    $('.timeNow').html(nowTimeHMS);
                    var width = allWidth * nowTime/playerFn.allTime ;
                    $('.playRole span').width(width);
                    if(playerFn.audios.ended){
                        playerFn.next()
                    }
                },1000)
            }    
        },
        // 获取时分秒
        getHMS:function(s){
            var t;
            if(s > -1){
                var hour = Math.floor(s/3600);
                var min = Math.floor(s/60) % 60;
                var sec = s % 60;
                if(hour < 10) {
                    t = '0'+ hour + ":";
                } else {
                    t = hour + ":";
                }

                if(min < 10){t += "0";}
                t += min + ":";
                if(sec < 10){t += "0";}
                t += sec;
            }
            return t;
        },
        // 顺序播放
        sequentialPlay:function(){
            if( playerFn.audios.ended){
                alert(1)
            }
        },
        // 切换下一首
        next:function(){
            playerFn.voiceIndex++;
            if(playerFn.voiceIndex>=playerFn.voiceArr.length){
                playerFn.voiceIndex = 0;
            }
            playerFn.palyflag = true;
            playerFn.isCaused = false;
            playerFn.audios.pause();
            playerFn.playVoice();
        },
        // 切换上一首
        prev:function(){
            playerFn.voiceIndex--;
            if(playerFn.voiceIndex< 0){
                playerFn.voiceIndex = playerFn.voiceArr.length-1;
            }
            playerFn.palyflag = true;
            playerFn.isCaused = false;
            playerFn.playVoice();
        },
        // 重置时间及进度条
        resizeTime:function(){
            clearInterval(playerFn.timer);
            $('.playRole span').width(0);
            console.log(playerFn.voiceArr[playerFn.voiceIndex].title)
            console.log(playerFn.voiceArr[playerFn.voiceIndex].author)
            $('.playerContent .title').html(playerFn.voiceArr[playerFn.voiceIndex].title);
            $('.playerContent .name').html(playerFn.voiceArr[playerFn.voiceIndex].author);
        },
        // 拖拽改变播放进度
        timeDown:function(self){
            if(event.which == 1){
                playerFn.isDownMouse = true;
                playerFn.audios.pause();
                clearInterval(playerFn.timer)
                playerFn.timeOver() ;
                playerFn.timeUp() ;
            }
        },
        // 鼠标移动进度
        timeOver:function(){
            $('body').mousemove(function(event) {
                var playRoleLeft = $('.playRole').offset().left
                if(playerFn.isDownMouse){
                    var x = event.clientX
                    var playPointLeft = x- playRoleLeft
                    if(playPointLeft<0){
                        playPointLeft = 0;
                    } else if(playPointLeft>500) {
                        playPointLeft = 500;
                    }
                    $('.playSpan').css('width',playPointLeft)
                    var p  = playPointLeft/500;
                    playerFn.goTime = p * playerFn.allTime;
                    var nowTime = Math.ceil(playerFn.goTime);
                    var nowTimeHMS = playerFn.getHMS(Math.ceil(nowTime));
                    $('.timeNow').html(nowTimeHMS);

                }
            });
        },
        // 鼠标弹起进度
        timeUp:function(){
            $('body').mouseup(function(){
                playerFn.isDownMouse = false;
                playerFn.audios.play();
                playerFn.playbackProgress(4);
                $('body').unbind("mouseup")
                console.log('upsd')
            })
        },
        // 拖拽改变音量
        voiceDown:function(self){
            if(event.which == 1){
                playerFn.isDownVoice = true;
                playerFn.changeVoice() ;
                playerFn.voiceUp() ;
            }
        },
        // 鼠标拖动音量
        changeVoice:function(){
            $('body').mousemove(function(event) {
                var soundRoleLeft = $('.soundRole').offset().left
                if(playerFn.isDownVoice){
                    var x = event.clientX
                    var soundRoleLeft = x- soundRoleLeft
                    if(soundRoleLeft<0){
                        soundRoleLeft = 0;
                    } else if(soundRoleLeft>100) {
                        soundRoleLeft = 100;
                    }
                    $('.hasSound').css('width',soundRoleLeft);
                    var voice =  soundRoleLeft/100;
                    playerFn.audios.volume = voice;
                    // playerFn.goTime = p * playerFn.allTime;
                    // var nowTime = Math.ceil(playerFn.goTime);
                    // var nowTimeHMS = playerFn.getHMS(Math.ceil(nowTime));
                    // $('.timeNow').html(nowTimeHMS);

                }
            });
        },
        // 鼠标拖动音量 弹起
        voiceUp:function(){
            $('body').mouseup(function(){
                playerFn.isDownVoice = false;
                $('body').unbind("mouseup")
            })
        }


    }
    playerFn.init();




})