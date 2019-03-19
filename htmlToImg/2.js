$(function(){

    var canFn = {
        canvas:document.getElementById("myCanvas"),
        mctx:document.getElementById("myCanvas").getContext("2d"),
        mCount:6,//边数
        mCennter:80, //中心点
        mRadius:80, // 半径
        mAngle:Math.PI*2 / 6, // 角度
        mClolr:'#000',
        dateArr:[{
              score:100
            },{
              score:90
            },{
              score:60
            },{
              score:70
            },{
              score:60
            },{
              score:60
            }
        ],
        init:function(){
            canFn.drawPolgon(canFn.mctx);
            canFn.drawLine(canFn.mctx);
            canFn.drawArea(canFn.mctx);
            $('#btnSave').click(function(event) {
                canFn.creatCanvas()
            });
            
        },
       
        // 绘制多变形
        // Math.sin(x)      x 的正玄值。返回值在 -1.0 到 1.0 之间；
        // Math.cos(x)    x 的余弦值。返回的是 -1.0 到 1.0 之间的数；
        // 这两个函数中的X 都是指的“弧度”而非“角度”，弧度的计算公式为： 2*PI/360*角度；
        drawPolgon: function (ctx){
            ctx.save();
            ctx.strokeStyle = canFn.mClolr;  //线条颜色
            // 画正六边形
            ctx.beginPath(); 
            for(var i = 0;i<6;i++){
                var x = canFn.mCennter + canFn.mRadius *Math.cos(canFn.mAngle*i)
                var y = canFn.mCennter + canFn.mRadius *Math.sin(canFn.mAngle*i)
                console.log(x,y)
                ctx.lineTo(x,y) // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
            }
            ctx.closePath();
            ctx.stroke(); // 绘制已定义路径

        },

        // 连接顶点线
        drawLine:function(ctx){
            ctx.save();
            ctx.strokeStyle = canFn.mClolr;
            // 画正六边形
            ctx.beginPath(); 
            for(var i = 0;i<6;i++){
                var x = canFn.mCennter + canFn.mRadius *Math.cos(canFn.mAngle*i);
                var y = canFn.mCennter + canFn.mRadius *Math.sin(canFn.mAngle*i);
                ctx.moveTo(canFn.mCennter,canFn.mCennter)
                ctx.lineTo(x,y)  // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
            }
            ctx.stroke();// 绘制已定义路径
            ctx.restore(); // 返回之前保存过的路径状态和属性
        },
        // 绘制数据区域
        drawArea:function(ctx){
            ctx.save();
            ctx.beginPath(); 
            for(var i = 0;i<6;i++){
                var x = canFn.mCennter + canFn.mRadius *Math.cos(canFn.mAngle*i)*canFn.dateArr[i].score/100;
                var y = canFn.mCennter + canFn.mRadius *Math.sin(canFn.mAngle*i)*canFn.dateArr[i].score/100;
                ctx.lineTo(x,y) // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(255,0,0,0.5)'; //定义填充颜色
            ctx.fill(); // 填充
            ctx.restore(); // 绘制已定义路径
        },
         // 生成Canvas
        creatCanvas:function(){
            html2canvas($('#content'),{
                onrendered: function(canvas) {
                    canFn.convertCanvasToImage(canvas);
                }
            })
        },
        // 生成Img
        convertCanvasToImage:function (canvas) {
            // localStorage.imgSrc = canvas.toDataURL("image/png");
            // window.location.href = '3.html'
            console.log(canvas)
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            document.body.appendChild(image);
        }

    }
    canFn.init();
     

























})
    
