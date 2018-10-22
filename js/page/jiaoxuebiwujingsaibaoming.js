$(function () {
    layui.laydate.render({
        elem: '#birthday' //指定元素
    })
    layui.upload.render({
        elem: '#picture', //绑定元素
        acceptMime: 'image/jpg,image/jpeg,image/png,image/bmp',
        url: '/upload/' //上传接口
        ,done: function(res){
            //上传完毕回调
        }
        ,error: function(){
            //请求异常回调
        }
    })
    layui.upload.render({
        elem: '#attachment' //绑定元素
        ,url: '/upload/' //上传接口
        ,done: function(res){
            //上传完毕回调
        }
        ,error: function(){
            //请求异常回调
        }
    })
    layui.form.verify({
        sex: function (value, item) {
            var val = $('[name='+arguments.callee.name+']:checked').val()
            if (!val) {
                return '请选择性别'
            }
        }
    })
    layui.form.on('submit(form)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
        layui.layer.open({
            type: 0,
            title: '报名表',
            area: '400px',
            content: '<i class="iconfont edu-hebingxingzhuang" style="color: #6CD488;font-size: 30px;vertical-align: middle"></i> 报名表已经提交成功'
        })
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })
})