
 $(document).ready(function() {
    $("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black', "fx-listitems-fade"],
        navbar: {
            //title: '<img src="/assets/img/main/logo-1.png">'
        },
    }, {
        // configuration
        offCanvas: {
            pageSelector: "#my-page"
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:start', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:before', function() {
        $('.hamburger').removeClass('is-active');
    })
});

$(document).ready(function(){
    $('.teachers-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            400:{
                items:2,
                margin:15,
                dots:false,
                nav:false
            },
            800:{
                items:3,
                autoplay:false,
                nav:false,
                dots:false,
            }
        }
    })
});


// галерея в футере

$(document).ready(function() {
    $("#lightgallery").lightGallery(); 
});