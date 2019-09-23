$(document).ready(function(){
	
//toggler button
$('.navbar-toggler').click(function(){

	$('.navbar-toggler').toggleClass('change')

})


//sticky navbar & less padding 
$(window).scroll(function () {

	let position = $(this).scrollTop();

	if(position >= 633) {
		$('.navbar').addClass('navbar-background');
		$('.navbar').addClass('fixed-top');
	} else {
		$('.navbar').removeClass('navbar-background');
		$('.navbar').removeClass('fixed-top');
	}
})






//magnific popup
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',

  gallery: {
  	enabled: true
  }
  // other options
});

});