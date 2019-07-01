$(function(){
	slider();
	 	 var $this= $(".vision_ul");
	 	function slider(){
	 		var iNow=0;
			var timer;
			inter();
			 
			function inter(){	
					timer=setInterval(function(){
					iNow++;
					if(iNow>=$('.vision_li').length){
						iNow=0;
						changePic();
						$('.vision_ul').css('transition','1s');
						
					}else{
						$('.vision_ul').css('transition','1s');
						changePic();
					}										
				},3000)
			}	
			
			function changePic(){
//				console.log(111)
				var index=$('.vision_li').index(this)+1;
				if(iNow==6){
					iNow=0;
					var nowLeft=-iNow*280;
					$(this).eq(index).addClass('v_active').siblings('.vision_li').removeClass('v_active');
					$('.vision_ul').css('top',nowLeft);
					
				}else{
					var nowLeft=-iNow*280;
//					console.log(nowLeft);
					$('.vision_ul').css('top',nowLeft);
				}
					
			}
		$('.up').click(function(){
     		clearInterval(timer);
     		iNow--;
     		if(iNow<=0){
				iNow =$('.vision_li').length-2;
				$('.vision_ul').css('transition','1s');
			}
     		
			console.log('向前'+iNow);
			changePic();
			inter();
     })
		$('.down').click(function(){
   		clearInterval(timer);
     		iNow++;
     		if(iNow>$('.vision_li').length-2){
				iNow =0;
				$('.vision_ul').css('transition','1s');
			}
     		
			console.log('向前'+iNow);
			changePic();
			inter();
     		})
		
		    $('.vision_li').mouseover(function(){
		    	$(this).addClass('v_active');
		    	clearInterval(timer);
		    })
		    $('.vision_li').mouseout(function(){
		    	$(this).removeClass('v_active');
		    	inter();
		    })  
	 	
	 	

}
})	 

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





