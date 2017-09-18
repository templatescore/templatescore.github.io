$(document).ready(function(){
	$('.fmc-nav-toggle').click(function(){
		$('.fmc-nav-toggle').toggleClass('fmc-nav-active');
		$('.fmc-nav-link').slideToggle(300);
	});
	$('.fmc-nav-bars').click(function(){
		$('.fmc-nav-toggle').removeClass('fmc-nav-active');
		$('.fmc-nav-link').hide();
	});
	
});