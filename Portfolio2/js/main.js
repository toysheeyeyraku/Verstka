$(document).ready(function () { 
   
    $('.sl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    $('.sli').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        customPaging: function (slick, index) {
            
            return '<button class="tz" type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 2" tabindex="0" aria-selected="true">1</button>';
        }
    });
     $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    
    $(window).resize(function () {

        $('.sl').slick('slickSetOption', 'slidesToShow', 1);
        if ($(window).width() >= 512) {
            $('.sl').slick('slickSetOption', 'slidesToShow', 2);
        }
        if ($(window).width()>=768) {
            $('.sl').slick('slickSetOption', 'slidesToShow', 3);
        }
        if ($(window).width() <= 992) {
            $('.grid').masonry('destroy');
            $('.grid').masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
        }
        if ($(window).width() <= 512) {
            $('.grid').masonry('destroy');
            $('.grid').masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
        }
    });
    
    $('.sl').slick('slickSetOption', 'slidesToShow', 1);
    if ($(window).width() >= 512) {
        $('.sl').slick('slickSetOption', 'slidesToShow', 2);
    }
    if ($(window).width() >= 768) {
        $('.sl').slick('slickSetOption', 'slidesToShow', 3);
    }
    
});