// mobile memu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

// nav scroll to div
$('.click').click(function(l){
  // prevent default action

  l.preventDefault();

  scrollToElement( $(this).attr('href'), 1000 );
});

var scrollToElement = function(el, ms){
   var speed = (ms) ? ms : 2000;
   $('html,body').animate({
       scrollTop: $(el).offset().top
   }, speed);
}



// animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animaate-hero", {
	duration: 0.6,
	opacity: 0,
	y: -150,
	stagger: 0.3
});

gsap.from(".animate-card", {
	scrollTrigger: {
        trigger: "animate-card",
        toggleActions: "restart none none none"
    },
	duration: 1,
	opacity: 0,
	y: -150,
	stagger: 0.1,
	delay: 0.2
});

gsap.from(".logo-box-animate", {
  scrollTrigger: {
    trigger: "logo-box-animate",
    toggleActions: "restart none none none"
},
  duration: 2,
  scale: 0.5, 
  opacity: 0, 
  delay: 0.5, 
  stagger: 0.2,
  ease: "elastic", 
  force3D: true
});


