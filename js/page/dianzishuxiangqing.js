$(function () {
    function setPage () {
        $('.flip-book-number').val($('.flipbook').turn('page'))
        $('.flip-book-page').text('/ ' + $('.flipbook').turn('pages'))
    }
    $('.flipbook').turn({
        double: true
    });
    $('.flip-book-right,.edu-qianjin').on('click', function () {
        $('.flipbook').turn('next')
        setPage()
    })
    $('.flip-book-left,.edu-qianjin-copy').on('click', function () {
        $('.flipbook').turn('previous')
        setPage()
    })
    $('.edu-forward-copy').on('click', function () {
        $('.flipbook').turn('page', 1)
        setPage()
    }).click()
    $('.edu-forward').on('click', function () {
        $('.flipbook').turn('page', $('.flipbook').turn('pages'))
        setPage()
    })
    var zoom = 1
    $('.edu-suoxiao').on('click', function () {
        if (zoom <= 0.1) {
            zoom = 0.1
        } else {
            zoom = zoom - 0.1
        }
        $('.flipbook').turn('zoom', zoom)
    })
    $('.edu-fangda').on('click', function () {
        if (zoom >= 1) {
            zoom = 1
        } else {
            zoom = zoom + 0.1
        }
        $('.flipbook').turn('zoom', zoom)
    })
})