$(document).ready(function() {
    $('.slider1').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        // centerMode: true,
        autoplaySpeed: 2000,
        cssEase: 'ease',
    });
    $('.slider2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev-btn"><</span>',
        nextArrow: '<span class="next-btn">></span>',
    });
});