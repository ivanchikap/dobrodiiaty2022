$( document ).ready(function() {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '',
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '72px',
                    arrows: false
                }
            },
        ]
    });


    $('.t-slider').slick({
        centerMode: true,
        centerPadding: '',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    centerPadding: '230px'
                }
            },

            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '120px'
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '10px',
                    arrows: false
                }
            },
        ]
    });
});
