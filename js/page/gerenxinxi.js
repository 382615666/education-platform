$(function () {
    $('.info-edit-btn').on('click', function () {
        $(this).hide()
        $('.detail-form').hide()
        $('.edit-form').show()
    })
    $('.cancel-btn').on('click', function () {
        $('.info-edit-btn').show()
        $('.detail-form').show()
        $('.edit-form').hide()
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
        $('.cancel-btn').click()
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })
})