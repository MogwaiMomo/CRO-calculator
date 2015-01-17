
$(function(){

	// make progress bar appear smoothly - DONE 

	$('#start-btn').click(function(){
		$('#progressbar').addClass('appear').removeClass('disappear');
	});

	$('#back-intro').click(function(){
		$('#progressbar').toggleClass('appear disappear');
	});

});