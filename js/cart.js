$(function(){
	// 导航栏滑过显示
	$('#hid1  .li3').hover(function() {
			var index = $(this).index();
			$(' .li3 .isShow').eq(index - 1).css('display', 'block');
		},
		function() {
			var index = $(this).index();
			$('.li3 .isShow').eq(index - 1).css('display', 'none');
	
		});
	
	// ************************购物车数据**************************
	for(var i = 0; i < cart.length; i++){
		$(`
		<div class="cartListBody">
			<div>
				<input type="checkbox" name="" id="" value="" class="inp"/>
			</div>
		
			<div class="cartListInfo">
				<div>
					<img src="img/${cart[i].img}.jpg">
				</div>
				<div class="cartListInfoP">
					<p class="p1">${cart[i].text1}<span>${cart[i].sp}</span></p>
					<p class="p2">${cart[i].text2}</p>
				</div>
			</div>
			<div class="fh">预计<span>${cart[i].fh}</span>前发货</div>
			<div class="price">￥${cart[i].total}</div>
			<div class="count">
				<div class="countWid">
					<button type="button" class="countRe">-</button>
					<input type="" name="" id="" class = 'countVal' value="${cart[i].count}" />
					<button type="button" class="countAdd">+</button>
				</div>
			</div>
			<div class="perDel">
				<span class="del">删除</span>
			</div>
		</div>
		`).appendTo('.cartList');
	}
	
	$(window).scroll(function(){
		if($(document).scrollTop() >= $('.footer').offset().top - $(window).height() ){
			$('.cartListTitle').css({
				position:'absolute',	
			})
		}else{
			$('.cartListTitle').css({
				position:'fixed',
				bottom :0,
			})
		}
	})
	
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
	
	//****************************** 购物车功能****************

	var goodsSelect = [];//空的数组存放购物车内的数据
	var count = 0;//商品个数
	//inp  每个商品前复选框的class， 添加点击事件
	$('.inp').click(function(){
		var index = $('.inp').index(this);//获取当前元素的下标
		
		//js改变checkbox的值
			// $('#cartListAllSel')[0].checked = true；
		if(this.checked){
			count++;//个数加1
			goodsSelect.push(cart[index]);//在最后插入下标为index的商品数据
		}else{
			count--;//如果从选中到取消，count减一
			var i = goodsSelect.indexOf(cart[index]);//查找当前元素在数组的下标
		    goodsSelect.splice(i,1);//删除下标为i的元素
		}
		//如果count与长度相等，表明全选，将全选前的框选定
		if(count == cart.length){
			$('#cartListAllSel')[0].checked = true;
		}else{
			$('#cartListAllSel')[0].checked = false;
		}
		totalPrice();
		});
		// 改变总价结算的方法
		// console.log();
		// totalPrice();
		//全选框的点击事件，全选购物车内容
		$('#cartListAllSel').click(function(){
			count = cart.length;
			// console.log(this.checked);
			if(this.checked){//如果复选框值为true 则全选
				$('.inp').prop('checked', true);
				//concat 是连接两个数组，没有参数代表返回一个新数组
				goodsSelect = cart.concat();
				// console.log(goodsSelect);
			}else{
				count = 0;
				$('.inp').prop('checked', false);
				goodsSelect = [];
			}
			totalPrice();
			});
		
		//-的点击事件
		$('.countRe').click(function(){
			var index = $('.countRe').index(this);//得到下标
			// console.log(cart[index].count);
			cart[index].count--;//将数量减一
			if(cart[index].count <= 1){//如果数量小于1,则不再减少
				cart[index].count = 1;
			}
			//获取input框的值
			$('.countVal').eq(index).val(cart[index].count);
			onePrice(index);
			totalPrice();
		})
		
		//+ 的点击事件
		$('.countAdd').click(function(){
			var index = $('.countAdd').index(this);
			cart[index].count++;
			$('.countVal').eq(index).val(cart[index].count);
			onePrice(index);
			totalPrice();
		});
		
		//删除键
		$('.perDel').click(function(){
			var index = $('.perDel').index(this);
			$('.cartListBody')[index].remove();
			var i = goodsSelect.indexOf(cart[index]);
			goodsSelect.splice(i,1);
			cart.splice(index,1);
			totalPrice();
		});
		//算出总价和数量
		// 先计算单个商品的价格
		function onePrice(index){
			cart[index].total = cart[index].count * cart[index].pri;
			$('.price').eq(index).html('￥'+ cart[index].total);
			
		}
		function totalPrice(){
			var total = 0;
			var tt = 0;
			for(var i= 0;i<goodsSelect.length; i++){
				total += goodsSelect[i].total;
				tt += goodsSelect[i].count;
				
			}
			$('.cartTotalP').html(total);
			// console.log(total);
			$('#num').html(tt);
			// console.log(count);
		}
		$('.xd').click(function(){
			location.assign('./order.html');
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

})