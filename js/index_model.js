$(function(){
	$.each(plan_ul, function(index,data) {
		var str=`<li class="plan_li">
				<a href="html/Scheme.html">
					<i class="p_pic"><img src="${data.src}"/></i>
					<div class="plan_pic">
						<img src="${data.pic1}" class="plan_img" />
					</div>
					<h2 class="plan_li_h2">${data.plan_li_h2}</h2>
					<h3>${data.plan_li_h3}</h3>
					<a href="#" class="more l more_2" id="plan_more">
					<span>${data.more}</span>
					<div class="more_i plan_more_i">
						<img src="${data.pic2}" class="before_row" />
						<img src="${data.pic3}" class="after_row" />
					</div>
					</a>
				</a>
			</li>`
			$('.plan_ul').append(str);
		
	});
	
	
	$.each(product_ul,function(index,data){
		var str=`<li class="product_li">
					<a href="html/Product.html" class="pro_li_a" title="${data.title}">
						<div class="pro_text">
							<h2>${data.num}</h2>
							<h3>${data.name}</h3>
						</div>
						<div class="pro_texthover">
							<h4>
                			${data.content}
							</h4>
						</div>	
					</a>
				</li>`
		$('.product_ul').append(str);	
	})
	
	//NEWS
//	$.each(news_b,function(index,data){
//		var str=`<li>
//					<div class="newsimgbox">
//						<img src="${data.src}" />
//					</div>
//					<a href="#" class="box_a">
//						<h4>${data.dd}</h4>
//						<h2>${data.question}</h2>
//						<p>${data.answer}</p>
//					</a>
//				</li>`
//				$('.news_b').append(str);
//	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})























