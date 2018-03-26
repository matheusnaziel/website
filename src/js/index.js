$(document).ready(function(){
	var menu = $('nav'),
		distanceAboutTop = $('.section-about-wrapper').offset().top;

	// função menu
	$('#showTop').click(function(){
		$(menu).toggleClass('cbp-spmenu-open');
	});

	// link home
	$('.home').click(function(event){
		event.preventDefault();

		$('html, body').animate({
        	scrollTop: $(".section-main-wrapper").offset().top
    	}, 500);
	});

	// link about
	$('.about').click(function(event){
		event.preventDefault();

		$('html, body').animate({
        	scrollTop: $(".section-about-wrapper").offset().top
    	}, 2000);
	});
	
	// link contact
	$('.contact').click(function(event){
		event.preventDefault();

		$('html, body').animate({
        	scrollTop: $(".section-contact-wrapper").offset().top
    	}, 2000);
	});

	// menu fixed
	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 150) {
             $('.header-bar').addClass('fixed');
         }
         else {
             num = $('.menuFlotante').offset().top;
             $('.header-bar').removeClass('fixed');
         }
    });

});


// $(document).ready(function(){
// 	$('.about').click( function() {
// 		console.log('fui clicado')
// 		$('html,body').animate( {scrollTop:834}, 1000);
// 	});
// });



	//função scroll 
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() >= distanceAboutTop) {
			
	// 	}
	// 	// console.log($(this).scrollTop(), distanceAboutTop)
		
	// });
