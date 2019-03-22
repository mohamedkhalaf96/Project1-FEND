

$(function() {
   
    'use strict';
    
    var winH = $(window).height(),
        NavH = $('.navbar').innerHeight();
    
    $('#home').height(winH - NavH);
    
    
});

    
