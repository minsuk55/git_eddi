document.addEventListener("DOMContentLoaded", function(){
	$(document).ready(function($) {
	  $('.fadeOut').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		loop: true,
		//margin: 10,
	  });
	  $('.custom1').owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		items: 1,
		//margin: 30,
		stagePadding: 30,
		smartSpeed: 450
	  });
	  $('.owl-carousel').owlCarousel({
		items: 10,
		loop: false,
		center: true,
		//margin: 10,
		callbacks: true,
		URLhashListener: true,
		autoplayHoverPause: true,
		startPosition: 'URLHash'
	  });
	})
});