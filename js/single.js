$(function() {

	// 导航栏滑过显示
	$('#hid1  .li3').hover(function() {
			var index = $(this).index();
			$(' .li3 .isShow').eq(index - 1).css('display', 'block');
		},
		function() {
			var index = $(this).index();
			$('.li3 .isShow').eq(index - 1).css('display', 'none');

		});


	onscroll = function() {
		// 导航栏隐藏显示
		var scrollTop = document.documentElement.scrollTop;
		//回顶部按钮隐藏显示
		// console.log(scrollTop);
		if (scrollTop < '900') {
			$('#sidebar #s3').css({
				display: 'none'
			});
			$('#sidebar .side1').css({
				height: '73px'
			});
			$('#sidebar').css({
				height: '75px'
			});
		} else if (scrollTop >= '900') {
			$('#sidebar #s3').css({
				display: 'block'
			});
			$('#sidebar .side1').css({
				height: '150px'
			});
			$('#sidebar').css({
				height: '150px'
			});

		}
	}
	for(var i = 0; i < single.length; i++){
		$(`
			<div class="singleBody">
				<img src="./img/single/${single[i].img1}.jpg" class="singleImg">
				<div class="personal">
					<p class="detail">${single[i].detail}</p>
					<div class = "pers">
						<img src="img/single/${single[i].img2}.jpg" class="perTx">
						<p>
							<span class="sp1">${single[i].sp1}</span>
							<span class="sp2">${single[i].sp2}</span>
						</p>
					
					</div>
					
				</div>
			</div>
		`).appendTo('.main');
	}
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})

})
