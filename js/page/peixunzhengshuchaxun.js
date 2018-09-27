$(function () {
    $('#searchInfo').on('click', function () {
        layui.layer.open({
            type: 1,
            title: '职业培训证书',
            area: '700px',
            content: layui.jquery('#certification-info')
        })
    })
})