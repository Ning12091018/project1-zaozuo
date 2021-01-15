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
	
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})
	// **************************************回顶部************************************
	$('#sidebar  #s3').click(function(){
		scrollTo(0,0);
	})	
	

})
