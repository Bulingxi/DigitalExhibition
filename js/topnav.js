$(function(){

	$('.nav_li').click(function(){
		var li_index=$(this).index();
		console.log(li_index)
		$('.nav_li').eq(li_index).addClass('active_on').siblings('.nav_li').removeClass('active_no');
	})
})





























