	

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
        $(this).prevAll().addClass('shrink');
		$(this).nextAll().addClass('shrink');
		$(this).addClass('expand');
	});
    // $('.accordinas-wrapper').mouseout(function () {
    //     $('.accBox').removeClass('expand');
    //     $('.accBox').removeClass('shrink');
    // });
    AOS.init({
		offset: 200, 
		duration: 1000
	});
    // animation on scroll

});


		