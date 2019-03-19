function shareWx(shareObj){		
		var ticketStr = 'HoagFKDcsGMVCIY2vOjf9oPk1QgkuHOpx4Oqj98kybj4dN6zXyv5teDnkxcvIX771WLn3LwrIba-2QlwrrdYug';
		$.ajax({
	    	url:'/shareM',
			type:'get',
			dataType:'json',
			contentType:"application/json",
			async:false,
		    success:function(ret){
		    	console.log(ret);
		    	ticketStr = ret.ticket;
		    } 
	    });
        var url = window.location.href;
        var ret = sign(ticketStr,url)
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wxf8b5fbfa79c286d5', // 必填，公众号的唯一标识
            timestamp:ret.timestamp, // 必填，生成签名的时间戳
            nonceStr: ret.nonceStr, // 必填，生成签名的随机串
            signature: ret.signature,// 必填，签名
            jsApiList: ['updateTimelineShareData','updateAppMessageShareData'] // 必填，需要使用的JS接口列表
        });
        
        wx.ready(function(){
        	//分享给朋友
    	    wx.updateAppMessageShareData({ 
    	    	title: shareObj.title, // 分享标题
    	        desc: shareObj.desc, // 分享描述
    	        link: shareObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    	        imgUrl:shareObj.imgUrl, // 分享图标
    	        success: function () {
    	          // 设置成功
    	        }
    	    })
            //分享到朋友圈
            wx.updateTimelineShareData({
                title: shareObj.friendTitle, // 分享标题
                link:shareObj.link, // 分享链接
                imgUrl: shareObj.imgUrl, // 分享图标
            },function(res){
            	// 设置成功
            });
            //检查微信接口是否调用成功
            wx.checkJsApi({
               jsApiList: ['updateTimelineShareData','updateAppMessageShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
               success: function(res) {
                   // 以键值对的形式返回，可用的api值true，不可用为false
                   // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
               }
            });
        });

}