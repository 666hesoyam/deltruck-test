// banners on index.html
$(document).ready(function(){
    $('.slider').slick({
        // autoplay: true,
        // autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
        // prevArrow: "<img src='img/left-arrow.svg' class='prev' alt='prev'>",
        // nextArrow: "<img src='img/right-arrow.svg' class='next' alt='next'>",
        slidesToScroll: 1
        // responsive: [
        //                 {
        //                     breakpoint: 900,
        //                     settings: {
        //                     slidesToShow: 1
        //                     }
        //                 },
        //             ]
    });
});