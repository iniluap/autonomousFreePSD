$( document ).ready(function() {

	$('.controls').on('click', function(){
		$('.gallery').toggleClass('hidden', 1000);
	});

	function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $('#top').offset().top},
        1500);
	}

	$('.go-up').on('click', function() {
		goToByScroll('#top')
	});
})
