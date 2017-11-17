"use strict";
$(document).ready(function() {
	$("#nav").onePageNav();

	$("#fmcToggleBasic").click(function(){
		$("#fmcNavBasicItems").toggleClass("fmc-nav-basic-items-active");
		$(this).toggleClass("fmc-nav-basic-toggle-active");
		$("#fmcBodyActive").toggleClass("fmc-body-active");
	});
});

$(document).on("click", function(event){
	var fmcNavBasicToggle = $("#fmcToggleBasic");

    if(fmcNavBasicToggle !== event.target && !fmcNavBasicToggle.has(event.target).length){
        $("#fmcNavBasicItems").removeClass("fmc-nav-basic-items-active");
        $("#fmcToggleBasic").removeClass("fmc-nav-basic-toggle-active");
        $("#fmcBodyActive").removeClass("fmc-body-active");
    }       
});