$(function() {
  var $win = $(window);
  var navHeight = document.getElementById('nav-wrapper').scrollHeight;

  //Stick navigation
  $win.scroll(function() {
    if ($win.scrollTop() >= $win.height() - navHeight || !NotMobile()) {
      $("nav").addClass("navigation-stick");
    } else {
      $("nav").removeClass("navigation-stick");
    }
  });

  //Slide internal links to anchor
  $("a[href^='#']").click(function(e) {
    e.preventDefault();

    $("html, body").stop().animate({
      "scrollTop": $(this.hash).offset().top - 20
    }, 900, "swing");
  });

  //Hide nav on click
  $('.nav a').click(function() {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });
});

function CanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function ES6Supported(){
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
};

function NotMobile(){
  if(window.innerWidth <= 1000 && window.innerHeight <= 1000) {
     return false;
   } else {
     return true;
   }
}
