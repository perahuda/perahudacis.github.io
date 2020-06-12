$(document).ready(function () {
    $('.sliderOffers').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        appendDots: '.sliderOffersMenu',
        customPaging: function (slick, index) {
            var txt = slick.$slides.eq(index).find('.caption').text();
            return '<span class="linkCaption">' + txt + '</span>';
        }
    });

    ymaps.ready(function () {
        var myMap = new ymaps.Map('mapWrapper', {
            center: [59.996705, 30.384819],
            zoom: 15,
            controls: ['zoomControl']
        }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                iconContent: '<div class="markerInfo"></div>',
            }, {
                iconColor: '#E22228',
            });


        myMap.geoObjects
            .add(myPlacemark)
    });
})