$(document).ready(function() {
  $('.next').on('click', function() {
    console.log('clicked');
    let currentImg = $('.active');
    let nextImg = currentImg.next();

    if(nextImg.length) {
      // Remove active class and place it on the next image
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function() {
    console.log('clicked');
    let currentImg = $('.active');
    let prevImg = currentImg.prev();

    if(prevImg.length) {
      // Remove active class and place it on the next image
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});
