var navBar= $("#navBar");

$(window).scroll(function(){
	if($(this).scrollTop()>580){
		navBar.addClass("navBar-scrolled");
	}else{
		navBar.removeClass("navBar-scrolled");
	}
});