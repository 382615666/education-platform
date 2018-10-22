$(function () {
    $('.layout-condition-item-box.change').on('click', '.layout-condition-value-item', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.layout-condition-item-box').on('click', '.layout-condition-value-item.link.active', function () {
        $(this).remove()
    })
    $('.major-change').on('click', '.major-item', function () {
        layer.close(layer.index)
    })
    $('#major-btn').on('click', function () {
        layui.layer.open({
            type: 1,
            title: '选择专业',
            area: '1000px',
            maxHeight: 700,
            content: layui.jquery('#major-change')
        })
    }).click()
})