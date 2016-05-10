$(document).ready(function() {
	//Stick nav bar
	var navBar = $("#navigation"),
		 navClass = "navigation-stick",
		 pos = navBar.position();      

	$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos >= pos.top) {
    			navBar.addClass(navClass);
			} else {
    			navBar.removeClass(navClass); 
			}
	});
	//End stick nav bar
});