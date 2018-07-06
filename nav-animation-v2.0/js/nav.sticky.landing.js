/*------------------------------------------------------------------

[Master Script]

Code Name     : Navbar Animation
Version       : 2.0
Framework     : iCore For Developer // github.com/geticore/geticore.github.io
Author        : Andika Chamberlin // andikachamberlin.github.io

-------------------------------------------------------------------*/

"use strict";
$(function(){

    var toggle    = $('.i-toggle'),
        nav_items = $('.i-nav-items');

    $(toggle).click(function(){
        $(nav_items).slideToggle(300);
    });

});

$(window).scroll(function(){

    var scroll = $(this).scrollTop(),
        stuck  = $("#iNavSticky"),
        sticky = $("#iNav");

    if(scroll > $(stuck).offset().top - 0){
        $(sticky).addClass("i-sticky-active");
    }else{
        $(sticky).removeClass("i-sticky-active");
    }
});
