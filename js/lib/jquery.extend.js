$(function () {
    $.fn.extend({
        tab: function (obj) {
            var param = $.extend({
                index: 1
            }, obj)
            $(this)
                .find('.tab-head-item')
                .on('click', function (e) {
                    $(this).addClass('active').siblings().removeClass('active')
                    var index = $(this).parent().children().index(this)
                    $(this).parent().next().children().eq(index).show().siblings().hide()
                })
                .eq(param.index - 1)
                .addClass('active')
                .end()
                .end()
                .find('.tab-content .tab-body')
                .eq(param.index - 1)
                .show()
        }
    })
})