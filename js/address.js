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
	
	$('.addr button').click(function(){
		$('.addrPop').css('display','block');
	})
	
	$('#personal').click(function(){
		location.assign('./personal.html');
	})
	
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})
	// *********************************回顶部****************************************
	$('#sidebar  #s3').click(function(){
		scrollTo(0,0);
	})	
	
	
	
	// **********************收货地址********************************
	var add = [];
	var addObj = {};

	$('.sub').click(function(){
		// 获取select选中的文本内容
		var prov = $('.prov option:selected').text();
		var city = $('.city option:selected').text();
		var country = $('.country option:selected').text();
		var addr = $('#inp1').val();
		var name = $('#inp2').val();
		var phone= $('#inp3').val();
		addObj = {
			prov,
			city,
			country,
			addr,
			name,
			phone,
		}
		add.push(addObj);//把对象内容添加到数组里
		for(var i = 0; i<add.length;i++){
			$(`
				<div class="perAddr">
					<span>${i+2}.</span>
					<span>${add[i].prov}</span>
					<span>${add[i].city}</span>
					<span>${add[i].country}</span>
					<span>${add[i].addr}/</span>
					<span>收货人：${add[i].name}/</span>
					<span>${add[i].phone}</span>
				</div>
			`).appendTo('.addAddress');
		}
		
		$('.addrPop').css('display','none');
	})
	
	$('.close').click(function(){
		$('.addrPop').css('display','none');
	})
	

})
