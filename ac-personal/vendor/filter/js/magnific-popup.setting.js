$(document).ready(function() {
  $('.portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 400, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    },
    callbacks: {
        open: function() {
            $('html').css('margin-right', 0);
        }
    }
    
  });
});