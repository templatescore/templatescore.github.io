//sticky Landing
$(document).ready(function(){
	$(window).scroll(function(){
		var stickyLanding  = $(".fmc-menu"),
			contentSmooth  = $(".fmc-content")

		if($(document).scrollTop() > 100){
			stickyLanding.addClass("fmc-sticky").css("transition","1s");
			contentSmooth.addClass("fmc-content-active").css("transition","1s");
		} else{
			stickyLanding.removeClass("fmc-sticky").css("transition","1s");
			contentSmooth.removeClass("fmc-content-active").css("transition","1s");
		}
	});
});