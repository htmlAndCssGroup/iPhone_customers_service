$(document).ready(function(){
    /* Scroll to the bottom */
    $('.goto_contact').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('html').height()}, 1500);
    })
})