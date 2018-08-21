// 打开签到弹层
$('.signSpan').click(function(){
    var date = new Date()
    var dataObj = {}
    dataObj.year = date.getFullYear();
    dataObj.month = date.getMonth()+1; // 正常月份
    dataObj.day  = date.getDate();
    dataObj.dayContainer = '.singConatiner' // 日期容器
    dataObj.signList = [1,2,6];
    dataObj.supplementSignList = [5,7]
    singFn.init(dataObj)

})
var singFn = {
    init:function(dataObj){
        var year  = parseInt(dataObj.year);
        var month = parseInt(dataObj.month);
        var day   = parseInt(dataObj.day);
        // 数组 已签到的日期
        var selData  = dataObj.selData;
        // 每月总天数
        var totalDay = singFn.getTotalDayInMontn(year,month)
        //每月一号星期几
        var firstDay = singFn.getWeekInDay(year,month)
        // 装载日期的容器
        var ContainerStr = '.weekBody'
        // 生成日历容器
        singFn.createBody(dataObj)
        // 生成日历日期
        singFn.createCalendarBydata(firstDay,totalDay,ContainerStr)
        // 初始化签到列表，在日历上标注已签到日期
        singFn.initSignList(dataObj.signList,dataObj.supplementSignList)
        // 打开弹层 
        singFn.openLayer();
        // 点击日期签到
        $('body').on('click','.dateLi',function(){
            singFn.sign($(this),dataObj)
        })
    },
    // 打开弹层
    openLayer:function(){
        layer.open({
            type: 1,
            closeBtn :2,
            title:'',
            area: ['670px', '650px'], //宽高
            content: $('.singConatiner')
        });
        if($('.layui-layer').children().children('.singConatiner').length>0){
            $('.singConatiner').parents('.layui-layer').addClass('hasBg')
        }
    },
    // 生成日历title及星期
    createBody:function(dataObj){
        if($('.singConatiner').length==0){
            var str = '';
            str += "<div class='singConatiner'>"
            str += "<div class='decSpanContainer'>"
            str += "  <span class='decSpan fl'></span>"
            str += "  <span class='decSpan fl'></span>"
            str += "  <span class='decSpan fr'></span>"
            str += "  <span class='decSpan fr'></span>"
            str += "</div>"
            str += "  <h3 class='nowData'>"+dataObj.year+"-"+dataObj.month+ "</h3>"
            str += "  <ul class='weektitle'>"
            str += "    <li>日</li>"
            str += "    <li>一</li>"
            str += "    <li>二</li>"
            str += "    <li>三</li>"
            str += "    <li>四</li>"
            str += "    <li>五</li>"
            str += "    <li>六</li>"
            str += "  </ul>"
            str += "  <ul class='weekBody'></ul>"
            str += "</div>"
            $('body').append(str)
        }
    },
    /*
     *  根据年月返回对应月份天数
     *  Data对象的月份从0开始和（即0代表一月份），我们传入想要的转化的月份
     *  已2018/7月为例子，此时temp对象传入2018 7 0，
     *  此时temp代表8月份，又因为日期从1~31，故8月0日，代表7月最后一天
     *  因此得到七月的天数
     *
     */
    getTotalDayInMontn:function (year,month){
        //parseInt(number,type这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
  

        month = parseInt(month,10);  
        var temp = new Date(year,month,0); // 日期设为0，代表上月最后一天
        console.log(temp.getDate())
        return temp.getDate();
    },
    

    /*
     * 获取当前月份1号代表星期几 
     * 0-周日 6-周六 
     *  
     */
    getWeekInDay:function (year,month){
        var temp = new Date(year,month-1,1)
        return (temp.getDay()) 
    },

    /*  根据没月总天数以及第一天星期几生成日历表 
     *  firstDay：每月一号星期几
     *  totalDay：每月总天数
     *  ContainerStr：存放日期的容器 eg:'.weekBody'
     *
    */
    /*  根据没月总天数以及第一天星期几生成日历表 
     *  firstDay：每月一号星期几
     *  totalDay：每月总天数
     *  imgUrl:最后一天礼物地址
     *
    */
    createCalendarBydata:function (firstDay,totalDay,imgUrl){
        var totalLi = firstDay + totalDay;
        var liStr = ''
        var day = 0;
        var dateLiLen = $('.dateLi').length;
        if(dateLiLen>0){
            return;
        }
        for (var i = 0;i<totalLi;i++){
            if(i>=firstDay){
                if(i+1 == totalLi){
                    liStr += '<li class="dateLi lastDay"><span><img src="'+imgUrl+'"></span></li>'
                } else {
                    liStr += '<li class="dateLi"><span>'+ (++day) +'</span></li>'
                }
            } else  {
                liStr += '<li class="dateLi"></li>'
            }
        }
        console.log(liStr)
        $('.weekBody').append(liStr)

    },
     
    /* 初始化签到列表 
     *
     * 以签到数组：signList
     * 补签数组:supplementSignList
     *
    */
    initSignList:function(signList,supplementSignList){
        $(signList).each(function(arrIndex,arrItem){
            $('.dateLi').each(function(index,item){
                if($(item).children().html() == arrItem){
                    $(this).addClass('isSign')
                }
            })
        })
        $(supplementSignList).each(function(arrIndex,arrItem){
            $('.dateLi').each(function(index,item){
                if($(item).children().html() == arrItem){
                    $(this).addClass('supplementSign');
                    $(this).children().html('补');
                }
            })
        })
    },
    // 点击日期签到
    sign:function(self,dataObj){
        // 获取点击的日期
        var day = self.children().html();
        // 点击日期
        var clickTime = dataObj.year+'/'+dataObj.month+'/'+ day
        // 当前日期
        var nowTime = dataObj.year+'/'+dataObj.month+'/'+ dataObj.day
        // 获取 从 1970/01/01 至点击日期的毫秒数
         var clickDateS =Date.parse(clickTime)
        // 从 1970/01/01 至今的毫秒数
        var nowS = Date.parse(nowTime)
        if(clickDateS < nowS){
            console.log(self.attr('class'))
            if(!self.hasClass('isSign')){ //判断是否签到过,没有进行补签
                var supplementSignArr = $('.supplementSign')
                console.log(supplementSignArr.length)
                if(supplementSignArr.length>0){
                    confirmStr = '是否花费8银票进行补签？'
                    
                } else if(supplementSignArr.length == 0){
                    confirmStr = '首次补签免费,之后每次补签花费8银票'
                }
                // 请求接口(补签状态)
                layer.confirm(confirmStr, {
                      btn: ['取消','确定'], //按钮
                      title:'',
                      closeBtn: 0,
                    }, function(){
                        layer.close(layer.index) 
                    }, function(){
                        layer.close(layer.index)
                        self.addClass('supplementSign');
                        self.children().html('补')
                        layer.msg('补签成功，获得3个爱心、10银票、10成长值',{
                            time:2000
                        })
                    }
                );
            } else { 
                layer.msg('已经签到过了',{
                    time:2000
                })
            }
        } else if (clickDateS == nowS) {
            if(!self.hasClass('isSign')){ //判断是否签到过,没有则正常签到
                // 请求接口(正常签到 )
                layer.msg('签到成功',{
                    time:2000
                })
                self.addClass('isSign')
            }
        }
    }
} 

