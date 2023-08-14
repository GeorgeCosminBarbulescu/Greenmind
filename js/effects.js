$(document).ready(
	function()
	{
		//	Scrolled by user interaction
		$('#carousel').carouFredSel({
			auto: false,
			prev: '#g-prev',
			next: '#g-next',
			pagination: "#pager2",
			mousewheel: true,
			swipe: {
				onMouse: true,
				onTouch: true
			}
		});	
		// Fancybox the best
		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});
		// Nav menu - show me the arrow
		$(".menu-nav li").each(function(index, element) {
			var arrow   = $(this).find('.hover');
			var submenu = $(this).find('.sub-menu-nav');
			
			if( $(arrow).size() > 0 )
			{
				$(this).mouseenter(
					function()
					{
						$(arrow).stop(true, true).fadeIn('slow');	
						$(submenu).stop(true, true).fadeIn('slow');	
						$(this).find('.parent').addClass('activ');								
					}
				);
				
				$(this).mouseleave(
					function()
					{
						$(arrow).stop(true, true).show();	
						$(submenu).stop(true, true).show();	
						$(this).find('.parent').removeClass('activ');												
					}
				);
			}
			
		});	
		// Nav menu - show me the ABOUT ARROW
		$(".menu-nav li.about").each(function(index, element) {
			var arrow   = $(this).find('.hover');
			var submenu = $(this).find('.sub-menu-nav');
			
			if( $(arrow).size() > 0 )
			{
				$(this).mouseenter(
					function()
					{
						$(arrow).stop(true, true).fadeIn('slow');	
						$(submenu).stop(true, true).fadeIn('slow');	
						$(this).find('.parent').addClass('activ');								
					}
				);
				
				$(this).mouseleave(
					function()
					{
						$(arrow).stop(true, true).show();	
						$(submenu).stop(true, true).show();	
						$(this).find('.parent').removeClass('activ');												
					}
				);
			}
			
		});
		// Nav menu - show me the CONTACT ARROW
		$(".menu-nav li.about").each(function(index, element) {
			var arrow   = $(this).find('.hover');
			var submenu = $(this).find('.sub-menu-nav');
			
			if( $(arrow).size() > 0 )
			{
				$(this).mouseenter(
					function()
					{
						$(arrow).stop(true, true).fadeIn('slow');	
						$(submenu).stop(true, true).fadeIn('slow');	
						$(this).find('.parent').addClass('activ');								
					}
				);
				
				$(this).mouseleave(
					function()
					{
						$(arrow).stop(true, true).show();	
						$(submenu).stop(true, true).show();	
						$(this).find('.parent').removeClass('activ');												
					}
				);
			}
			
		});
	}
);