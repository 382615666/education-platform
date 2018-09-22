$(function () {
    $('#sign-up-btn').on('click', function () {
        layui.layer.open({
            type: 1,
            title: '组织报名',
            area: '700px',
            content: $('#sign-up-info')
        })
    })
    $('#cancel-sign-up-btn').on('click', function () {
        layui.layer.close(layui.layer.index)
    })
    $('#confirm-sign-up-btn').on('click', function () {
        layui.layer.close(layui.layer.index)
    })
    layui.upload.render({
        elem: '#upload-group-btn' //绑定元素
        ,url: '/upload/' //上传接口
        ,done: function(res){
            //上传完毕回调
        }
        ,error: function(){
            //请求异常回调
        }
    })
    layui.upload.render({
        elem: '#upload-baomingbiao-btn' //绑定元素
        ,url: '/upload/' //上传接口
        ,done: function(res){
            //上传完毕回调
        }
        ,error: function(){
            //请求异常回调
        }
    })
    layui.upload.render({
        elem: '#upload-file-btn' //绑定元素
        ,url: '/upload/' //上传接口
        ,done: function(res){
            //上传完毕回调
        }
        ,error: function(){
            //请求异常回调
        }
    })
})