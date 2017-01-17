$(function() {
  var $win = $(window);
  var $nav = $("nav");
  var navHeight = $nav.height();

  /*****************/
  //Stick navigation
  /*****************/
  function stickNav() {
    //If we scroll past nav or dimensions suggest we're in mobile: stick
    if ($win.scrollTop() >= $win.height() - navHeight || !NotMobile()) {
      $nav.addClass("navigation-stick");
    } else {
      $nav.removeClass("navigation-stick");
    }
  }

  $win.scroll(stickNav);
  $win.resize(stickNav);

  /*******************************/
  //Slide internal links to anchor
  /*******************************/
  $("a[href^='#']").click(function(e) {
    e.preventDefault();

    $("html, body").stop().animate({
      "scrollTop": $(this.hash).offset().top - 15
    }, 900, "swing");
  });

  /******************/
  //Hide nav on click
  /******************/
  $('.nav a').click(function() {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });
});

/**********/
//Utilities
/**********/
function CanvasSupported() {
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function ES6Supported() {
  try {
    new Function("(a = 0) => a");
    return true;
  } catch (err) {
    return false;
  }
};

function NotMobile() {
  if (window.innerWidth <= 1030 && window.innerHeight <= 1030) {
    return false;
  } else {
    return true;
  }
}
