$(function () {
    new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        autoplay: 3000,
        pagination: '.swiper-pagination',
    })
    $('.tab-box').each(function () {
        $(this).tab()
    })
})
