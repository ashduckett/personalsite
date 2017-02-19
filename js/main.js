$(document).ready(function () {
	$('.mnu-btn').click(function () {
    	$('.nav-menu li').not('.mnu-btn').toggleClass('mobile-view hidden-mobile-view');
   	});
});