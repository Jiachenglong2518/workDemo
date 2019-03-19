$(function(){
    var listFn = {
        init:function(){
            //初始化时间选择器
            listFn.initLayData();
            // 初始化Form 这样多选框 下来选择才能加载
            listFn.initForm();
        },
        // 时间选择器
        initLayData:function(){
            layui.use('laydate', function(){
                var laydate = layui.laydate;
                // 执行一个laydate实例
                $('.timeInput').each(function(index, el) {
                    var idStr = "#" + $(el).attr('id');
                    laydate.render({
                        elem: idStr, //指定元素
                    });
                });
                
               
            });
            
        },
        // 初始化Form 这样多选框 下来选择才能加载 
        initForm:function(){
            layui.use('form', function(){
            var form = layui.form;
              //监听提交
              form.on('submit(formDemo)', function(data){
                console.log(data.field)
                return false;
              });
            });
        }
    }
    listFn.init();
})