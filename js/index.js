$(function(){
		$('#btn').click(function(){
//		alert('1')

		$('#map').removeClass('map').addClass('on');
//		$('.line_box').append("<style>.line_box::after{width:100%;height:100%}</style>")
//		alert(2)
//		$('.line_box:after').css({'height':100+'%'})
		s=0;
		v=1;
		sobj=setInterval(function(){
			s+=v;
			if(s>=100){
				clearInterval(sobj);
			}
			
			$('.map_line').css({'width':s+'%'})
			$('.zuobian').css({'height':s+'%'})
			$('.youbian').css({'height':s+'%'})
	  		},10)
	})
		s=0;
		v=1;
		sobj=setInterval(function(){
			s+=v;
			if(s>=100){
				clearInterval(sobj);
			}
			$('.map_line').css({'width':s+'%'})
			$('.map_line').css({'width':s+'%'})
			$('.zuobian').css({'height':s+'%'})
			$('.youbian').css({'height':s+'%'})
	  		},10)
	$('.close_btn').click(function(){
//		alert('2')
		$('#map').removeClass('on').addClass('map');
	})
	
	
	//Banner旋转
		var iNow=0;
		timer1=0;
		timer2=0;
		var i = 1;
		
		inter();
	//				backinter();
		function inter(){
			timer1=setInterval(function(){
				iNow++;
				var m=iNow%2;
					if(m==0){
						$('#father2').css('transform','rotateX(0deg) rotateY(0deg)');
						$("#father2").css('transition','.5s');
						i++;
					}
					else{
						$('#father2').css('transform','rotateX(0deg) rotateY(90deg)');
						$("#father2").css('transition','.5s');
						i++;
					}
				console.log('iNow'+iNow);
				console.log('m'+m);
				
			},3000)
		}
		
		//banner的btn
		var b_index=0;
		bannerBtn();
		function bannerBtn(){
			setInterval(function(){
				b_index++;
				if(b_index>1){
					b_index=0;
				}
				
				$('.b_btn_box').eq(b_index).css('transform','rotate(180deg)').siblings().css('transform','rotate(0deg)')
//				console.log('b_index',b_index)
				$('.b_btn_box').eq(b_index).css('background','rgba(255,255,255,1)').siblings().css('background','rgba(255,255,255,0)')
				
				
			},3000)	
		}
		
		
	//about的动画效果
		var timer;
		
		$(document).mousewheel(function(e,d){
//		alert(d);
		clearTimeout(timer);
		timer=setTimeout(function(){
//					num=num-d;
//				if(num<0){num=0}
//				if(num>6){num=6}
//			$('.mousewheel_box').stop().animate({'top':-10*num+'%'},100);
			$('.about_main').children('.about_main_l').removeClass('about_no').parent().siblings().children('.about_main_l').addClass('about_no');
			$('.bgpic').children('.plan_box').removeClass('plan_no').parent().siblings().children('.plan_box').addClass('plan_');
			
			//$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
			},100)
		})
//	$('.about_main').children('.about_main_l').removeClass('about_no');

	
	//plan的动画效果
	//$('.bgpic').children('.plan_box').removeClass('plan_no');
	
	
	
	//tab的切换
	$('.tab_li').click(function(){
//		alert(1)
		var index=$('.tab_li').index(this);
		$(this).addClass('tab_on').siblings('.tab_li').removeClass('tab_on');
		$('.bd1_text').eq(index).css('display','block').siblings('.bd1_text').css('display','none')
	})
	
	
			
		//Product的轮播
		var iPic=0;
		slider();
		function slider(){
		
		function changePic(){
					var nowLeft=-iPic*200;
//					console.log(nowLeft);
					$('.product_ul').css('left',nowLeft);
					$('.product_ul').css('transition','0.5s');
				}
		$('.prev').click(function(){
			iPic--;
			if(iPic<0){
					iPic =$('.product_li').length-6;
						$('.product_ul').css('transition','0.5s');
					}
					console.log('向后'+iPic);
					changePic();
		})
		$('.next').click(function(){
			iPic++;
			if(iPic>$('.product_li').length-6){
					iPic =0;
						$('.product_ul').css('transition','0.5s');
					}
					console.log('向前'+iPic);
					changePic();
		})
	
	}		
	
	
	$(window).scroll(function(){
			//回到顶部的显示和隐藏
			if($(window).scrollTop()>$(window).height()){
				$('.topBtn').css('display','block');
			}else{
				$('.topBtn').css('display','none');
			}
		})
		
		//回到顶部
		$('.topBtn').click(function(){
			console.log('顶部'+1)
			$('html,body').animate({'scrollTop':'0'})
		})
	
	
	
	
})
	
 



