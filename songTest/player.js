$(function(){
    var playerFn = {
        palyflag:true, // 控制音乐播放暂停 , 只有在切歌时置为true代表重新播放
        voiceIndex:0, // 播放歌曲的索引
        source:$('#audio source'),//存放歌曲地址
        causeTime:0, // 暂停时时间
        isCaused: false, // 事否惊行了暂停播放 ，切歌时将其置为false
        audio :document.getElementById("audio"), //播放器对象
        timer:null, // 声音播放定时器
        isDownMouse:false, // 是否点下标 进度
        allTime:0, // 当前播放音频的总长度
        allTimeHMs:'' ,//显示当前播放音频的总长度
        goTime:0, // 快进的时间节点
        isDownVoice:true, //是否点下鼠标 音量
        voiceArr:[],
        player:document.getElementById("audio"),//播放器对象
        safairNum:0,
        isMoveFlag:false,
        init:function(){
            //初始化第一歌音频
            // playerFn.initFirstVoice();
            // 初始化播放器锁定状态
            playerFn.initLock();
            // 拖拽改变播放进度
            $('.playPoint').mousedown(function(event){
                playerFn.timeDown(event)
            }) 
            // 拖拽改变音量
            $('.soundPoint').mousedown(function(event){
                playerFn.voiceDown(event)
            })
            // 下一首
            $('.next').click(function(){
                if(playerFn.voiceArr.length>0){
                    playerFn.next();
                } else {
                     playerFn.next(2);
                }
            })
            // 上一首
            $('.prev').click(function(){
                if(playerFn.voiceArr.length>0){
                    playerFn.prev();
                } else {
                     playerFn.prev(2);
                }
            })
            // 点击播放按钮播放
            $('.playThis').click(function(){
                playerFn.safairNum++;
                if(!$(this).hasClass('isPlaying') && !$(this).hasClass('isCause')){
                    playerFn.playAll($(this));
                } else {
                    playerFn.playVoice();
                }
            })
            // 播放器解锁与锁定
            $('.playerLock').click(function(){
                playerFn.loclkPlayer($(this))
            })
            //鼠标划入与画出
            $('.playerConatiner').mouseenter(function(){
                playerFn.topPlayer()
            }).mouseleave(function(){
                playerFn.bottomPlayer()
            })
            //鼠标滑动事件 body
            $('body').mousemove(function(){
                if(playerFn.isMoveFlag){
                    return
                }
                var src = $(playerFn.player).attr('src')
                if(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !src){
                   setTimeout(function(){
                     $('.playThis')[0].click();
                    },100)
                    setTimeout(function(){
                       $('.playThis')[0].click();
                    },1000)
                    
                } else if(!src) {
                    playerFn.safairNum = 2
                }
                playerFn.isMoveFlag = true;
            })
           
        },
        // 初始化播放器锁定状态
        initLock:function(){
            var self = $('.playerConatiner');
            bottom = localStorage.Lockbottom || 0;
            if(localStorage.isLocked){
                self.css({
                    'bottom':bottom,
                }) 
                $('.playerLock ').addClass('playerLockd');
            }
        },
        //播放器解锁与锁定
        loclkPlayer:function(self){
            if(self.hasClass('playerLockd')){ // 解锁
                self.removeClass('playerLockd');
                // $('.playerConatiner').addClass('playerOpened');
                localStorage.isLocked = true;
            } else {                          // 锁定
                self.addClass('playerLockd');
                // $('.playerConatiner').removeClass('playerOpened');
                localStorage.isLocked = true;
            }
        },
        // 弹出播放器 
        topPlayer:function(){
            var self = $('.playerConatiner') 
            var lock = $('.playerLock ')
            if(!lock.hasClass('playerLockd')){
                self.css({
                    'bottom':'0px',
                    'transition': 'all .3s ease-in'
                })
                localStorage.Lockbottom = '0px';
            }
        },
        // 隐藏播放器
        bottomPlayer:function(){
            var self = $('.playerConatiner') 
            var lock = $('.playerLock ')
            if(!lock.hasClass('playerLockd')){
                self.css({
                    'bottom':'-74px',
                    'transition': 'all .3s ease-in'
                })
                localStorage.Lockbottom = '-74px'
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
        // 转化成s
        getSecond:function(time){
            var second = 0;
            var arr = time.split(":");
            second =  parseInt(arr[0])*60 + parseInt(arr[1]);
            return second;
        },
        // 添加播放样式
        addPlayStyle:function(artId){
            $('.playThis').removeClass('isPlaying')
            $('.playThis').removeClass('isCause')
            $('.'+artId).addClass('isPlaying');
            $('.playAll').addClass('isPlaying');
            $('.playerPlayBtn').addClass('isPlaying')
        },
        // 添加暂停样式
        addCauseStyle:function(artId){
            $('.isPlaying').addClass('isCause');
            $('.playThis').removeClass('isPlaying')
        },
        // 重置播放器
        resizeTime:function(){
            clearInterval(playerFn.timer);
            // var url = dfs + playerFn.voiceArr[playerFn.voiceIndex].imgUrl;
            var url = playerFn.voiceArr[playerFn.voiceIndex].imgUrl;
            $(playerFn.audio).attr('src',playerFn.voiceArr[playerFn.voiceIndex].src)
            $('.playRole span').width(0);
            $('.playerContent .title').html(playerFn.voiceArr[playerFn.voiceIndex].title);
            $('.playerContent .name').html('主播：'+playerFn.voiceArr[playerFn.voiceIndex].author);
            $('.playerImgBox img').attr('src',url);
            $('.timeNow').html('00:00:00');
            playerFn.allTime = playerFn.getSecond(playerFn.voiceArr[playerFn.voiceIndex].showTime);
            playerFn.allTimeHMs = '&nbsp;/&nbsp;00:'+ playerFn.voiceArr[playerFn.voiceIndex].showTime;
        },
        // 初始化第一个音频
        initFirstVoice:function(){
            playerFn.audio.oncanplay = function(){
                playerFn.allTime = Math.ceil(playerFn.audio.duration)-1;
                var allTimeHMS = playerFn.getHMS(playerFn.allTime);
                $('.timeAll').html("&nbsp;/&nbsp;" + allTimeHMS);
                $('.playerContent .title').html('白马时光有声小说');
                $('.playerContent .name').html('白马时光');
                $('.playerImgBox img').attr('src',playerFn.voiceArr[playerFn.voiceIndex].imgUrl);
                $('.timeNow').html('00:00:00')
                playerFn.audio.volume = 0.5;
                $('.hasSound').css('width','50%');
            }
        },
        //全部播放
        playAll:function(self){
            // 请求数据
            if(self.hasClass('playerPlayBtn')){
                var artId = $('.playAll').attr('artId')
            } else {
                var artId = self.attr('artId')
            }
            playerFn.getData(artId);
        },
        // 切换下一首
        //  type 为2 页面进入后没点击播放代表直接点击下以后
        // 
        next:function(type){
            if(type){ 
                var artId = parseInt($('.playAll').attr('artid')) + 1 
            } else {
                var artId = parseInt(playerFn.voiceArr[playerFn.voiceIndex].artId) + 1
            }
            playerFn.getData(artId);
        },
        // 切换上一首
        prev:function(type){
            if(type){
                layer.msg('没有更多了',{
                    time:4000
                })
            } else {
                var artId = parseInt(playerFn.voiceArr[playerFn.voiceIndex].artId) - 1          
            }
            playerFn.getData(artId);
        },
        // 播放
        playVoice:function(){
            if(playerFn.palyflag && !playerFn.isCaused){   // 从新播放
                playerFn.topPlayer();
                playerFn.addPlayStyle(playerFn.voiceArr[playerFn.voiceIndex].artId);
                playerFn.resizeTime() // 重置样式
                playerFn.audio.load(); // 重新加载video，如果不该变地址后将无法获取正确的video
                playerFn.playbackProgress(1);
                playerFn.palyflag = false
            } else if (!playerFn.palyflag && !playerFn.isCaused) { // 暂停
                playerFn.addCauseStyle(playerFn.voiceArr[playerFn.voiceIndex].artId);
                playerFn.isCaused = true,
                playerFn.palyflag = false
                playerFn.causeTime = playerFn.audio.currentTime;
                playerFn.playbackProgress(2);
            } else if (!playerFn.palyflag && playerFn.isCaused) { // 暂停后的播放                            
                playerFn.addPlayStyle(playerFn.voiceArr[playerFn.voiceIndex].artId);
                playerFn.palyflag = false
                playerFn.isCaused = false,
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
                playerFn.audio.play();
                playerFn.goStyle();
            } else if (type == 2) {  // 暂停
                playerFn.audio.pause();
                clearInterval(playerFn.timer);
            } else if (type == 4) { // 拖拽后的播放
                playerFn.audio.currentTime = playerFn.goTime;
                playerFn.audio.play();
            } else if (type == 1){ // 声音从头开始播放
                playerFn.audio.oncanplay = function(){
                     playerFn.audio.play();
                     $('.timeAll').html(playerFn.allTimeHMs);
                     playerFn.goStyle();
                }
            }
        },
        goStyle:function(){
            playerFn.timer = setInterval(function(){
                var nowTime = Math.ceil(playerFn.audio.currentTime);
                var nowTimeHMS = playerFn.getHMS(Math.ceil(nowTime));
                var allWidth = $('.playRole').width() - 12;
                $('.timeNow').html(nowTimeHMS);
                var width = allWidth * nowTime/playerFn.allTime ;
                $('.playRole span').width(width);
                if(playerFn.audio.ended){
                     playerFn.next()
                }
            },1000)
        },
        // 拖拽改变播放进度
        timeDown:function(event){
            var e = e || event;
            if(e.which == 1){
                playerFn.isDownMouse = true;
                playerFn.audio.pause();
                clearInterval(playerFn.timer)
                playerFn.timeOver() ;
                playerFn.timeUp() ;
            }
        },
        // 鼠标移动进度
        timeOver:function(){
            $('body').mousemove(function(event) {
                var playRoleLeft = $('.playRole').offset().left;
                var allWidth = $('.playRole').width() - $('.playPoint').width();
                if(playerFn.isDownMouse){
                    var x = event.clientX
                    var playPointLeft = x- playRoleLeft
                    if(playPointLeft<0){
                        playPointLeft = 0;
                    } else if(playPointLeft>allWidth) {
                        playPointLeft = allWidth;
                    }
                    $('.playSpan').css('width',playPointLeft)
                    var p  = playPointLeft/allWidth;
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
                playerFn.playbackProgress(4);
                $('body').unbind("mouseup")
            })
        },
        // 拖拽改变音量
        voiceDown:function(event){
            var e = e || event;
            if(e.which == 1){
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
                    playerFn.audio.volume = voice;

                }
            });
        },
        // 鼠标拖动音量 弹起
        voiceUp:function(){
            $('body').mouseup(function(){
                playerFn.isDownVoice = false;
                $('body').unbind("mouseup")
            })
        },
        getData:function(artId){
            var ret = {
                artId: "900003001",
                audioId: "900003",
                audioName: "时光有你，记忆成花",
                author: "小糖",
                code: "1",
                imgUrl: "group1/M00/00/B0/CgoKF1uPZ8aAEsDaAAA9txdpw0I856.jpg",
                showTime: "19:23",
                src: "https://dfs.bmsgzw.cn/dfs/group1/M00/00/B2/CgoKF1uR2EaAbeXwAcQE1QF0KPY782.mp3",
                title: "第一集，单纯年代",
            }
            playerFn.palyflag = true;  // 改变标识位  进入播放状态
            playerFn.isCaused = false; // 改变标识位  进入播放状态
            playerFn.voiceArr[0] = ret;
            playerFn.playVoice();
        }
    }
    playerFn.init()
    
    $('body').on('click','.checkBtn',function(){
        if($(this).hasClass('checkBg')){
            $(this).removeClass('checkBg');
            $("#readVipChapterBtn").val("0");
        } else {
            $(this).addClass('checkBg');
            $("#readVipChapterBtn").val("1");
        }
    });
    
})