//sticky Adaptation Hide Show
$(document).ready(function(){
	$(window).scroll(function(){
		var stickyHidden  = $(".fmc-menu");

		if($(document).scrollTop() > 0){
			stickyHidden.addClass("fmc-sticky-hide");
		} else{
			stickyHidden.removeClass("fmc-sticky-hide");
		}

		if($(document).scrollTop() > 250){
			stickyHidden.addClass("fmc-sticky-adaptation");
			stickyHidden.addClass("fmc-sticky-show");
		} else{
			stickyHidden.removeClass("fmc-sticky-adaptation");
			stickyHidden.removeClass("fmc-sticky-show");
		}
	});
});