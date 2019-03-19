$(function(){
    var menuFn = {
        init:function(){
            // 点击菜单
            $('.menuTitle').click(function(){
                menuFn.showMenu($(this));
            })
            // 点击二级选项
            $('.childItem').click(function(){
                menuFn.showChildItem($(this));
            })
            // 点击右侧tag标签
            $('.rightContainer').on('click','.topTagItem',function(){
                menuFn.showThisIframe($(this))
            })
            // 关闭顶部tag标签以及Iframe
            $('.rightContainer').on('click','.closeTag',function(){
                menuFn.closeIframeFn($(this))
            })
            // 顶部菜单向左移动
            $('.goLeft').click(function(){
                menuFn.goLeftFn()
            })
            // 顶部菜单向右移动
            $('.goRight').click(function(){
                menuFn.goRightFn()
            })
        },
        // 左侧菜单切换
        showMenu:function(self){
            self.parents().siblings().children('.menuChild').slideUp(); 
            self.parents().children('ul').slideDown();
        },
        // 左侧菜单二级选项点击增加tag iframe
        showChildItem:function(self){
            var tagName = self.attr('tagName');
            $('.nav-tabs li').removeClass('active');
            $('.rightContainer iframe').hide();
            if($('.nav-tabs .'+ tagName).length == 0){   // 存在对应iframe
                var text = self.children('span').text();
                var iframeUrl=self.attr('iframeUrl');
                var iframeClass=tagName + ' iframe' + tagName;
                var str = ''
                var allWidth=$('.nav-tabs').width();
                str += '<li role="presentation" class="active topTagItem '+ tagName +'" tagName='+ tagName +' ">'
                str += '    <a href="#">'
                str += '        <span>'+text+'</span>'
                str += '        <em class="layui-icon layui-icon-close closeTag"></em>'
                str += '    </a>'
                str += ' </li>'
                var iframeStr = '<iframe class="contentIframe '+iframeClass+'" src="'+iframeUrl+'"></iframe>';

                $('.nav-tabs').append(str);
                $('.iframeBox').append(iframeStr);
                $('.rightContainer iframe.'+ tagName).show();
                console.log($('.nav-tabs').width())
                console.log($('.topTag').width())
                // $('.topTagItem').each(function(index, el) {
                //     allWidth += $(el).width();
                // });
                // $('.nav-tabs').width(allWidth);
                // console.log(allWidth,'allWidth');
                if($('.nav-tabs').width()>$('.topTag').width()){
                    $('.navBox').addClass('longDIv');
                    $('.moveBtn').css('opacity','1');
                    var UlLeft = $('.navBox').width() - $('.topUl').width()+ 'px';
                    $('.topUl').css('left',UlLeft)
                }
            } else {   // 不存在对应iframe
                $('.nav-tabs .'+ tagName).addClass('active');
                $('.rightContainer iframe.'+ tagName).show();
            }
        },
        // 右侧tag标签点击，切换iframe
        showThisIframe:function(self){
            if(!self.hasClass('active')){
                var tagName = self.attr('tagName');
                self.siblings().removeClass('active');
                self.addClass('active');
                $('.contentIframe').hide();
                $('.contentIframe.'+tagName).show();

                var ulLeft = Math.abs($('.topUl').position().left); // ul左偏移的绝对值
                var tagLeft = self.position().left; // 点击的标签距离父元素ul的距离
                var w = self.width(); // 点击标签的宽度
                var navWidth = $('.navBox').width(); // 最外层盒子的宽度
                var goLeft = -ulLeft + navWidth/2; // 点击左侧靠边的标签，UL的left值
                var goRight = -ulLeft - navWidth/2; // 点击右侧标签，ul的left值
                console.log('++++++++++++++++++')
                console.log(ulLeft,'ulLeft')
                console.log(tagLeft,'tagLeft'); 
                console.log(ulLeft - tagLeft,'ulLeft - tagLeft');
                console.log(navWidth,'navWidth')
                console.log(navWidth - (tagLeft - ulLeft),'navWidth - (tagLeft - ulLeft)')
                //   判断点击的标签是否可见的最左侧标签，方法为 ul的左偏离量 与 点击标签UL的左距离
                // 的差值是否大于0，如大于0 证明点击标签左侧还有标签或者该点击标签未显示完全
                // 并且ul的左偏离量 与 点击标签UL的左距离的插值小于等于标签宽度
                if(ulLeft - tagLeft > -15 && ulLeft-tagLeft < w || ulLeft-tagLeft == w){ // 点击最左侧标签

                    console.log(goLeft,'goLeft原来');
                    console.log(goLeft>0?0:goLeft,'goLeft');
                    $('.topUl').css('left',goLeft>0?0:goLeft)
                } else if(navWidth - (tagLeft - ulLeft) < w-1){ // 点击最右侧标签
                    console.log(w,'w')
                    var showRight = navWidth - (tagLeft - ulLeft);
                    var overRight = $('.topUl').width() - tagLeft -showRight;
                    console.log(overRight,'overRight');
                    console.log(goRight,'goRight原来');
                    console.log(Math.abs(goRight)>overRight?-overRight:goRight,'goRight');
                    $('.topUl').css('left',Math.abs(goRight)>overRight?-(overRight+ulLeft):goRight);
                };

            }
           
        },
        // 关闭iframe
        closeIframeFn:function(self){
            var tagName = self.parents('li').attr('tagName');
            $('iframe.'+tagName).remove();
            self.parents('li').remove();
        },
        // 点击向左移动按钮
        goLeftFn:function(){
            var ulLeft = Math.abs($('.topUl').position().left); // ul左偏移的绝对值
            var navWidth = $('.navBox').width(); // 最外层盒子的宽度
            var ulWidth = $('.topUl').width();
            // var goLeft = ulWidth-ulLeft - navWidth > navWidth/2 ? navWidth/2 : ulWidth-ulLeft - navWidth
            var goLeft = ulLeft > navWidth/2 ? navWidth/2 : ulLeft
            console.log(ulWidth)
            console.log(ulLeft)
            console.log(navWidth)
            goLeft = -(ulLeft - goLeft); // 点击左侧靠边的标签，UL的left值
            $('.topUl').css('left',goLeft);
        },
        // 点击向右移动按钮
        goRightFn:function(){
            var ulLeft = Math.abs($('.topUl').position().left); // ul左偏移的绝对值
            var navWidth = $('.navBox').width(); // 最外层盒子的宽度
            var ulWidth = $('.topUl').width();
            var goRight = ulWidth-ulLeft - navWidth > navWidth/2 ? navWidth/2 : ulWidth-ulLeft - navWidth;
            goRight = -(ulLeft + goRight); // 点击左侧靠边的标签，UL的left值
            $('.topUl').css('left',goRight);
        }



    }
    menuFn.init();
})