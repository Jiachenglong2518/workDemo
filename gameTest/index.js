    var src='';
    var pos = {};
    var isclickMenu = false;
    var increaseNum = 0; // 加载进度条
    var imgReady = false; 
    var t_img; // 定时器图片扫描
    var isLoad = false; // 法2 控制变量，为false代表图片加载不完全
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
            if(increaseNum < 100){
                $('.increaseNum').text(increaseNum+"%")
                $('.roll').css('width',increaseNum+"%")
                increaseNum = increaseNum +  Math.round(num);
            }
            if(increaseNum > 100 && imgReady){
                increaseNum = 100;
                clearInterval(numTimer)
                setTimeout(function(){
                   $('.roll').css('border-radius','15px')
                },300)
                $('.increaseNum').text(increaseNum+"%");
                $('.roll').css('width',increaseNum+"%");
                // setTimeout(function(){
                //     $('.container').show()
                //     $('.mainContainer').hide();
                // },400)
            }
        },300)
    }

    // 图片加载完毕
    isImgLoad()
    // 随机增长百分比函数
    increaseNums()