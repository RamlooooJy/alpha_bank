/*** Подключение слайдеров */

/*** Slick slider */
$('.js-variable-width').slick({
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
    // centerMode: true,
    variableWidth: true,
    // adaptiveHeight: true
});
$('.js-products-slick').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button></button>',
    nextArrow: '<button></button>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: $('.rgs-products .js-slick-dots-container'),
    appendArrows: $('.rgs-products .js-slick-arrows-container'),

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true,
                arrows: true,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,

            }
        }
    ]
});


$('.js-guarantees-slick').slick({
    dots: false,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    // centerMode: true,
    variableWidth: true,
    appendDots: $('.rgs-guarantees .js-slick-dots-container'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                dots: false,
                centerMode: false,

            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});
$('.js-banners-slick').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 200,
    autoplay:true,
    autoplaySpeed:4000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button></button>',
    nextArrow: '<button></button>',
    appendDots: $('.rgs-content-banner .js-slick-dots-container'),
    appendArrows: $('.rgs-content-banner .js-slick-arrows-container'),
    responsive: [
        {
            // breakpoint: 3000,
            settings: {
                arrows: true,
            }
        },
        {
            // breakpoint: 1140,
            settings: {
                arrows: false,
            }
        },


    ]

});


/*** FAQ */
document.querySelectorAll('.bm-faq__item-title').forEach(block => {
    block.addEventListener('click', (e) => {
        e.currentTarget.parentNode.classList.toggle('active');
    });
});

/*** Header */


/*** Burger */
$('.rgs-header__burger-btn').on('click',(e)=>{
   e.currentTarget.classList.toggle('active');
   $('body')[0].classList.toggle('rgs-header-menu_open');
});
