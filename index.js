$(document).ready(function(){
	$('.slideDiv').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		fade: true,
		infinite: true,
		
		nextArrow: $(".nextArrow"),
		prevArrow: $(".prevArrow"),
	});
});







/*
	var $slideDiv = $(".slideDiv");
	var $slickSlide = $(".slick-slide");
	var $slideImg = $(".slideImg");
	var $surround = $(".surround");
	var $header = $("header");
	
	function resizeSlick() {
		$slideDiv.width($header.width());
		$slideImg.width($header.width());
		$surround.height($slideImg.height());
	}
	
	$(window).resize(resizeSlick);
	resizeSlick();
	
});
*/