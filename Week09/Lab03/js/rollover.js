$(document).ready(function() {

		$('#gallery img').css('opacity', 0.6)

		$('#gallery img').hover(
		  function(){
			$(this).stop().fadeTo('slow', 1)
		  },
		  function(){
			$(this).stop().fadeTo('slow', 0.6)
		  })

})