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

});