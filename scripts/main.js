$(function() {
  var $win = $(window);

  //Fade in splash image
  var splashImage = new Image();
  splashImage.src = "http://matthewbryancurtis.com/images/header-wood-min.jpg";
  $(splashImage).load(function() {
    $('.splashBackground').fadeIn('fast');
  });

  //Stick navigation
  $win.scroll(function() {
    if ($win.scrollTop() >= $win.height()) {
      $("nav").addClass("navigation-stick");
    } else {
      $("nav").removeClass("navigation-stick");
    }
  });

  //Slide nav links to anchor
  $("nav a[href^='#']").click(function(e) {
    e.preventDefault();

    $("html, body").stop().animate({
      "scrollTop": $(this.hash).offset().top
    }, 900, "swing");
  });

  //Hide nav on click
  $('.nav a').click(function() {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });
});
