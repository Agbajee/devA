/* ===================================================
NAVBAR scroll Effect
=================================================== */
$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('.main');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
        $('.main-header')
        .css('background', '#d9ecc7');
      } else {
        $('.main-header')
        .css('background', '#e8e8e8')
      }
  });
});

$(document).ready(function(){
  $('#menuToggler').click(function (e) { 
    e.preventDefault();
    "strict";
    $("#menu").slideToggle("slow");
  });
  $('#closeMenu').click(function (e) { 
    e.preventDefault();
    "strict";
    $("#menu").slideToggle("slow");
  });
});
/* ===================================================
Visibility on scroll
=================================================== */

// gsap.to('.main-header', { 
//   autoAlpha: 0,
//   duration: 1,
//   ease: "none",
//   scrollTrigger: {
//     start: 0,
//     end: 1,
//     toggleActions: "play none reverse"
//   }
// });

// gsap.timeline({
//   scrollTrigger:{
//     trigger: ".section",
//     start:"top center",
//     end:"bottom top",
//     marker:true,
//     scrub:true,
//     pin: true,
//   }
// })
// .from(".box", {
//   x:innerWidth * -1,
//   opacity: 0,
// })
// .from(".about-img", {
//   x:innerWidth * -1,
//   opacity: 0,
// })


/* ===================================================
HORIZONTAL PAGE scroll
=================================================== */

//  gsap.utils.toArray(".section").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });


// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// }); 


/* ===================================================
Text Reveal scroll
=================================================== */
tl = new TimelineMax({});
tl.staggerFrom('.scroll-in', 
                1.5,
                {y:"100%", ease:Power4.easeInOut}, 
                0.3
);

tl.staggerFrom('.fade-in',
        0.5,
        {opacity:"0", ease:Power4.easeInOut},
        0.5
  )

/* ===================================================
Scrolling Gallery
=================================================== */