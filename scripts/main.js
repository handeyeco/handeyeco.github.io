$(function() {
  var $win = $(window);

  //Stick navigation
  $win.scroll(function() {
    if ($win.scrollTop() >= $win.height()) {
      $("nav").addClass("navigation-stick");
    } else {
      $("nav").removeClass("navigation-stick");
    }
  });

  //Slide internal links to anchor
  $("a[href^='#']").click(function(e) {
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
