   
    var src='';
    var pos = {};
    var isclickMenu = false;
    var increaseNum = 0; // 加载进度条
    var imgReady = false; 
    var t_img; // 定时器图片扫描
    var isLoad = false; // 法2 控制变量，为false代表图片加载不完全
    $('.menuImgBox img').click(function(){
        isclickMenu = true
        src = $(this).attr('src')
        $('.mouseImg').attr('src',src)
        var imgurl = 'url(' + src + ')'
        $('.mouseImg').show()
    })

    //点击主内容区
    $('.imgBox li').click(function(){
        if(src){
            $(this).children('img').attr('src',src)
        }
    })
    // 滑过时隐藏遮罩层
    $('.imgBox li').hover(
        function() {
            $(this).children('.mark').hide()
        },function(){
            $(this).children('.mark').show()
    });
    // 获取挂光标位置,选中的图片跟随鼠标移动
    $('body').mousemove(function(e) {  
        pos.x = e.originalEvent.x ||e.originalEvent.layerX || 0;      
        pos.y = e.originalEvent.y ||e.originalEvent.layerY || 0;
        h =  document.body.clientHeight
        w = document.body.clientWidth
        $('.mouseImg').css({
            'left':pos.x + 10 +'px',
            'top':pos.y - 50 + 'px'
        })
    })
    $('.container').mouseenter(function(){
        if(isclickMenu){
            $('.mouseImg').show()
        }
    })
    $('.container').mouseleave(function(){
        $('.mouseImg').hide()
    })
    // 图片加载完毕函数
    function __Print(){  
        var img_length = $("img").length;  
        var img_start = 0;  
        $('img').each(function(){  
            var oneImg = new Image();    
            oneImg.src = $(this).attr('src');   
            oneImg.onload=function(){  
                img_start++;  
                console.info(img_start);  
                console.info(img_length);  
                if(img_start == img_length){
                    imgReady = true
                }  
                  
            };  
        })  
    }

    // 图片加载完毕函数 根据高度判断
    function isImgLoad(){
        // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
        // 查找所有封面图，迭代处理
        $('img').each(function(){
            // 找到为0就将isLoad设为false，并退出each
            if(this.height === 0){
                isLoad = false;
                return false;
            }
        });
        // 为true，没有发现为0的。加载完毕
        if(isLoad){
            clearTimeout(t_img); // 清除定时器
            imgReady = true;
        // 为false，因为找到了没有加载完成的图，将调用定时器递归
        }else{
            isLoad = true;
            t_img = setTimeout(function(){
                isImgLoad(); // 递归扫描
            },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
        }
    } 
    // 随机增长百分比函数
    function increaseNums (){
        var numTimer = setInterval(function(){
            var num = Math.random()*15;
            increaseNum = increaseNum +  Math.round(num);
            if(increaseNum < 100){
                $('.increaseNum').text(increaseNum+"%")
                $('.roll').css('width',increaseNum+"%")
            }
            if(increaseNum > 100 && imgReady){
                increaseNum = 100;
                clearInterval(numTimer)
                setTimeout(function(){
                   $('.roll').css('border-radius','15px')
                },300)
                $('.increaseNum').text(increaseNum+"%")
                $('.roll').css('width',increaseNum+"%")
            }
        },300)
    }

    // 图片加载完毕
    isImgLoad()
    // 随机增长百分比函数
    increaseNums()