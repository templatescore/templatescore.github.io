"use strict";
$(window).scroll(function(){
	var scroll = $(this).scrollTop();

    // sticky
	if(scroll > $(".fmc-nav-container").offset().top - 0){
		$(".fmc-sticky-nav").addClass("fmc-nav-scroll");
	}else{
		$(".fmc-sticky-nav").removeClass("fmc-nav-scroll");
	}

    // landing show

    if(scroll > $(".fmc-scroll-show-home").offset().top - 300){
        $(".fmc-scroll-show-home").addClass("fmc-scroll-show-active");
    }else{
        $(".fmc-scroll-show-home").removeClass("fmc-scroll-show-active");
    }

    if(scroll > $(".fmc-scroll-show-about").offset().top - 300){
        $(".fmc-scroll-show-about").addClass("fmc-scroll-show-active");
    }else{
        $(".fmc-scroll-show-about").removeClass("fmc-scroll-show-active");
    }

    if(scroll > $(".fmc-scroll-show-menu").offset().top - 300){
        $(".fmc-scroll-show-menu").addClass("fmc-scroll-show-active");
    }else{
        $(".fmc-scroll-show-menu").removeClass("fmc-scroll-show-active");
    }

    if(scroll > $(".fmc-scroll-show-contact").offset().top - 300){
        $(".fmc-scroll-show-contact").addClass("fmc-scroll-show-active");
    }else{
        $(".fmc-scroll-show-contact").removeClass("fmc-scroll-show-active");
    }

    // scroll top
    if(scroll > $(".fmc-nav-container").offset().top - 0){
        $(".fmc-scroll-top").addClass("fmc-scroll-top-active");
    }else{
        $(".fmc-scroll-top").removeClass("fmc-scroll-top-active");
    }

    // home
    if(scroll > $("#home").offset().top - 5){
        $(".home").addClass("fmc-active");
    }
    else{
        $(".home").removeClass("fmc-active");
    }
    // about
    if(scroll > $("#about").offset().top - 5){
        $(".about").addClass("fmc-active");
        $(".home").removeClass("fmc-active");
    }
    else{
        $(".about").removeClass("fmc-active");
    }
    // menu
    if(scroll > $("#menu").offset().top - 5){
        $(".menu").addClass("fmc-active");
        $(".about").removeClass("fmc-active");
    }
    else{
        $(".menu").removeClass("fmc-active");
    }

    // contact
    if(scroll > $("#contact").offset().top - 5){
        $(".contact").addClass("fmc-active");
        $(".menu").removeClass("fmc-active");
    }
    else{
        $(".contact").removeClass("fmc-active");
    }

    // end
    if(scroll > $("#footer").offset().top - 300){
        $(".contact").removeClass("fmc-active");
    }
});

// scroll smooth
"use strict";
$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
    
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600, function(){
   
        window.location.hash = hash;
      
      });
    }
  });
});

// defaultOpen tab
"use strict";
$(document).ready(function(){
    document.getElementById("defaultOpen").click();
});

// tab
"use strict";
function openMenu(evt, menu) {

    var i, 
        tabcontent, 
        tablinks,
        tabcontent = $(".fmc-tabcontent"),
        tablinks = $(".fmc-tablinks");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" fmc-tab-active", "");
    }

    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " fmc-tab-active";
}
