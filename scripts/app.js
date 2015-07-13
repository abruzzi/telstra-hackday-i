$(document).ready(function() {
	new WOW().init();
	 $("#teams").owlCarousel({
 
      autoPlay: 3000,
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
});