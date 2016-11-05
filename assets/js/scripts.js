$(document).ready(function() {
    $('.menu .item')
        .tab();
    $('#showDimmer')
        .dimmer({
            on: 'click',
            variation: 'flatgold'
        });

    $('#sidebarTrigger')
        .popup({
            inline: false,
            hoverable: true,
            position: 'right center',
        })
        .on('click', function() {
            $('#sidebarContent').sidebar({
                dimPage: false,
                transition: 'push'
            }).sidebar('toggle');
            toggleArrow();
        });

    $('.ui.carousel').slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        swipe: true,
        focusOnSelect: false,
        respondTo: 'window',
        vertical: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });

    $('.ui.modal.0')
        .modal('attach events', '.show.profile.0', 'show');
    $('.ui.modal.1')
        .modal('attach events', '.show.profile.1', 'show');
    $('.ui.modal.2')
        .modal('attach events', '.show.profile.2', 'show');
    $('.ui.modal.3')
        .modal('attach events', '.show.profile.3', 'show');
    $('.ui.modal.4')
        .modal('attach events', '.show.profile.4', 'show');

    $('.ui.progress').progress();
    $('.circle').circleProgress();



    $('.philosophy-carousel').slick({
        arrows: false,
        dots: true,
        customPaging: function(slick, index) {
            var paging = slick.$slides.eq(index).find('h3').data('paging');
            return '<a class="paging">' + paging + '</a>';
        },
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        centerPadding: '100px',
        focusOnSelect: false,
        vertical: false,
    });
});
