$(document).ready(function () {

    /*home page effects */
    $('#headerText2').delay(2500).show(100);
    $('.arrow').delay(2500).show(100);

    $('.spider').delay(2500).fadeIn(3000);
    $('#headerText').fadeIn(3000);


    /*buttons on home page */
    $('.toggle-button').on('click', function() {
        $(this).next('.toggle-content').fadeToggle();  
    });


    /*Showcase images hover */
    $('.showcaseIMG').on('mouseenter', function () {
        $(this).next('.description').fadeIn(300);
    });

    $('.showcaseIMG').on('mouseleave', function () {
        $(this).next('.description').fadeOut(300);
    });


    /*Schedule buttons */
    $('.event-header').on('click', function() {
        $(this).next('.event-details').slideToggle();  
    });



    /*Chat gpt did this - When you scroll down 50 pixels, the navbar gets the class of scrolled which gives it a transparent black background- easier to read. Really cool and simple use of jquery!
    */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {  // Change 50 to the number of pixels you want
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });



});