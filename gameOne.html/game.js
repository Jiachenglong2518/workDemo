   
    var src='';
    var pos = {};
    var isclickMenu = false;
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
    $('.imgBox li').hover(
        function() {
        /* Act on the event */
            $(this).children('.mark').hide()
        },function(){
            $(this).children('.mark').show()
    });
    // 获取挂光标位置i
    $('body').mousemove(function(e) {  
        pos.x = e.originalEvent.x ||e.originalEvent.layerX || 0;      
        pos.y = e.originalEvent.y ||e.originalEvent.layerY || 0;
        h =  document.body.clientHeight
        w = document.body.clientWidth
        console.log(pos.y)
        if(pos.x > w -100 || pos.x< 100 || pos.y >h-200 || pos.y < 50){
            $('.mouseImg').hide()
        } else {
            if(isclickMenu){
                $('.mouseImg').show() 
            }
        }
        $('.mouseImg').css({
            'left':pos.x + 10 +'px',
            'top':pos.y - 50 + 'px'
        })
    })
   























    var str = $('.t').val()
    function wordNum (string) {
        //去掉所有的换行符
        string = string.replace(/\r\n/g,"")
        string = string.replace(/\n/g,"");
        string = string.replace(/<br>/g,"");
        //去掉所有的空格（中文空格、英文空格都会被替换）
        string = string.replace(/\s/g,"");
        var strobj = {}
        strobj.len = string.length
        strobj.str = string
        return strobj
    }
    function typeset(str) {
        codeblank = "　　";
        codenewline = "'\r\n\r\n'";
        //需要替换的字符
       fromstr = ",;!?:()【『】』�";
       tostr = "，；！？：（）「「」」？";
    
        //段尾字符
        endstr = "。？！…」”）=——~⋯；：》.\n";
        //不能做段首字符
        startstr = "。？！」”）";
    
        newstr = "";
        tmpstr = "";
    
        slen = str.length;
        i = 0;
        parastart = true;
        paraend = false;
        while (i < slen) {
            //取消空格
            tmpchar = str.charAt(i);    //当前字符
            while ((i < (slen - 1)) && (tmpchar == " " || tmpchar == "　" || tmpchar == "\r")) {
                i++;
                tmpchar = str.charAt(i);
            }
            if (tmpchar == " " || tmpchar == "\r") break;
            //替换字符
            idx = fromstr.indexOf(tmpchar); //半角换全角
            if (idx >= 0) tmpchar = tostr.charAt(idx);
            //判断段首
            if (paraend && !parastart) {
                if (tmpchar == "\n") {
                    parastart = true;
                }
                else {
                    parastart = false;
                    paraend = false;
                }
            }
            //判断段尾
            if (!paraend) {
                if (endstr.indexOf(tmpchar) >= 0) {
                    paraend = true;
                }
            }
            //处理
            if (tmpchar != "\n") {
                if (parastart) {
                    if (paraend) {
                        newstr += codenewline;
                        paraend = false;
                    }
                    newstr += codeblank;
                    parastart = false;
                }
                newstr += tmpchar;
            }
            i++;
        }
        return newstr;
    }
    console.log(wordNum(str).len)

    $('.t').keyup(function(event) {
        var str = $('.t').val()
        console.log(wordNum(str).len)
    });
    $('.save').click(function(){
        var str = $('.t').val()
        str = typeset(str)
        $('.t').val(str)
    })
    




