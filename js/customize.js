
$(function(){

	// make progress bar appear smoothly on 'start'

	
	$('#start-btn').click(function(){
		$('#progressbar').addClass('appear').removeClass('disappear');
	});
	
	// make progress bar disappear smoothly on 'back' or 'calculate':
	
	$('#back-intro, #calculate-btn').click(function(){
		$('#progressbar').toggleClass('appear disappear');
	});


	// refresh page on 'start over' click: 

	$(".minor-cta").click(function(){
		location.reload(); 
	});

});