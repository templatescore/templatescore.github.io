window.addEventListener("load", function(){
	var load_screen = document.getElementById("load_screen");
	document.body.removeChild(load_screen);
});

$(document).ready(function(){
	$(".navoid-toggle-right").click(function(){
		$(".navoid-right-menu").slideToggle(300);
		$(".navoid-left-aside").hide();

		window.onclick = function(event){
			if(!event.target.matches(".navoid-toggle-right")){
				$(".navoid-right-menu").hide();
			}
		}
	});
});

$(document).ready(function(){
	$(".navoid-toggle-left").click(function(){
		$(".navoid-left-aside").slideToggle(300);
		$(".navoid-right-menu").hide();

		window.onclick = function(event){
			if(!event.target.matches(".navoid-toggle-left")){
				$(".navoid-left-aside").hide();
			}
		}
	});
});