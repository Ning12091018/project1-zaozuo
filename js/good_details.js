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
	// 滚动事件
	onscroll = function() {
		var scrollTop = document.documentElement.scrollTop;
		//导航栏隐藏显示
		if (scrollTop < ' 400') {
			$('.header').css('display', 'none');
			$('.hidNav').css('display', 'block');
		} else if (scrollTop >= '400') {
			$('.header').css('display', 'block');
			$('.hidNav').css('display', 'none');
			$('.header').css('position', 'fixed');
			$('.header').css('top', '0');
			$('.header').css('z-index', '200');

		}
		//回顶部按钮隐藏显示
		console.log(scrollTop);
		if (scrollTop < '900') {
			$('#sidebar #s4').css({
				display: 'none'
			});
			$('#sidebar').css({
				height: '245px'
			});
		} else if (scrollTop >= '900') {
			$('#sidebar #s4').css({
				display: 'block'
			});
			$('#sidebar').css({
				height: '325px'
			});

		}

		//隐藏导航栏定位改变字体颜色
		var top1 = $('#id1').offset().top;
		var top2 = $('#id2').offset().top;
		var top3 = $('#id3').offset().top;
		var top4 = $('#id4').offset().top;
		if (scrollTop >= top1 && scrollTop < top2) {
			$('.headerUl .li1 a').css('color', '#fff');
			$('.headerUl .li1').siblings().find('a').css('color', '#D2D2D2');
		} else if (scrollTop >= top2 && scrollTop < top3) {
			$('.headerUl .li2 a').css('color', '#fff');
			$('.headerUl .li2').siblings().find('a').css('color', '#D2D2D2');
		} else if (scrollTop >= top3 && scrollTop < top4) {
			$('.headerUl .li3 a').css('color', '#fff');
			$('.headerUl .li3 ').siblings().find('a').css('color', '#D2D2D2');
		} else if (scrollTop >= top4) {
			$('.headerUl .li4 a').css('color', '#fff');
			$('.headerUl .li4 ').siblings().find('a').css('color', '#D2D2D2');
		}
	};

	//选择商品颜色
	$('.chose1').click(function() {
		$(this).css('border', '2px solid #313131');
		$('.showImg .img1').css('display', 'block');
		$('.showImg .img2').css('display', 'none');
		$('.chose2').css('border', '1px solid #D2D2D2');
	})
	$('.chose2').click(function() {
		$(this).css('border', '2px solid #313131');
		$('.showImg .img2').css('display', 'block');
		$('.showImg .img1').css('display', 'none');
		$('.chose1').css('border', '1px solid #D2D2D2');
	});

	//商品数量价格，加入购物车
	var count = $('.countVal').val();
	// console.log(count);
	var total = 0;

	$('.countRe').click(function() { //商品数量减操作
		// console.log('----');
		count--;
		if (count <= 1) {
			count = 1;
		}
		$('.countVal').val(count);
		$('.total').html(count * 199);
	});

	$('.countAdd').click(function() { //商品数量加操作
		// console.log('+++');
		count++;
		$('.countVal').val(count);
		$('.total').html(count * 199);
	});
	$('.addGwc').click(function() {
		// console.log(111);
		var i = $('.num').html();
		// console.log(i)
		$('.num').html(Number(i) + Number(count));
	});
	
	$('.gwc .topAddGwc').click(function() {
		// console.log(111);
		var i = $('.num').html();
		// console.log(i)
		$('.num').html(Number(i) + Number(count));
	});
	$('.cal .buy').click(function(){
		location.assign('./cart.html');
	})

	//查看密胺表面瑕疵说明 下拉  收起
	var flag1 = true;
	$('.det7 button').click(function(){
	
		if(flag1){
			flag1 = false;
			$('.det71').css('display','block');
			$('.det7 button span').css({
				transform : 'rotate(-180deg)',
			})
		}else{
			flag1 = true;
			$('.det71').css('display','none');
			$('.det7 button span').css({
				transform : 'rotate(0deg)',
			})
		}
	
	})
	$('.det7 button').hover(function(){
		$('.det7 button').css({
			background : '#000',
			color:'#fff',
		});
		
	},function(){
		if(flag1){
			$('.det7 button').css({
				background : '#fff',
				color:'#000',
			});
		}
		
	})
	
	$('.det71 button').click(function() {
		$('.det71').css('display', 'none');
		$('.det7 button span').css({
			transform: 'rotate(0deg)',
		})
		$('.det7 button').css({
				background : '#fff',
				color:'#000',
			});
	})

	$('#s4').click(function() {
		scrollTo(0, 0);
	})
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})

})
