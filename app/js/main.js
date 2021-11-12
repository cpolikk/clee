$(function () {
    $(".star").rateYo({
        starWidth: "14px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        rating: 4,
        readOnly: true,

    });

    $(".filter-price__input").ionRangeSlider({
        type: "double",
        prefix: "$",
        step: "0.01",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },

        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

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