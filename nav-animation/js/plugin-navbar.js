/*------------------------------------------------------------------
[Master Script]

Project           : Flamecore Organization
Name Project      : Plugin Navbar Animation
Version           : 1.0
Last change       : 20/08/2017 [Create Project]
Framework css	  : Core Framework http://getcore.github.io
Framework Version : 3.0 Pop Green
Framework JS      : jQuery
Framework Version : v3.2.1 min.js
Author            : Andika Chamberlin
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
[Table of contents]

1. 	hamburger-are-hard and description for all icon hamburger
  	container / .icon-hamburger

  	main / .hamburger-close
-------------------------------------------------------------------*/

$(document).ready(function(){
	$(".fmc-toggle").click(function(){
		$(".fmc-nav-link").slideToggle(200);
		$(".fmc-toggle").toggleClass("fmc-toggle-active");
	});
});