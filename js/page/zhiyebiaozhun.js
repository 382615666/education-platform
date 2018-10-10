$(function () {
    layui.laypage.render({
        elem: 'pagination'
        ,count: 100
        //,groups: 0
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip', ]
        ,jump: function(obj){
            console.log(obj)
        }
    });
    $('.layout-list-vertical .download').on('click', function (e) {
        e.stopPropagation()
        $('.xiti-download-btn').parent().attr('action', $(this).data('url')).end().click()
    })
})