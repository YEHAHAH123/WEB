
$(function(){
	$('.ul_menu>li').hover(function(){ 
		$(this).find('.second').animate({ opacity:'show', height:'show' },100);
//		$(this).find('.frista').addClass('current');
		
		} ,function() {
            $('.second').stop(true,true).hide();
//			$('.frista').removeClass('cue');
             
         }).slice(-3,-1).find('.children').addClass('sleft'); 
          
          var url=location.href;
	 		$(".ul_menu  li a").each(function(){
	 			if(url.lastIndexOf($(this).attr("href").replace
	
	("/",""))!=-1){
	 				$(this).addClass("active");	
					 
	 			}
	 		});  
  			
 }); 

 


		