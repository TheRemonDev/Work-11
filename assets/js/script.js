/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Agrul - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */

(function($){
    "use strict"
    $(document).ready(function(){

        AOS.init({
            duration: 1500,
        });

         /* ==================================================
            # Testimonial Carousel
         ===============================================*/
		const testimonialStyleOne = new Swiper(".testimonial-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
	
			breakpoints: {
				
				1199: {
					slidesPerView: 1,
				}
			},
		});


         /* ==================================================
            # Services Carousel
         ===============================================*/
		const ServicesStyleOne = new Swiper(".service-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 4,
				}
			},
		});

        /* ==================================================
            # Brand Carousel
         ===============================================*/
		const BrandStyleOne = new Swiper(".brand-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			
			breakpoints: {
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1199: {
					slidesPerView: 6,
				}
			},
		});

		/* ==================================================
            # Mixitup
         ===============================================*/

		//  var containerEl = document.querySelector('.magnific-mix-gallery');

        //     var mixer = mixitup(containerEl);

        /* ==================================================
            # Venobox
         ===============================================*/

			new VenoBox({
				selector: '.my-video-links',
			});

			/* ==================================================
            # Typed js
            ===============================================*/

			

			/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.counter').counterUp({
			delay: 20,
			time: 3000
		});


		// =============Scroll Up Button Progress=======
		let progressPath = document.getElementById("progress-path");
        let progressWrap = document.getElementById("progress-wrap");
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.webkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition =
        "stroke-dashoffset 10ms linear";
  
       const onScollEvent = function (event) {
         let scroll = window.scrollY;
         let height = document.body.scrollHeight - window.innerHeight;
         let progress = pathLength - (scroll * pathLength) / height;
         progressPath.style.strokeDashoffset = progress;

         let offset = 50;
         if (window.scrollY > offset) {
           progressWrap.classList.add("active-progress");
         } else {
           progressWrap.classList.remove("active-progress");
         }
       };


	   // ============= Progress=======
onScollEvent();
window.onscroll = onScollEvent;
progressWrap.onclick = function (event) {
  window.scroll({ top: 0, behavior: "smooth" });
  return false;
};
	

$(window).on('scroll',function(){
	let scroll = $(window).scrollTop();
	let oTop = $('.progress-bar').offset().top - window.innerHeight;
	if(scroll>oTop){
		$(".progress-bar").addClass("progressbar-active");
	}
	else{
		$(".progress-bar").removeClass("progressbar-active");
	}
});




    })
})(jQuery);