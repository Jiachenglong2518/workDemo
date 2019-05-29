$(function(){
    var loginFn = {
        isVertifySucc : false,
        alt:"",
        sex:"",
        mobile:"",
        init:function(){
            loginFn.changeH()
            loginFn.addDrag()
            $('.login').click(function(){
                loginFn.login($(this));
            })
            $('.messageBtn').click(function(){
                loginFn.messageLogin();
            })
            $('.forgetPsdBtn').click(function(){
                loginFn.forgetPwd();
            })
            $('.registerer').click(function(){
                loginFn.registerer()
            })
            $('.bindPhoneBtn').click(function(){
                loginFn.bindPhone()
            })
            $('.agreeBtn').click(function(){
                loginFn.agreeAgreement()
            })
            $('.goBack').click(function(){
                window.history.go(-1)
            })
            // 注册获取验证码
            $('.codeBtn').click(function(){
                loginFn.getCode()
            })
            // 手机号登录获取验证码
            $('#getCode').click(function(){
                loginFn.messageCode()
            })
            // 忘记密码获取验证码
            $('#forgetPsdCode').click(function(){
                loginFn.forgetPsdCode()
            })
            // 绑定手机号获取验证码
            $('#bindSendCode').click(function(){
                loginFn.bindSendCode()
            })
            // 显示手机归属地
//          $('.area').click(function(){
//              loginFn.showAreaList()
//          })
            // 选择手机归属地
            $('.area-list li').click(function(){
                loginFn.selTelArea($(this))
            })
            // 隐藏手机归属地列表
            $('.hideArea').click(function(){
                loginFn.hideAreaList()
            })
            // 展示头像
            $('.selHeadImg').click(function(){
                loginFn.showHeadImg()
            })
            // 选择头像
            $('.headImgMark li').click(function(){
                loginFn.selHeadImg($(this))
            })
        },
        login:function(self){
            var userName = $.trim($("#userName").val());
            var telephone1=/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            if(userName.length==0){
                layer.msg('请输入手机号码!',{time:2000})
                return false;
            }else if(!telephone1.test(userName)){
                layer.msg('请输入合法手机号码!',{time:2000})
                return false;
            }else{
                var passwd =$.trim($("#passwd").val());
                if(passwd.length==0){
                    layer.msg('请输入密码!',{time:2000})
                    return false;
                }
                var password5=$.md5(passwd);
                var param={};
                param.mobile=userName;
                param.password=password5;
                $.ajax({
                    url:'/login/userNameLogin',
                    type:'post', 
                    dataType:'json',
                    contentType:"application/json",
                    data: JSON.stringify(param),
                    success:function(ret){
                        if(ret.code!="200"){
                            layer.msg(ret.msg,{time:2000})
                        }
                        if(ret.code=="200"){
                            layer.msg(ret.msg,{time:2000})
                            //获取用户从那个链接过来的 2018/4/3
                            var link = loginFn.getCookie("back_url");
//                          var link = document.referrer;
                            var currentPath = window.location.pathname;
                            var res=/login/;
                            if($.trim(link)=='' && !res.test(currentPath)){
                                location.href=ctx+"/login";
                            }else if($.trim(link)=='' && res.test(currentPath)){
                                location.href=ctx+"/";
                            }else{
                                var re=/toRegister/;
                                var reg=/toForgetPsd/;
                                var regs=/index/;
                                var resOut=/Logout/;
                                if(re.test(link) || reg.test(link) || regs.test(link) || resOut.test(link)){
                                    location.href=ctx+"/";
                                }else if(res.test(currentPath) && res.test(link)){
                                    location.href=ctx+"/";
                                }else{
                                    //登录成功后跳转原来的链接
                                    location.href = link; 
                                }
                                
                            }
                        }
                    }
                });
            }
        },
        
        messageLogin:function(){
            var telephone=$.trim($("#mobile").val());
            var telephone1=/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            //手机号
            if(telephone.length==0){
                layer.msg("请输入手机号码!",{time:2000})
                return false;
            }else if(!telephone1.test(telephone)){
                layer.msg("请输入合法手机号码!",{time:2000})
                return false;
            }
            //短信验证码
            var code =$.trim($("#message").val());
            if(code.length==0){
                layer.msg("请输入短信验证码!",{time:2000})
                return false;
            }else if(code.length < 6){
                layer.msg("短信验证码长度不足6位!",{time:2000})
                 return false;
            }
            var param = {};
            param.mobile=telephone;
            param.code=code;
            $.ajax({
                url:'/login/mobileCodeLogin',
                type:'post', 
                dataType:'json',
                contentType:"application/json",
                data: JSON.stringify(param),
                success:function(ret){
                    if(ret.code!="200" && ret.code!="212"){
                        layer.msg(ret.msg,{time:2000})
                    }else{
                        if(ret.code=="200"){
                            layer.msg(ret.msg,{time:2000})
                            //获取用户从那个链接过来的 2018/4/3
                            var link = loginFn.getCookie("back_url");
                            var currentPath = window.location.pathname;
                            var res=/toLoginByMessage/;
                            if($.trim(link)==''){
                                location.href=ctx+"/login";
                            }else{
                                var resOut=/Logout/;
                                if(resOut.test(link)){
                                    location.href=ctx+"/";
                                }else{
                                    //登录成功后跳转原来的链接
                                    location.href = link; 
                                }
                            }
                        }else if(ret.code=="212"){
                            layer.msg(ret.msg,{time:5000});
                            window.location.href="../jump.html";
                        }
                    }
                }
            });
        },
        forgetPwd:function(){
            var forgetPawMobile=$.trim($("#mobile").val()); 
            var forgetCode = $.trim($("#forgetCode").val());//获取验证码输入框的值
            var passWordIn=$.trim($("#password").val());//获取密码框的值
            var passwordTrue=/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,18}$/;//密码正则表达式
            var telephone1=/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            //手机号
            if(forgetPawMobile.length==0){
                layer.msg("请输入手机号码!",{time:2000})
                return false;
            }else if(!telephone1.test(forgetPawMobile)){
                layer.msg("请输入合法手机号码!",{time:2000})
                return false;
            }
            //短信验证码
            if(forgetCode.length==0){
                layer.msg("请输入短信验证码!",{time:2000})
                return false;
            }else if(forgetCode.length < 6){
                layer.msg("短信验证码长度不足6位!",{time:2000})
                return false;
            }
            //密码
            if(passWordIn.length==0){
                layer.msg("请输入密码!",{time:2000})
                return false;
            }else if(!passwordTrue.test(passWordIn)){
                layer.msg("请输入6-18位的字母数字密码!",{time:2000})
                return false;
            }
            //密码确认
            var passWordSure=$.trim($("#surePassword").val());//获取确认密码框的值
            if(passWordSure.length==0){
                layer.msg("请确认密码!",{time:2000})
                return false;
            }else if(passWordSure!=passWordIn){
                layer.msg("密码确认错误!",{time:2000})
                return false;
            }else{
                var password5=$.md5(passWordSure);
                var param={};
                param.mobile=forgetPawMobile;
                param.code=forgetCode;
                param.password=password5;
                $.ajax({
                    url:'/login/forgetPassword',
                    type:'post', 
                    dataType:'json',    
                    contentType:"application/json",
                    data: JSON.stringify(param),
                    success:function(ret){
                        if(ret.code!="203"){
                            layer.msg(ret.msg,{time:2000})
                        }
                        if(ret.code=="203"){
                            layer.msg(ret.msg,{time:2000})
                            window.location.href=ctx+"/login";
                        }
                    }
                });
            }
        },
        registerer:function(){
            // 手机号
            var mobile = $.trim($("#mobile").val());
            // 验证码
            var code = $.trim($("#code").val());
            if(code.length==0){
                layer.msg('请输入短信验证码!',{time:2000})
                return false;
            }else if(code.length < 6){
                layer.msg('短信验证码长度不足6位!',{time:2000})
                return false;
            }
            // 密码
            var passwordTrue=/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,18}$/;//密码正则表达式
            var password = $.trim($("#password").val());
            if(password.length==0){
                layer.msg('请输入密码！',{time:2000})
                return false;
            }else if(!passwordTrue.test(password)){
                layer.msg('请输入6-18位的字母数字密码！',{time:2000})
                return false;
            }
            // 确认密码
            var surePassword = $.trim($("#surePassword").val());
            if(surePassword.length==0){
                layer.msg('请确认密码!',{time:2000})
                return false;
            }else if(surePassword!=password){
                layer.msg('密码确认错误!',{time:2000})
                return false;
            }else{
                var password5=$.md5(surePassword);
                var param={};
                param.mobile=mobile;
                param.code=code;
                param.password=password5;
                $.ajax({
                    url:'/login/register',
                    type:'post', 
                    dataType:'json',    
                    contentType:"application/json",
                    data: JSON.stringify(param),
                    success:function(ret){
                        if(ret.code!="202"){
                            layer.msg(ret.msg,{time:2000})
                        }
                        if(ret.code=="202"){
                            layer.msg(ret.msg,{time:5000})
                            window.location.href=ctx+"/jump.html";
                        }
                    }
                });
            }
            
        },
        bindPhone:function(){
            var cid=$.trim($("#cid").val());
            var nikeName=$.trim($("#nikeName").val());
            var telephone=$.trim($("#mobile").val());
            var telephone1=/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            //手机号
            if(telephone.length==0){
                layer.msg("请输入手机号码!",{time:2000})
                return false;
            }else if(!telephone1.test(telephone)){
                layer.msg("请输入合法手机号码!",{time:2000})
                return false;
            }
            //短信验证码
            var code =$.trim($("#bindCode").val());
            if(code.length==0){
                layer.msg("请输入短信验证码!",{time:2000})
                return false;
            }else if(code.length < 6){
                layer.msg("短信验证码长度不足6位!",{time:2000})
                 return false;
            }
            var param = {};
            param.mobile=telephone;
            param.code=code;
            param.nikeName=nikeName;
            param.cid=cid;
            $.ajax({
                url:'/login/bindPhone',
                type:'post', 
                dataType:'json',
                contentType:"application/json",
                data: JSON.stringify(param),
                success:function(ret){
                    if(ret.code!="200"){
                        layer.msg(ret.msg,{time:2000})
                    }
                    if(ret.code=="200"){
                        layer.msg(ret.msg,{time:2000})
                        //获取用户从那个链接过来的 2018/4/3
//                      var link = document.referrer;
                        var link = loginFn.getCookie("back_url");
                        if($.trim(link)==''){
                            location.href=ctx+"/login";
                        }else{
                            //登录成功后跳转原来的链接
                            location.href = link; 
                            
                        }
                    }
                }
            });
        },
        // 一屏展示
        oneShow:function(){

        },
        getViewportSize:function (){
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        },
        // 更改html高度,适配不同型号手机展示登陆一屏
        changeH:function(){
            /*$('.area-list').hide() //隐藏电话归属地*/
            var h = loginFn.getViewportSize().height
            if(h < 520){
                $('html').css({
                    'height':loginFn.getViewportSize().height
                })
            } else if( h>=520 && h < 535 ){
                $('.otherTitle').css({
                    'margin-top': 15
                })
                $('.wayImgContainer').css({
                    'margin-top': 15
                })
            } else if (h >= 535){
                $('.otherTitle').css({
                    'margin-top': h*0.05
                })
                $('.wayImgContainer').css({
                    'margin-top': h*0.05
                })
                
            } 
        },
        // 注册是勾选用户协议
        agreeAgreement:function(){
            var isAgree = $('.agreeBtn img').attr('tag')
            if(isAgree == 'diss'){
              $('.agreeBtn img').show()
              $('.agreeBtn img').attr('tag','ok')
            }
            if(isAgree == 'ok'){
              $('.agreeBtn img').hide()
              $('.agreeBtn img').attr('tag','diss')
            }
        },
        // 选择手机归属地
        selTelArea:function(self){
            var index = self.text().indexOf('+')
            var area = self.text().substring(0,index)
            $('.area').text(area)
            $('.areaNum').text(self.children().children().text())
            loginFn.hideAreaList()
        },
        // 显示手机归属地
        showAreaList:function(){
            $('.areaMark').show()
            $('.area-list').animate({
                left: 0
            })
            setTimeout(function(){
                $('.orderList').show()
            },500)
        },
        // 隐藏手机归属地列表
        hideAreaList:function(){
            $('.orderList').hide()
            $('.area-list').animate({
                left:'100%'
            })
            setTimeout(function(){
                $('.areaMark').hide()
            },500)
        },
        // 注册获取验证码
        getCode:function(){
            var regPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            var mobile = $.trim($("#mobile").val());
            var Phoneflag = regPhone.test(mobile);
            if(Phoneflag){
                if(loginFn.isVertifySucc){
                    var isAgree = $('.agreeBtn img').attr('tag');
                    if(isAgree == "ok"){
                        var param ={};
                        param.mobile=mobile;
                        param.type=1;
                        $.ajax({
                            url:'/login/sendCode',
                            type:'post', 
                            dataType:'json',    
                            contentType:"application/json",
                            data: JSON.stringify(param),
                            success:function(ret){
                                if(ret.code!="201"){
                                    layer.msg(ret.msg,{time:2000})
                                }
                                if(ret.code=="201"){
                                    layer.msg(ret.msg,{time:2000})
                                    window.location.href = ctx+'/login/toRegister/'+mobile;
                                }
                            }
                        });
                    }else{
                        layer.msg('请选择同意《用户服务协议》',{time:2000});
                    }
                }else{
                    layer.msg('请先滑动验证！',{time:2000});
                }
                
            }else{
                layer.msg('请输入正确的手机号！',{time:2000});
            }
        },
        
        messageCode:function(){
            var regPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            var mobile = $.trim($("#mobile").val());
            var Phoneflag = regPhone.test(mobile);
            if(Phoneflag){
                if(loginFn.isVertifySucc){
                    var param ={};
                    param.mobile=mobile;
                    param.type=2;
                    $.ajax({
                        url:'/login/sendCode',
                        type:'post', 
                        dataType:'json',    
                        contentType:"application/json",
                        data: JSON.stringify(param),
                        success:function(ret){
                            if(ret.code!="201"){
                                layer.msg(ret.msg,{time:2000})
                            }
                            if(ret.code=="201"){
                                layer.msg(ret.msg,{time:2000})
                            }
                        }
                    });
                }else{
                    layer.msg('请先滑动验证！',{time:2000});
                }
            }else{
                layer.msg('请输入正确的手机号！',{time:2000});
            }
        },
        forgetPsdCode:function(){
            var regPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            var mobile = $.trim($("#mobile").val());
            var Phoneflag = regPhone.test(mobile);
            if(Phoneflag){
                if(loginFn.isVertifySucc){
                    var param ={};
                    param.mobile=mobile;
                    param.type=3;
                    $.ajax({
                        url:'/login/sendCode',
                        type:'post', 
                        dataType:'json',    
                        contentType:"application/json",
                        data: JSON.stringify(param),
                        success:function(ret){
                            if(ret.code!="201"){
                                layer.msg(ret.msg,{time:2000})
                            }
                            if(ret.code=="201"){
                                layer.msg(ret.msg,{time:2000})
                            }
                        }
                    });
                }else{
                    layer.msg('请先滑动验证！',{time:2000});
                }
            }else{
                layer.msg('请输入正确的手机号！',{time:2000});
            }
        },
        bindSendCode:function(){
            var regPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
            var mobile = $.trim($("#mobile").val());
            var nikeName = $.trim($("#nikeName").val());
            var Phoneflag = regPhone.test(mobile);
            if(Phoneflag){
                if(loginFn.isVertifySucc){
                    if($('#bindSendCode').hasClass('sendCodeOk')){
                        return ;
                    }
                    var param ={};
                    param.mobile=mobile;
                    param.nikeName=nikeName;
                    param.type=4;
                    $.ajax({
                        url:'/login/sendCode',
                        type:'post', 
                        dataType:'json',    
                        contentType:"application/json",
                        data: JSON.stringify(param),
                        success:function(ret){
                            if(ret.code!="201"){
                                layer.msg(ret.msg,{time:2000})
                                
                            } else if(ret.code=="201"){ //正确
                                layer.msg(ret.msg,{time:2000})
                                $('#bindSendCode').addClass('sendCodeOk');
                                var sec = 60;
                                var timer = setInterval(function(){
                                    $('#bindSendCode').html(sec + "s");
                                    sec--;
                                    if(sec < 0){
                                        $('#bindSendCode').html('发送验证码');
                                        clearInterval(timer);
                                        $('#bindSendCode').removeClass('sendCodeOk')
                                    }
                                }, 1000);
                            }
                        }
                    });
                }else{
                    layer.msg('请先滑动验证！',{time:2000});
                }
            }else{
                layer.msg('请输入正确的手机号！',{time:2000});
            }
        },
        // 展示头像
        showHeadImg(){
           $('.headImgMark').show()
        },
        // 选择头像
        selHeadImg(self){
            $('.headImgMark li').removeClass('selected')
            self.addClass('selected')
            $('.headImgMark').hide()
            src = self.children().attr('src')
            loginFn.alt = self.children().attr('alt')
            loginFn.sex = self.children().attr('data-sex')
            $('.selHeadImg img').attr('src',src)
            
        },
        getCookie:function(c_name){
            if (document.cookie.length>0){
                c_start=document.cookie.indexOf(c_name + "=")
                if (c_start!=-1){ 
                    c_start=c_start + c_name.length+1 
                    c_end=document.cookie.indexOf(";",c_start)
                    if (c_end > 0){
                        return unescape(document.cookie.substring(c_start,c_end))
                    } else if (c_end == -1){ 
                        c_end=document.cookie.length
                        return unescape(document.cookie.substring(c_start,c_end))
                    } 
                }     
            } else {
                return ""
            }
        }, 
        // 验证身份证
        IdentityCodeValid:function(idCard){
            var num = idCard.toUpperCase();
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
            if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
                //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
                layer.msg('输入的身份证号长度不对，或者号码不符合规定！15位号码应全为数字，18位号码末位可以为数字或X。',{
                    time:2000
                })
                return false;
            }

            // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            // 下面分别分析出生日期和校验位
            var len, re;
            len = num.length;
            if (len == 15) {
                re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                var arrSplit = num.match(re);

                // 检查生日日期是否正确
                var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/'
                        + arrSplit[4]);
                var bGoodDay;
                bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2]))
                        && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
                        && (dtmBirth.getDate() == Number(arrSplit[4]));
                if (!bGoodDay) {
                    //alert('输入的身份证号里出生日期不对！');
                    layer.msg('输入身份证号里出生日期不对！',{
                        time:2000
                    })
                    return false;
                } else {
                    // 将15位身份证转成18位
                    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
                            8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4',
                            '3', '2');
                    var nTemp = 0, i;
                    num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
                    for (i = 0; i < 17; i++) {
                        nTemp += num.substr(i, 1) * arrInt[i];
                    }
                    num += arrCh[nTemp % 11];
                    return num;
                }
            }
            if (len == 18) {
                re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                var arrSplit = num.match(re);

                // 检查生日日期是否正确
                var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/"
                        + arrSplit[4]);
                var bGoodDay;
                bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2]))
                        && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
                        && (dtmBirth.getDate() == Number(arrSplit[4]));
                if (!bGoodDay) {
                    layer.msg('输入身份证号里出生日期不对！',{
                        time:2000
                    })
                    return false;
                } else {
                    // 检验18位身份证的校验码是否正确。
                    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                    var valnum;
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
                            8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4',
                            '3', '2');
                    var nTemp = 0, i;
                    for (i = 0; i < 17; i++) {
                        nTemp += num.substr(i, 1) * arrInt[i];
                    }
                    valnum = arrCh[nTemp % 11];
                    if (valnum != num.substr(17, 1)) {
                        //alert('18位身份证的校验码不正确！应该为：' + valnum);
                        layer.msg('18位身份证号校验码不正确！应该为：'+valnum,{
                            time:2000
                        })
                        return false;
                    }
                }
            }

            return true;
        },
        // 加载滑块验证
        addDrag:function(){
            var dragContainer = document.getElementById("dragContainer");
            var dragBg = document.getElementById("dragBg");
            var dragText = document.getElementById("dragText");
            var dragHandler = document.getElementById("dragHandler");
            if(!dragContainer){
                return false;
            }
            //滑块最大偏移量
            var maxHandlerOffset = dragContainer.clientWidth - dragHandler.clientWidth;
            
            initDrag();

            function initDrag() {
                dragText.textContent = "拖动滑块验证";
                dragHandler.addEventListener("mousedown", onDragHandlerMouseDown,true );

                dragHandler.addEventListener("touchstart", onDragHandlerMouseDown,true );
            }

            function onDragHandlerMouseDown(event) {
                 event.stopPropagation();
                document.addEventListener("mousemove", onDragHandlerMouseMove,true );
                document.addEventListener("mouseup", onDragHandlerMouseUp,true );

                document.addEventListener("touchmove", onDragHandlerMouseMove,true );
                document.addEventListener("touchend", onDragHandlerMouseUp,true );
            }

            function onDragHandlerMouseMove(event) {
                /*
                html元素不存在width属性,只有clientWidth
                offsetX是相对当前元素的,clientX和pageX是相对其父元素的

                touches：表示当前跟踪的触摸操作的touch对象的数组。
                targetTouches：特定于事件目标的Touch对象的数组。
            　　changedTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
                */
                 event.stopPropagation();
                   if ( event && event.stopPropagation ){
                          //因此它支持W3C的stopPropagation()方法
                           event.stopPropagation();
                   }
                  else{
                      //否则，我们需要使用IE的方式来取消事件冒泡
                        window.event.cancelBubble = true;
                      
                  }
                var mobile =$.trim($("#mobile").val());
                var telephone1=/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
                if(mobile.length==0){
                    layer.msg('请输入手机号码!',{time:2000})
                    return false;
                }else if(!telephone1.test(mobile)){
                    layer.msg('请输入合法手机号码!',{time:2000})
                    return false;
                }
                if(mobile!=''){
                    event.preventDefault();
                    var left = (event.clientX || event.changedTouches[0].clientX) - dragHandler.clientWidth / 2;
                    left = left-55
                    if(left < 0) {
                        left = 0;
                    } else if(left > maxHandlerOffset) {
                        left = maxHandlerOffset;
                        verifySucc();
                    }
                    dragHandler.style.left = left + "px";
                    dragBg.style.width = dragHandler.style.left;
                }else{
                    layer.msg('请先填写手机号！',{time:2000});
                }
                
            }
            function onDragHandlerMouseUp(event) {
                 event.stopPropagation();
                document.removeEventListener("mousemove", onDragHandlerMouseMove,true );
                document.removeEventListener("mouseup", onDragHandlerMouseUp,true );

                document.removeEventListener("touchmove", onDragHandlerMouseMove,true );
                document.removeEventListener("touchend", onDragHandlerMouseUp,true );

                dragHandler.style.left = 0;
                dragBg.style.width = 0;
            }

            //验证成功
            function verifySucc() {
                loginFn.isVertifySucc = true;
                dragText.textContent = "验证通过";
                dragText.style.color = "white";
                dragHandler.setAttribute("class", "dragHandlerOkBg");

                dragHandler.removeEventListener("mousedown", onDragHandlerMouseDown,true );
                document.removeEventListener("mousemove", onDragHandlerMouseMove,true );
                document.removeEventListener("mouseup", onDragHandlerMouseUp,true );

                dragHandler.removeEventListener("touchstart", onDragHandlerMouseDown,true );
                document.removeEventListener("touchmove", onDragHandlerMouseMove,true );
                document.removeEventListener("touchend", onDragHandlerMouseUp,true );
            };
        },
        // 重新初始化滑块
        reInitDrag:function(){
            loginFn.isVertifySucc = false;
            var dragContainer = document.getElementById("dragContainer");
            var dragBg = document.getElementById("dragBg");
            var dragText = document.getElementById("dragText");
            var dragHandler = document.getElementById("dragHandler");
            dragText.textContent = "拖动滑块验证";
            dragHandler.style.left = 0;
            dragBg.style.width = 0;
            dragHandler.setAttribute("class", "dragHandlerBg");
        }
    }
    loginFn.init()
    $('body').click(function(){
        console.log(23)
    })
})







