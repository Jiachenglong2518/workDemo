window.onload=function() {
    //首页资源加载页
    if ($("#index_loading").length > 0) {

        !function () {
            //初始化布局
            cool_layout._init = function (fn) {
                var _t = cool_layout,
                    _w = document.body.clientWidth;

                _t._config(640, 1136, _w, 1136 / (640 / _w));
                fn();
            };
            cool_layout._init(function () {
                var h = parseInt($("#loading_bg").height());
                var add_h = h / 100;
                //资源预载
                var resources = [];
                resources.push("./image/01/ic_liuxing1@2x.png");
                resources.push("./image/01/bg_diban@2x.png");
                resources.push("./image/01/bt_weixin@2x.png");
                resources.push("./image/01/ic_chahua1@2x.png");
                resources.push("./image/01/ic_chahua2@2x.png");
                resources.push("./image/01/ic_daohanglan@2x.png");
                resources.push("./image/01/ic_liuxing1@2x.png");
                resources.push("./image/01/ic_liuxing2@2x.png");
                resources.push("./image/01/ic_liuxing3@2x.png");
                resources.push("./image/01/ic_turn off@2x.png");
                resources.push("./image/01/ic_xiaoxingqiu@2x.png");
                resources.push("./image/01/ic_xingqiu@2x.png");
                resources.push("./image/01/ic_yuhangyuan@2x.png");
                resources.push("./image/02/ic_chahua2@2x.png");
                resources.push("./image/02/ic_huojian@2x.png");
                resources.push("./image/02/ic_jiazai@2x.png");
                resources.push("./image/02/ic_yun@2x.png");
                resources.push("./image/02/ic_yun2@2x.png");
                resources.push("./image/03/1@2x.png");
                resources.push("./image/03/2@2x.png");
                resources.push("./image/03/3@2x.png");
                resources.push("./image/03/a@2x.png");
                resources.push("./image/03/b@2x.png");
                resources.push("./image/03/bg_resheng@2x.png");
                resources.push("./image/03/bg_xingji@2x.png");
                resources.push("./image/03/bt_ceshi@2x.png");
                resources.push("./image/03/bt_tijiao@2x.png");
                resources.push("./image/03/bt_xiayiti@2x.png");
                resources.push("./image/03/bt_xiayitienter@2x.png");
                resources.push("./image/03/c@2x.png");
                resources.push("./image/03/ic_bofang@2x.png");
                resources.push("./image/03/ic_bofang1@2x.png");
                resources.push("./image/03/ic_chuangguan@2x.png");
                resources.push("./image/03/ic_erweima@2x.png");
                resources.push("./image/03/ic_gongzonghao@2x.png");
                resources.push("./image/03/ic_jinru@2x.png");
                resources.push("./image/03/ic_kid@2x.png");
                resources.push("./image/03/ic_kuang@2x.png");
                resources.push("./image/03/ic_man@2x.png");
                resources.push("./image/03/ic_man2@2x.png");
                resources.push("./image/03/ic_shuqian@2x.png");
                resources.push("./image/03/ic_Star1@2x.png");
                resources.push("./image/03/ic_Star2@2x.png");
                resources.push("./image/03/ic_womon@2x.png");
                resources.push("./image/03/ic_womon2@2x.png");
                resources.push("./image/03/ic_yinxing@2x.png");
                resources.push("./image/03/ic_zhezhi@2x.png");
                resources.push("./image/03/logo@2x.png");
                resources.push("./image/03/Logo2@2x.png");
                resources.push("./image/03/N.O1@2x.png");
                resources.push("./image/03/N.O2@2x.png");
                resources.push("./image/03/N.O3@2x.png");
                resources.push("./image/03/N.O4@2x.png");
                resources.push("./image/03/N.O5@2x.png");
                resources.push("./image/03/Q1@2x.png");
                resources.push("./image/03/Q2@2x.png");
                resources.push("./image/03/Q3@2x.png");
                resources.push("./image/03/Q4@2x.png");
                resources.push("./image/03/Q6@2x.png");
                for(var i= 1;i<12;i++){
                    resources.push("./image/04/star"+i+".png");
                }
                pre_loading.init(resources, function () {
                   $(".loading_box").hide();
                   $(".loading_mask").show();
                }, function (e) {
                    //loading
                    var new_h = parseInt(add_h * e);
                    $("#mask").css({
                        "background-size": "100% " + h + "px",//
                        "margin": (h - new_h) + "px auto 0 auto",
                        "background-position": "0 -" + (h - new_h) + "px",
                        "height": new_h + "px"
                    });
                    $(".progress span").css({width: e + "%"})
                    $(".loading_info").html(e + "%");
                });
            });
        }();
    }
};
//布局
var cool_layout = {

    _initial_width: 0,

    _initial_height: 0,

    _zoom_width: 0,

    _zoom_height: 0,

    _timer: 0,

    _init: 0,

    _config: function (a, b, c, d) {

        var _t = this;
        _t._initial_width = a;
        _t._initial_height = b;
        _t._zoom_width = c;
        _t._zoom_height = d;
        a = b = c = d = _t = 0;
    },
    _set: function(x, y, w, h, z, a, f, fn) {

        var _t = this,
            _w = w / (_t._initial_width / _t._zoom_width),
            _h = h / (_t._initial_height / _t._zoom_height),
            _x = x / (w / _w),
            _y = y / (h / _h),
            p = "px";

        a = document.getElementById(a);
        a.style.zIndex = z;
        if (typeof f == "undefined" || f) {
            a.style.position = 'absolute';
        }

        !isNaN(x) ? a.style.left   = _x + p : a.style.left   = x;
        !isNaN(y) ? a.style.top    = _y + p : a.style.top    = y;
        !isNaN(w) ? a.style.width  = _w + p : a.style.width  = w;
        !isNaN(h) ? a.style.height = _h + p : a.style.height = h;

        if (typeof fn == "function") {
            fn();
        }

        x = y = w = h = z = a =
            f = fn = _t = p = _h = _w = _x = _y = 0;
    }
};
// 预载资源
var pre_loading={
    _list:[],
    _count:0,
    _ie_obj:null,
    _end_fn:null,
    _loading_fn:null,
    init:function(a,b,c){
        var _t=this;
        _t._list=a;
        _t._end_fn=b;
        _t._loading_fn=c;
        _t._loading_fn(0);//
        _t.load();
    },
    load_ing:function(a){
        var _t=this;
        _t._loading_fn(a);
    },
    load_check:function(a,b){
        var _t=this,
            t = setInterval(function() {
                if (a.complete||a.readyState==='uninitialized') {
                    clearInterval(t);
                    _t._count++;
                    _t.load_ing(_t.percentage(_t._count,_t._list.length));
                    document.body.removeChild(a);
                    if(_t._list.length==_t._count){
                        b();
                    }else{
                        _t.load();
                    }
                }
            },1);
    },
    load:function(){
        var _t=this,
            a = document.createElement('img');
        a.src = _t._list[_t._count];
        a.style.display = 'none';
        document.body.appendChild(a);
        _t.load_check(a,_t._end_fn);
    },
    percentage: function(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        return isNaN(a) || isNaN(b) ? "-"
            : 0 >= b ? 0 : Math.round(Math.round(a / b * 1E4) / 100);
    }
};


