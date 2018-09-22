layer.config({
    shadeClose: true
})
$(function () {
    // 关闭详情页
    $('.close-btn').on('click', function () {
        window.close()
    })
    // 折叠面板扩展
    $('.layui-colla-item').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active').sibling().removeClass('active')
        }
    })
    // 阻止冒泡
    $('.layui-colla-item .layui-colla-content-item').on('click', function (e) {
        e.stopPropagation()
    })
})