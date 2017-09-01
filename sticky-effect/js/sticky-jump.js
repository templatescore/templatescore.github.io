//sticky Jump
$(document).ready(function(){
	$(window).scroll(function(){
		var sticky    = $(".fmc-menu"),
		    stickySub = $(".fmc-sub-menu");

		if($(document).scrollTop() > 400){
			sticky.addClass("fmc-sticky");
			stickySub.addClass("fmc-sub-sticky");
		} else{
			sticky.removeClass("fmc-sticky");
			stickySub.removeClass("fmc-sub-sticky");
		}
	});
	$(window).scroll(function(){
		if($(document).scrollTop() > 550){
			$(".fmc-sticky").addClass("fmc-sticky-hidden");
			$(".fmc-sub-sticky").addClass("fmc-sub-sticky-hidden");
		} else{
			$(".fmc-sticky").removeClass("fmc-sticky-hidden");
			$(".fmc-sub-sticky").removeClass("fmc-sub-sticky-hidden");
		}
	});
});