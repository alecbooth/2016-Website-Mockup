$(document).ready(function(){
	$('.slideDiv').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	});

	var $slideDiv = $(".slideDiv");
	var $slickSlide = $(".slick-slide");
	var $slideImg = $(".slideImg");
	var $surround = $(".surround");
	var $header = $("header");
	
	$(window).resize(function() {
		$slideDiv.width($header.width());
		$slideImg.width($header.width());
		$surround.width($slideImg.width());
		$surround.height($slideImg.height());
	});
});