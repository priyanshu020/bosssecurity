$(document).ready(function(){

    //STICKY HEADER
        var $header= $('header');
        var $sticky= $header.before($header.clone().addClass("sticky"));
    
        $(window).on("scroll", function() {
            var scrollFromTop = $(window).scrollTop();
            $("body").toggleClass("scroll", (scrollFromTop > 770));
        })

    
    //RESPONSIVE MENU
        var body= $('body');
        var mainOverlay= $('.js-main-overlay');
        var menuTrigger= $('.js-menu-trigger');

        menuTrigger.on('click', function(){
            body.addClass('menu-is-active');
        });

        mainOverlay.on('click', function(){
            body.removeClass('menu-is-active');
        });

    
    //CAROUSEL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            375.8: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:1
            }
        }
    });

    
})

    //MASONRY
    new WOW().init();