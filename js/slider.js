$(document).ready(function(){
    $('.slider').slider({full_width: true, indicators: false, height: 598});
});

function forward(){
	$('.slider').slider('next');
}

function back(){
	$('.slider').slider('prev');
}

function forwardHover(){
	document.getElementById("arrowForward").src="img/forward hover.png";
}

function forwardOut(){
	document.getElementById("arrowForward").src="img/forward.png";
}

function backHover(){
	document.getElementById("arrowBack").src="img/back hover.png";
}

function backOut(){
	document.getElementById("arrowBack").src="img/back.png";
}

function scrollWork(){
	 $('html,body').animate({
        scrollTop: 600},
        'slow');
}