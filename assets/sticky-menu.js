$(document).ready(function() {
  //ss makes changes
var distance = $('.stickymenu').offset();
    $window = $(window);

$window.scroll(function() {
    var count = 0;
    if ( $window.scrollTop() >= distance && count < 1) {
        count = 1;
        $('.index-section.stickymenu').css({'position':'fixed','top':'100px','width':'100%','z-index':'999','margin':'0px'});
    } else {
        count = 0;
        $('.index-section.stickymenu').removeAttr('style');
        
    }
});
    });