$(function () {
    layui.form.verify({
        sex: function (value, item) {
            var val = $('[name='+arguments.callee.name+']:checked').val()
            if (!val) {
                return '请选择性别'
            }
        }
    })
    layui.form.on('select(filter)', function(data){
        if (data.value == 10) {
            $('#workunit-other').removeClass('layui-hide')
            $('[name=other]').attr('lay-verify', 'required')
        } else {
            $('#workunit-other').addClass('layui-hide')
            $('[name=other]').attr('lay-verify', '')
        }
    })
    layui.form.on('submit(login)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })
    layui.form.on('submit(register)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })
})