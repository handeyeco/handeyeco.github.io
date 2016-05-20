$(document).ready(function() {
	var $win = $(window);

	//Stick navigation
	$win.scroll(function() {
		if ($win.scrollTop() >= $win.height()) {
			$("nav").addClass("navigation-stick");
		} else {
			$("nav").removeClass("navigation-stick"); 
		}
	});

	//Slide nav links to anchor
	$("nav a[href^='#']").click(function (e) {
    e.preventDefault();

    $("html, body").stop().animate({
      "scrollTop": $(this.hash).offset().top
    }, 900, "swing", function () {
      window.location.hash = this.hash;
    });
	});

	//Show job details to mobile
	//Needs to be adjusted so accordian only works for mobile
	/*$(".job-listing").click(function () {
		if ($(this).hasClass("active")) {
			$(this).find(".hide-mobile").slideToggle(500);
			$(this).removeClass("active");
		} else {
			$(".job-listing").removeClass("active");
			$(".job-listing .hide-mobile").slideUp(500);
			$(this).find(".hide-mobile").slideToggle(500);
			$(this).addClass("active");
		}
	});*/


});