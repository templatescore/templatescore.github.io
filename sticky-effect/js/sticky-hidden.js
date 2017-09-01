//sticky Hidden
$(document).ready(function(){
	$(window).scroll(function(){
		var stickyHidden  = $(".fmc-menu");

		if($(document).scrollTop() > 150){
			stickyHidden.addClass("fmc-sticky-hidden");
		} else{
			stickyHidden.removeClass("fmc-sticky-hidden");
		}
	});
});