$(function(){
	$.each(product_list,function(index,data){
		var str=`<li class="product_item">
					<a href="#" title="${data.title}">
						<div class="pro_img">
							<img src="${data.src}" />
							<h2>
								<p>${data.txt}</p>
								<span>
									
									<img src="../img/r_row.png" />
									<em>MORE</em>
								</span>
							</h2>
							<h3>${data.con}</h3>
						</div>
					</a>
				</li>`
		$('.product_list').append(str);
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})




















