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
	$('.inp').click(function() {
		$(this).prop('checked', true);
		$(this).parent().siblings().find('.inp').prop('checked', false);
				$('.chos1').css('border', '1px solid #D2D2D2');
	})
	$('#weixin').click(function() {
		$('.ewm').css('display', 'block');
		$('.payBut').css('display', 'none');
	})
	$('#weixin').parent().siblings().click(function() {
		$('.ewm').css('display', 'none');
		$('.payBut').css('display', 'block');
	})
	$('#huabei').click(function() {
		$('.chos1').css('border', '1px solid #000');
	})
	$('.meth .li4 div').click(function() {
		$('#huabei').prop('checked', true);
		$('#huabei').parent().siblings().find('.inp').prop('checked', false);
		$(this).css('border', '1px solid #000');
		$(this).siblings().css('border', '1px solid #D2D2D2')
	})
	
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})

		$('.payBut').click(function(){
			$('.wind').css('display','block');	
		})
		$('.wind').click(function(){
			$(this).css('display','none');
		})
		$('.wind').click(function(){
			location.assign('./index.html');
		})
})
