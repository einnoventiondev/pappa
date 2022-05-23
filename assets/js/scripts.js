$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
            $('.nav').addClass('affix');
        } else {
            $('.nav').removeClass('affix');
        }
    });
    // navbar sticky end

	$('.nav__toggler').click(function () {
		$(this).toggleClass('active');
		$('.nav-list').slideToggle();
	});
    $('.accBox').hover(function () {
		$(this).prevAll().removeClass('expand');
		$(this).nextAll().removeClass('expand');
        $(this).prevAll().toggleClass('shrink');
		$(this).nextAll().toggleClass('shrink');
		$(this).toggleClass('expand');
        $(this).find('.accBox-h2').toggleClass('accBoxToggle');
        $(this).find('.accBox-h').toggleClass('accBoxhToggle');
	});
    // $('.accordinas-wrapper').mouseout(function () {
    //     $('.accBox').removeClass('expand');
    //     $('.accBox').removeClass('shrink');
    //     $('.accBox').removeClass('shrink');
    // });
    AOS.init({
		offset: 200, 
		duration: 1000
	});
    // animation on scroll

});


		