$(function () {
    $('.slider-top__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 3000
    });

    // var mixer = mixitup('.products__items');
    // var mixer = mixitup('.products__grid');

    var containerEl1 = $('[data-ref="container-1"]');
    var containerEl2 = $('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

});