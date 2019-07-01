$(function(){
	
	$.each(portlist,function(index,data){
		var str=`<li class="port_li">
				<i></i>
				<div class="anli_img">
					<a href="#">
						<img  src="${data.src}"/>
					</a>
				</div>
				<div class="anli_text">
					<div class="anli_con">
						<a href="#" class="aaa">
							<h2>${data.name}</h2>	
						</a>
						<p class="text_p">
							${data.neirong}
						</p>
						<a href="#" class= "anli_more more l">
							${data.more}
							<div class="more_i">
								<img src="${data.row1}" class="before_row" />
								<img src="${data.row2}" class="after_row" />
							</div>
						</a>
					</div>
				</div>
			</li>`
			$('.portlist').append(str);
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

























