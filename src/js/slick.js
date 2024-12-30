$(document).ready(function () {
    $('.opinions__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3300,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})
