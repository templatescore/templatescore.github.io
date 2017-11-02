$(document).ready(function(){
    $("#navbarToggle i").click(function(){
        $("#navbarLink").slideToggle(300);
        $(this).toggleClass("navbar-toggle-active");
    });
    $("#hov-navbarToggle i").click(function(){
        $("#hov-navbarLink").slideToggle(300);
        $(this).toggleClass("hov-navbar-toggle-active");
    });
});
$(document).on("click", function(event){
    var nToggle  = $("#navbarToggle");

    if(nToggle !== event.target && !nToggle.has(event.target).length){
        $("#navbarLink").slideUp();
        $("#navbarToggle i").removeClass("navbar-toggle-active");
    }               
});