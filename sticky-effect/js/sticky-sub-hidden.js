//sticky Sub Hidden
$(document).ready(function(){
	$(window).scroll(function(){
		var stickyHidden    = $(".fmc-menu"),
		    stickySubHidden = $(".fmc-sub-menu");

		if($(document).scrollTop() > 200){
			stickyHidden.addClass("fmc-sticky-hidden");
			stickySubHidden.addClass("fmc-sub-sticky-hidden");
		} else{
			stickyHidden.removeClass("fmc-sticky-hidden");
			stickySubHidden.removeClass("fmc-sub-sticky-hidden");
		}
	});
});