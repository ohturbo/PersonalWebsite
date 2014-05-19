$(document).ready(function(){
    $('#navigation').data('size','big');
});

$(document).ready(window).scroll(function(){
    var $nav = $('#navigation');
    if ($(window).scrollTop() > 0) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({opacity:'0.55',height:'2em'},
			{
 				duration:800,
				easing: 'easeOutBounce'
			});
			
			$('.nav-collapse li a').stop().animate({fontSize:'1em'},
			{
				duration:800,
				easing: 'easeOutBounce'
			});
			
			$('.nav-collapse').stop().animate({margin:'.2em auto'},
			{
				duration:800,
				easing: 'easeOutBounce'
			});
			
			$('.nav-toggle').css({'font-size':'.7em'});
			$('.nav-toggle').css({'margin-top':'.7em'});

		
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({opacity:'0.95',height:'4em'},
 			{	
				duration:800,
				easing: 'easeOutBounce'
			});
			
			$('.nav-collapse li a').stop().animate({fontSize:'1.5em'},
			{
				duration:800,
				easing: 'easeOutBounce'
			});
			
			$('.nav-collapse').stop().animate({margin:'1em auto'},
			{
				duration:800,
				easing: 'easeOutBounce'
			});
			
			$('.nav-toggle').css({'fontSize':'1.2em'});
			$('.nav-toggle').css({'margin-top':'1em'});
			
        }  
    }
});




$(document).ready(function() {
	$('#navigation > ul > li > a ').click(function() {
		$(this).fadeOut("fast").fadeIn("slow");
	});
	
	$('#socialbar').mouseover(function() {
		$(this).stop().animate({ width: '5em', opacity:'.90' },
		{
			queue:false, 
			duration:600, 
			easing: 'easeOutBounce'
		});
		
	});
	
	 $('#socialbar').mouseout(function(){
	 	$(this).stop().animate({ width: '1.5em', opacity:'.45'},
		{
	 		queue:false, 
			duration:600, 
			easing: 'easeOutBounce'
		});
 	});
	
});
