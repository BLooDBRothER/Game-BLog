$(document).ready(function(){
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    /* onclick toggle*/
    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /*owl carousel*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplatTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            620:{
                items:2
            },
            750:{
                items:3
            }
        }

    });

    /*Click to goto top of the page */
    $('.upward span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS instance

    AOS.init();
});

