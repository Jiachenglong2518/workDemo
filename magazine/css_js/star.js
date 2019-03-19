function creatCanvas(){
    var w = $(".star_wrap").width();
    var h = $(".star_wrap").height();
    //要将 canvas 的宽高设置成容器宽高的 2 倍
    var canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    // canvas.style.width = w + "px";
    // canvas.style.height = h + "px";
    // var context = canvas.getContext("2d");
    // context.scale(2,2);
    html2canvas($('.star_wrap'),{
        canvas: canvas,
        onrendered: function(canvas) {
            // convertCanvasToImage(canvas);
//                $('.content').remove();
            document.body.appendChild(canvas)
        },
    })
}
setTimeout(function () {
    creatCanvas()
},1000)
// 生成Img
function convertCanvasToImage (canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    console.log(canvas.toDataURL("image/png"))
    // image.className='cearteImg';
    // $('.addImgBox').html('');
    // $('.addImgBox').css({
    //     'padding-bottom':'0.4rem'
    // });
    // $('.addImgBox').append(image);
    // $('.container').append("<a class='again' href='/womanMax/questionOne'></a>");
    // $('.container').append("<a class='goAudio' href='https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU1MDkyNTY5NA==&scene=124#wechat_redirect'></a>");
}
