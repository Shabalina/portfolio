$(document).ready(function(){

	//console.log ('hello!!');

	var slideCount = $('.slider__left ul li').length;
	console.log(slideCount)
	
	var slideWidth = $('.slider__left ul li').width();
	var slideHeight = $('.slider__left ul li').height();
	var sliderUlHeight = slideCount * slideHeight;

	var slidePicWidth = $('.my_works__right_up ul li').width();
	var slidePicUlWidth = slideCount * slidePicWidth;
	var slideInfoWidth = $('.my_works__left ul li').width();
	var slideInfoUlWidth = slideCount * slideInfoWidth;

	$('.slider__left', '.slider__right').css({ width: slideWidth, height: slideHeight });
//	$('.my_works__right_up').css({ width: slidePicUlWidth});
//	$('.my_works__left').css({ width: slideInfoUlWidth});
//	$('slider__left ul').css({ height: sliderUlHeight, marginTop: - slideHeight });
//	$('slider__right ul').css({ height: sliderUlHeight, marginTop: + slideHeight });

	$('.slider__left ul li:first-child').appendTo('.slider__left ul');
//	$('.slider__right ul li:first-child').appendTo('.slider__right ul');

	function moveDown() {
        $('.slider__left ul').animate({
            top: sliderUlHeight - slideHeight
        }, 400, function () {
            $('.slider__left ul li:first-child').appendTo('.slider__left ul');
            $('.slider__left ul').css('top', sliderUlHeight- 2*slideHeight);
        });
	};

	function moveUp() {
        $('.slider__right ul').animate({
            top: - 2*slideHeight
        }, 400, function () {
            $('.slider__right ul li:first-child').appendTo('.slider__right ul');
            $('.slider__right ul').css('top', -slideHeight);
        });
	};

	function moveLeft() {
        $('.my_works__right_up ul').animate({
            left: + slidePicWidth
        }, 400, function () {
            $('.my_works__right_up ul li:first-child').appendTo('.my_works__right_up ul');
            $('.my_works__right_up ul').css('left', '');
        });
	};

	function moveRight() {
        $('.my_works__left ul').animate({
            left: - slideInfoWidth
        }, 400, function () {
            $('.my_works__left ul li:first-child').appendTo('.my_works__left ul');
            $('.my_works__left ul').css('left', '');
        });
	};
	
	$('.slider__arrow').click(function () {
		moveDown();
		moveUp();
		moveLeft();
		moveRight();
	});
	
})