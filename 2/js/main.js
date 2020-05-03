$(document).ready(function () {
    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        prevArrow: $('.prev9'),
        nextArrow: $('.next9'),
       
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]

    });
});