$(function(){
    var qFn = {
        ua:navigator.userAgent.toLowerCase(),
        bgmOne:document.getElementById("bgMusic"),
        init:function(){
            if (qFn.ua.match(/MicroMessenger/i) == "micromessenger") {
                document.addEventListener("WeixinJSBridgeReady",function(){
                    qFn.bgmOne.play();
                },false);
            }
            // 监听音频
            qFn.watchEnd();
            // 初始化页面互动插件
            qFn.initpage();
            setInterval(function(){
                $('.pageOneBg').css({
                    'width':'158%',
                    'height':'100%'
                });
            },500)

            setInterval(function(){
                $('.circle').css('width','120%')
            },1000)
        },
        initpage:function(){
            $('.container').fullpage({
                touchSensitivity:2,
                afterLoad:function(anchorLink,index){
                    if(index == 2){
                        $('.twoText p:nth-child(2n)').addClass('leftIn');
                        $('.twoText p:nth-child(2n+1)').addClass('rightIn')
                    } else if (index == 3){
                        setInterval(function(){
                            $.fn.fullpage.moveSlideRight();
                        },2000)
                    }else if (index == 4){
                        $('.fourPage p').each(function(index,item){
                            console.log(index)
                            $(item).addClass("fourP"+index)
                        })
                    }else if (index == 5){
                        $('.pDiv').each(function(index,item){
                            console.log(index)
                            $(item).addClass("fourP"+index)
                        })
                    }


                }
            });
        },
        // 监听音频播放完毕
        watchEnd:function(){
            setInterval(function(){
                console.log(11)
                if(qFn.bgmOne.ended){
                    console.log(22)
                    qFn.bgmOne.load();
                    qFn.bgmOne.play();
                }
            },1000)
        }
    }
    qFn.init();
})
