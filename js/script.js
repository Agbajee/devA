/* ===================================================
Visibility on scroll
=================================================== */

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  offset: 600, // offset (in px) from the original trigger point
  delay: 40, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

});
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

$('.scroll').paroller({
  factorSm: 0.1,
  factor: 0.7,
  type: 'foreground',
  direction: 'vertical'
});

$('.bg-line').paroller({
  factorSm: 0.1,
  factor: 0.4,
  type: 'foreground',
  direction: 'horizontal'
});

$('.frame:nth-child(1)').paroller({
  factorSm: 0.1,
  factor: 0.1,
  type: 'foreground',
  direction: 'vertical'
});
$('.frame:nth-child(2)').paroller({
  factorSm: -0.1,
  factor: -0.1,
  type: 'foreground',
  direction: 'vertical'
});
$('.frame:nth-child(3)').paroller({
  factorSm: -0.1,
  factor: -0.1,
  type: 'foreground',
  direction: 'horizontal',
  transition:2
});

$('.car').paroller({
  factorSm: 0.1,
  factor: 0.4,
  type: 'foreground',
  direction: 'horizontal',
  transition:2
});