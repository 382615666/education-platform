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
})