$.getScript( "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function(data, textStatus, jqxhr) {
    
    $('.owl-carousel').owlCarousel({
        loop: false,
        responsiveClass:true,
        margin: 15,
        nav:true,
       
        responsive:{
            0:{
                items:1,
                center: true,
            },
            700:{
                items:2,
                stagePadding: 50
            },
            1000:{
                items:3,
                stagePadding: 10
            },
            1150:{
                items:3,
                stagePadding: 100
            },
            1250:{
                items:4,
                nav: false,
            }
        }
    })

   
});

