//sticky Adaptation
$(document).ready(function(){
	$(window).scroll(function(){
		var stickyHidden  = $(".fmc-menu");

		if($(document).scrollTop() > 0){
			stickyHidden.addClass("fmc-sticky-adaptation");
		} else{
			stickyHidden.removeClass("fmc-sticky-adaptation");
		}
	});
});