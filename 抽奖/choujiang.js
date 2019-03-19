$(function(){
    var jFn = {
        deg:0,
        addDeg:60,
        init:function(){
            $('.btn').click(function(){
                jFn.playFn();
            })
        },
        playFn:function(){
            var addDeg = 60;
            jFn.deg = jFn.deg + (jFn.addDeg - jFn.deg%360) + 1080;
          
            console.log(jFn.deg)
            $('.chou').css({
                'transform':'rotate('+jFn.deg+'deg)'
            })
            jFn.addDeg = jFn.addDeg + 100;
        }

    }
    jFn.init();
})