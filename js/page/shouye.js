$(function () {
    layui.carousel.render({
        elem: '#carousel',
        width: '540px',
        height: '285px',
        arrow: 'none' //始终显示箭头
        //anim: 'updown' //切换动画方式
    });
    $('.tab-box').tab()
})