"use strict";
$(document).ready(function(){
	
	$("ul li:nth-child(1)").click(function(){
		$("#line").css("margin-left","0px");
	});

	$("ul li:nth-child(2)").click(function(){
		$("#line").css("margin-left","100px");
	});

	$("ul li:nth-child(3)").click(function(){
		$("#line").css("margin-left","200px");
	});

	$("ul li:nth-child(4)").click(function(){
		$("#line").css("margin-left","300px");
	});

	$("ul li:nth-child(5)").click(function(){
		$("#line").css("margin-left","400px");
	});

	$(window).scroll(function(){
		var scroll = $(this).scrollTop();

		if(scroll > $(".fmc-img-bg").offset().top - 0){
			$(".fmc-fixed-container").addClass("fmc-fixed").css("transition","1s");
			$(".fmc-fixed-container").addClass("fmc-hide").css("transition","1s");
			$(".fmc-light-bg").addClass("fmc-light-bg-show").css("transition","0.7s");
		}else{
			$(".fmc-fixed-container").removeClass("fmc-fixed").css("transition","1s");
			$(".fmc-fixed-container").removeClass("fmc-hide").css("transition","1s");
			$(".fmc-light-bg").removeClass("fmc-light-bg-show").css("transition","1.5s");
		}
		
	});

});