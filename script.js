$(document).ready(function() {

  // Shows the trunk's description on hover
  $('.showcaseIMG').on('mouseenter', function () {
    $(this).next('.description').fadeIn(300);
});

$('.showcaseIMG').on('mouseleave', function () {
    $(this).next('.description').fadeOut(300);
});



  //timeline functionality on schedule page
  $('.event-header').on('click', function() {
    $(this).next('.event-details').slideToggle();  
});



  //jquery for the flyer info
  $('#popup').css('display', 'none'); // Ensure the popup is hidden on page load
  $('#moreBtn').on('click', function() {
      $('#popup').show();
  });
  $('#closeButton').on('click', function() {
      $('#popup').hide();
  });
  
  })