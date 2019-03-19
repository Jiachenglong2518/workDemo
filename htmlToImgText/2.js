$(function(){

    var canFn = {
        
        init:function(){
           // canFn.drawPolgon(canFn.mctx);
           // canFn.drawLine(canFn.mctx);
           //  canFn.drawArea(canFn.mctx);
            $('#btnSave').click(function(event) {
                canFn.creatCanvas()
            });
            
        },
         // 生成Canvas
        creatCanvas:function(){
            var w = $(".container").width();
		    var h = $(".container").height();
		    //要将 canvas 的宽高设置成容器宽高的 2 倍
		    var canvas = document.createElement("canvas");
		    canvas.width = w * 2;
		    canvas.height = h * 2;
		    canvas.style.width = w + "px";
		    canvas.style.height = h + "px";
		    var context = canvas.getContext("2d");
		    context.scale(2,2);
	        html2canvas($('.container'),{
	            canvas: canvas,
	            onrendered: function(canvas) {
	                canFn.convertCanvasToImage(canvas);
	            },
	        })
        },
		
        // 生成Img
        convertCanvasToImage:function (canvas) {
            console.log(canvas)
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            image.width = $(".container").width();
            console.log(image);
            $('.container').html('')
            $('.container').html(image);
        }

    }
    var myChart = echarts.init(document.getElementById('chartContainer'));
    var option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['颜值', '细心', '理财', '品位', '家居', '内涵']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [15, 18, 24, 9,16,5],
            type: 'line',
            areaStyle: {}
        }],
        animation: false,
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    canFn.init();
     

























})
    
