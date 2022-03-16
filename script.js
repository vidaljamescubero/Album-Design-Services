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

if (document.querySelector("#banner-overlay") !== null ) {
    document.querySelector(".design-service-block-1").classList.add("design-service-block-1-with-topbanner")
}


document.querySelector(".design-service-block-5-grid-4-button-2").addEventListener("click", function() {
    
    let button1 = document.querySelector('.design-service-block-5-grid-4-button-1');

    let button2 = document.querySelector('.design-service-block-5-grid-4-button-2');

    let quote1 = document.querySelector('.design-service-block-5-quote-1');

    let quote2 = document.querySelector('.design-service-block-5-quote-2');

    button1.classList.remove("design-service-block-5-grid-4-button-active");
    button1.classList.remove("disabled");
    quote2.classList.remove("design-service-block-5-quote-hidden");

    button2.classList.add("design-service-block-5-grid-4-button-active");
    button2.classList.add("disabled");
    quote1.classList.add("design-service-block-5-quote-hidden");
})

document.querySelector(".design-service-block-5-grid-4-button-1").addEventListener("click", function() {
    
    let button1 = document.querySelector('.design-service-block-5-grid-4-button-1');

    let button2 = document.querySelector('.design-service-block-5-grid-4-button-2');

    let quote1 = document.querySelector('.design-service-block-5-quote-1');

    let quote2 = document.querySelector('.design-service-block-5-quote-2');

    button2.classList.remove("design-service-block-5-grid-4-button-active");
    button2.classList.remove("disabled");
    quote1.classList.remove("design-service-block-5-quote-hidden");

    button1.classList.add("design-service-block-5-grid-4-button-active");
    button1.classList.add("disabled");
    quote2.classList.add("design-service-block-5-quote-hidden");
     
})

let accordion = document.querySelectorAll('.design-service-block-8-accordion-container');

for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        console.log("hi")
      this.classList.toggle('design-service-block-8-accordion-active')
    })
  }

window.onload = function() {
    setTimeout(function(){
        if (document.querySelector("#launcher") !== null) {
            document.querySelector("#launcher").style.display = "none";
        }
    }, 3000)
}

