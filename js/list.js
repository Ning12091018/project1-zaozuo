$(function() {

	onscroll = function() {
		var scrollTop = document.documentElement.scrollTop;
		//回顶部按钮隐藏显示
		// console.log(scrollTop);
		if (scrollTop < '900') {
			$('#sidebar #s3').css({display:'none'});
			$('#sidebar').css({height:'169px'});
		} else if (scrollTop >= '900') {
			$('#sidebar #s3').css({display:'block'});
			$('#sidebar').css({height:'250px'});
			
		}
	};
	// 导航栏滑过显示
	$('#hid1  .li3').hover(function() {
			var index = $(this).index();
			$(' .li3 .isShow').eq(index - 1).css('display', 'block');
			if (index != 8) {
				$('.li3 .isShow').eq(7).css('display', 'none');
			}
		},
		function() {
			var index = $(this).index();
			$('.li3 .isShow').eq(index - 1).css('display', 'none');
			$('.li3 .isShow').eq(7).css('display', 'block');

		});
	
	$('#showUl li').click(function(){
		$('.main .type1').eq($(this).index()).css('display', 'block');
		$('.main .type1').eq($(this).index()).siblings().css('display', 'none');

	});
	for (var i = 0; i < list.length; i++) {
		// console.log(i);
		$(
			`<div class="listPer">
				<a ><img src="./img/list/${list[i].img}.jpg" class = 'img01'></a>
				<h3 class = 'oH3'><a href="">${list[i].text}<span>${list[i].sp}</span></a></h3>
				<div class="conJg"><span class="pri1">${list[i].pri1}</span><span class= 'pri2'>${list[i].pri2}</span></div>
				<ul class = 'oUl'>
					 <li class = 'sp1'>${list[i].sp1}</li>
					 <li class = 'sp2'>${list[i].sp2}</li>
				</ul>
			</div>
			`).appendTo($('#al'));
		if(list[i].type == 1){
			$(
				`<div class="listPer">
					<a href = ""><img src="./img/list/${list[i].img}.jpg" class = 'img01'></a>
					<h3 class = 'oH3'><a href="">${list[i].text}<span>${list[i].sp}</span></a></h3>
					<div class="conJg"><span class="pri1">${list[i].pri1}</span><span class= 'pri2'>${list[i].pri2}</span></div>
					<ul class = 'oUl'>
						 <li class = 'sp1'>${list[i].sp1}</li>
						 <li class = 'sp2'>${list[i].sp2}</li>
					</ul>
				</div>
				`).appendTo($('#qj'));
		}
		if(list[i].type == 2){
			$(
				`<div class="listPer">
					<a href = ""><img src="./img/list/${list[i].img}.jpg" class = 'img01'></a>
					<h3 class = 'oH3'><a href="">${list[i].text}<span>${list[i].sp}</span></a></h3>
					<div class="conJg"><span class="pri1">${list[i].pri1}</span><span class= 'pri2'>${list[i].pri2}</span></div>
					<ul class = 'oUl'>
						 <li class = 'sp1'>${list[i].sp1}</li>
						 <li class = 'sp2'>${list[i].sp2}</li>
					</ul>
				</div>
				`).appendTo($('#hp'));
		}
		if(list[i].type == 3){
			$(
				`<div class="listPer">
					<a href = ""><img src="./img/list/${list[i].img}.jpg" class = 'img01'></a>
					<h3 class = 'oH3'><a href="">${list[i].text}<span>${list[i].sp}</span></a></h3>
					<div class="conJg"><span class="pri1">${list[i].pri1}</span><span class= 'pri2'>${list[i].pri2}</span></div>
					<ul class = 'oUl'>
						 <li class = 'sp1'>${list[i].sp1}</li>
						 <li class = 'sp2'>${list[i].sp2}</li>
					</ul>
				</div>
				`).appendTo($('#bj'));
		}
		if(list[i].type == 4){
			$(
				`<div class="listPer">
					<a href = ""><img src="./img/list/${list[i].img}.jpg" class = 'img01'></a>
					<h3 class = 'oH3'><a href="">${list[i].text}<span>${list[i].sp}</span></a></h3>
					<div class="conJg"><span class="pri1">${list[i].pri1}</span><span class= 'pri2'>${list[i].pri2}</span></div>
					<ul class = 'oUl'>
						 <li class = 'sp1'>${list[i].sp1}</li>
						 <li class = 'sp2'>${list[i].sp2}</li>
					</ul>
				</div>
				`).appendTo($('#sn'));
		}
		if(list[i].type == 5){
			$(
				`<div class="listPer">
					<img src="./img/list/${list[i].img}.jpg" class = 'img01'>
					<h3 class = 'oH3'><a href="">${list[i].text}<span>${list[i].sp}</span></a></h3>
					<div class="conJg"><span class="pri1">${list[i].pri1}</span><span class= 'pri2'>${list[i].pri2}</span></div>
					<ul class = 'oUl'>
						 <li class = 'sp1'>${list[i].sp1}</li>
						 <li class = 'sp2'>${list[i].sp2}</li>
					</ul>
				</div>
				`).appendTo($('#zsh'));
		}
	}
	console.log($('#al .listPer')[0]);
	// $('#al .listPer')[0].click(function(){
	// 	location.assign('./good_details.html');
	// })
	$('#al .listPer')[0].onclick = function(){
		location.assign('./good_details.html');
	}
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})
	
	$('.listPer img').click(function(){
		console.log(11111);
		location.assign('./good_details.html');
	})
	
	
	// **************************************侧栏回顶部************************************************
		$('#sidebar  #s3').click(function(){
			scrollTo(0,0);
		})
})
