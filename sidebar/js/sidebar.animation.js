/*------------------------------------------------------------------

[Master Script]

Code Name     : Sidebar Multi Level (animation)
Version       : 1.0
Framework     : iCore For Developer // getcore.github.io
Author        : Andika Chamberlin // andikachamberlin.github.io
Credit        : taniarascia.com

-------------------------------------------------------------------*/

"use strict";
$(function(){

	// sidebar multi level
	$(".i-acc-list li a:not(:only-child)").click(function(e) {
      	$(this).siblings(".i-acc-dropdown").slideToggle(300);
      	$(this).find(".i-acc-arrow").toggleClass("i-acc-arrow-active");
      	$(this).toggleClass("i-acc-active");
      	e.stopPropagation();
    });

    // sidebar btn show sidebar
    $(".i-sidebar-btn").click(function(){
    	$(".i-sidebar").toggleClass("i-sidebar-active");
    	$(".i-sidebar-window").fadeIn(300);
    });

    $(".i-sidebar-window").click(function(){
    	$(this).fadeOut(300);
    	$(".i-sidebar").removeClass("i-sidebar-active");
    });

})