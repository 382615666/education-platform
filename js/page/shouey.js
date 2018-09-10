$(function () {
    layui.use('carousel', function(){
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
            elem: '#carousel',
            width: '540px',
            height: '285px',
            arrow: 'always' //始终显示箭头
            //anim: 'updown' //切换动画方式
        });
    });
})