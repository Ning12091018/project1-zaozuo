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
			$('#sidebar #s3').css({display:'none'});
			$('#sidebar .side1').css({height:'73px'});
			$('#sidebar').css({height:'75px'});
		} else if (scrollTop >= '900') {
			$('#sidebar #s3').css({display:'block'});
			$('#sidebar .side1').css({height:'150px'});
			$('#sidebar').css({height:'150px'});
			
		}
	}
	
	$('.address .ad .add1').click(function(){
		$(this).css('border','3px solid #313131');
		$(this).siblings().css('border', '1px solid #A0A0A0' );
		$('.addTj').css('border', '1px dashed #A0A0A0' )
	})
	// $('.address .add1 .del').click(function(){
		
	// })
		
	
	// ************************购物清单**************************
	for(var i = 0; i < order.length; i++){
		$(`
		<div class="cartListBody">
			<div class="cartListInfo">
				<div>
					<img src="img/${order[i].img}.jpg">
				</div>
				<div class="cartListInfoP">
					<p class="p1">${order[i].text1}<span>${order[i].sp}</span></p>
					<p class="p2">${order[i].text2}</p>
				</div>
			</div>
			<div class="fh">预计<span>${order[i].fh}</span>前发货</div>
			<div class="price">￥${order[i].total}</div>
			<div class="count">X1</div>
		</div>
		`).appendTo('.list');
		}
		
		$(window).scroll(function(){
			if($(document).scrollTop() <$('.footer').offset().top - $(window).height() ){
				$('.cartListTitle').css({
					position:'fixed',
					bottom :0,	
				})	
			}
			if($(document).scrollTop() >= $('.footer').offset().top - $(window).height() +70){
				$('.cartListTitle').css({
					position:'relative',
				})	
			}
		})
		
		$('.addTj').click(function(){
			$('.addrPop').css('display','block');
		})
		
		
		
		//.checked 
		$('.xd').click(function(){
			if($('.inp')[0].checked){
				location.assign('./pay.html');
			}else if(!$('.inp')[0].checked){
				$('.pop2').css('display','block');
			}
		})

		$('.pop2').click(function(){
			$(this).css('display','none');
		})
		
		$('#hid1 li').click(function(){
			location.assign('./list.html');
		})
		$('.hidNav .logo').click(function(){
			location.assign('./index.html');
		})
	// **************************************侧栏回顶部************************************************
		$('#sidebar  #s3').click(function(){
			scrollTo(0,0);
		})	
		var add = [];
		var addObj = {};
		$('.sub').click(function(){
			// 获取select选中的文本内容
			var prov = $('.prov option:selected').text();
			var city = $('.city option:selected').text();
			var country = $('.country option:selected').text();
			// console.log(prov);
			// console.log(city);
			// console.log(country);
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
			for(var i = add.length-1; i<add.length;i++){
				$(`
					<div class="add1">
						<span class="name">${add[i].name}</span>
						<span class='ph'>${add[i].phone}</span>
						<p >${add[i].prov} ${add[i].city} ${add[i].country}</p>
						<p >${add[i].addr}</p>
						<div class="icon">
							<p class="p2">
								<span class="iconfont del">&#xe639;</span>
							</p>
						</div>
					</div>
				`).insertBefore('.addTj');
				$('.del').click(function(){
					$(this).parent().parent().parent().remove();
				})
			}
			
			$('.addrPop').css('display','none');
		})
		$('.del').click(function(){
			$(this).parent().parent().parent().remove();
			})
		$('.close').click(function(){
			$('.addrPop').css('display','none');
		})
		
	
})
