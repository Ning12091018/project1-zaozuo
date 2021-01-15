function elementsByClassName(nodes, classStr) {
	var oDivAll = nodes.getElementsByTagName('*');
	var res = [];
	for (var i = 0; i < oDivAll.length; i++) {
		if (oDivAll[i].className == classStr) {
			// console.log(oDivAll[i]);
			res.push(oDivAll[i]);
		}
	}
	return res;
};
$(function() {
	// ******************************导航栏隐藏********************************************
	$('#navUl  .li2').hover(function() {
			var index = $(this).index();
			$('.li2 .isShow').eq(index - 1).css('display', 'block');
		},
		function() {
			var index = $(this).index();
			$('.li2 .isShow').eq(index - 1).css('display', 'none');
		})
	// ******************************导航栏隐藏的下拉列表********************************************
	$('#hid1  .li3').hover(function() {
			var index = $(this).index();
			$(' .li3 .isShow').eq(index - 1).css('display', 'block');
		},
		function() {
			var index = $(this).index();
			$('.li3 .isShow').eq(index - 1).css('display', 'none');
		})

	// **************************************隐藏显示************************************************
	onscroll = function() {
		// 导航栏隐藏显示
		var scrollTop = document.documentElement.scrollTop;
		// console.log(scrollTop);
		if (scrollTop < '200') {
			$('.hidNav').css('display', 'none');
		} else if (scrollTop >= '200') {
			$('.hidNav').css('display', 'block');
			$('.hidNav').css('position', 'fixed');
			$('.hidNav').css('top', '0');
			$('.hidNav').css('z-index', '200');
		}
		//回顶部按钮隐藏显示
		console.log(scrollTop);
		if (scrollTop < '900') {
			$('#sidebar #s3').css({display:'none'});
			$('#sidebar .side1').css({height:'169px'});
			$('#sidebar').css({height:'274px'});
		} else if (scrollTop >= '900') {
			$('#sidebar #s3').css({display:'block'});
			$('#sidebar .side1').css({height:'250px'});
			$('#sidebar').css({height:'355px'});
			// $('.hidNav').css('top', '0');
			// $('.hidNav').css('z-index', '100');
			
		}
	};
	
	$('#rt').click(function(){
		console.log(111);
		location.assign('./login.html');
	})
	//**************************************轮播图*****************************************
	var imgIndex = 0;//存放图片下标
	var countIndex = $('#butShow div').length;//下方按钮长度
	
	//封装方法，显示当前图片和下方按钮，并改变样式
	function changeImg(){
		$('#imgShow div').stop().animate({opacity: 0}, 1000);
		$('#imgShow div').eq(imgIndex).stop().animate({opacity: 1}, 1000);
		$('#butShow div').css({background:'#D2D2D2'});
		$('#butShow div').eq(imgIndex).css({background:'#313131'});
	}
	
	//封装定时器方法
	function imgMove(){
		imgIndex = imgIndex < countIndex - 1 ? (imgIndex + 1) : 0;
		changeImg();
	}
	var timer = setInterval(imgMove, 3000);
	
	//使用下方按钮改变图片
	$('#butShow div').mouseover(function(e){
		clearInterval(timer);
		imgIndex = $(this).index();
		changeImg();
	})
	
	//鼠标在图片上时，停止计时器
	$('#banner').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer = setInterval(imgMove, 3000);
	})
	
	//左右按钮控制图片
	$('#buts .butsPre').click(function(){
		//下标为0时再点击，触发最后一个
		imgIndex = imgIndex > 0 ? (imgIndex - 1) : (countIndex -1);
		changeImg();
	});
	$('#buts .butsNext').click(function(){
		return imgMove();
	});
	
	
	
	$('.designer .des1').click(function(){
		location.assign('./single.html');
	})
	//**************************************添加好物推荐图片*****************************************
	for (var i = 0; i < arr1.length; i++) {
		if (i % 3 == 0) {
			$(
				`
				<div class="recom1">
					<a ><img src="./img/index/${arr1[i].img}.jpg" ></a>
					<h3><a>${arr1[i].a1}<span>${arr1[i].sp}</span>${arr1[i].a2}</a></h3>
					<h4>${arr1[i].hh}</h4>
				</div>
			
			`
			).appendTo($('.conImg'));
		}
		if ((i - 1) % 3 == 0) {
			$(
				`
					<div class="recom2">
						<a href = ""><img src="./img/index/${arr1[i].img}.jpg" ></a>
						<h3><a >${arr1[i].a1}<span>${arr1[i].sp}</span>${arr1[i].a2}</a></h3>
						<h4>${arr1[i].hh}</h4>
					</div>
			
			`
			).appendTo($('.conImg'));
		}
		if ((i + 1) % 3 == 0) {
			$(
				`<div class="recom3">
						<a href = ""><img src="./img/index/${arr1[i].img}.jpg" ></a>
						<h3><a >${arr1[i].a1}<span>${arr1[i].sp}</span>${arr1[i].a2}</a></h3>
						<h4>${arr1[i].hh}</h4>
					</div>
			`
			).appendTo($('.conImg'));
		}
	}
	//**********************************************热销单品************************************************
	for (var i = 0; i < rx.length; i++) {
		$(
			`<div class="conListPer">
				<div class="perNone">
					<div class="n1">
						${rx[i].ht}
					</div>
					<ul class="n2">
						<li class = 'li1'>${rx[i].li1}</li>
						<li class = 'li2'>${rx[i].li2}</li>
					</ul>
				</div>
				<a ><img src="./img/index/${rx[i].img}.jpg" class = 'img01'></a>
				<h3 class = 'oH3'><a>${rx[i].text}<span>${rx[i].sp}</span>${rx[i].text1}</a></h3>
				<div class="conJg"><span class="pri1">${rx[i].pri1}</span><span class= 'pri2'>${rx[i].pri2}</span></div>
					<ul class = 'oUl'>
						 <li class = 'sp1'>${rx[i].sp1}</li>
					</ul>
				</div>
		`
		).appendTo($('.conList'));
		if (rx[i].sp2) {
			$(
				`
				 <li class = 'sp2'>${rx[i].sp2}</li>
			`
			).appendTo($('.conList .oUl')[i]);
		}
	}
	$(
		`<div class="conMore">
			<div class="more">
				<a href= "">
				<p class = 'p1'>更多</p>
				<p >热销单品</p>
				</a>
			</div>
		</div>
	`
	).appendTo($('.conList'));

	//********************************************沙发****************************************************
	for (var i = 0; i < sofa.length; i++) {
		$(
			`<div class="conListPer">
				<div class="perNone">
					<div class="n1">
						${sofa[i].ht}
					</div>
					<ul class="n2">
						<li class = 'li1'>${sofa[i].li1}</li>
						<li class = 'li2'>${sofa[i].li2}</li>
					</ul>
				</div>
				<a ><img src="./img/index/${sofa[i].img}.jpg" class = 'img01'></a>
				<h3 class = 'oH3'><a>${sofa[i].text}<span>${sofa[i].sp}</span>${sofa[i].text1}</a></h3>
				<div class="conJg"><span class="pri1">${sofa[i].pri1}</span><span class= 'pri2'>${sofa[i].pri2}</span></div>
				<ul class = 'oUl'>
					 <li class = 'sp1'>${sofa[i].sp1}</li>
				</ul>
				</div>
		`
		).appendTo($('.sofaList'));
		if (sofa[i].sp0) {
			$(
				`
				<li class = 'sp0'>${sofa[i].sp0}</li>
			`
			).appendTo($('.sofaList .oUl')[i]);

		}
		if (sofa[i].sp2) {
			$(
				`
				<li class = 'sp2'>${sofa[i].sp2}</li>
			`
			).appendTo($('.sofaList .oUl')[i]);
		}
	}
	$(
		`<div class="conMore">
			<div class="more">
				<a>
				<p class = 'p1'>更多</p>
				<p >沙发</p>
				</a>
			</div>
		</div>
	`
	).appendTo($('.sofaList'));
	//********************************************柜架****************************************************
	for (var i = 0; i < frame.length; i++) {
		$(
			`<div class="conListPer">
				<div class="perNone">
					<div class="n1">
						${frame[i].ht}
					</div>
					<ul class="n2">
						<li class = 'li1'>${frame[i].li1}</li>
						<li class = 'li2'>${frame[i].li2}</li>
					</ul>
				</div>
				<a><img src="./img/index/${frame[i].img}.jpg" class = 'img01'></a>
				<h3 class = 'oH3'><a >${frame[i].text}<span>${frame[i].sp}</span>${frame[i].text1}</a></h3>
				<div class="conJg"><span class="pri1">${frame[i].pri1}</span><span class= 'pri2'>${frame[i].pri2}</span></div>
				<ul class = 'oUl'>
					 <li class = 'sp1'>${frame[i].sp1}</li>
				</ul>
				</div>
		`
		).appendTo($('.frameList'));
		if (frame[i].sp2) {
			$(
				`
				<li class = 'sp2'>${frame[i].sp2}</li>
			`
			).appendTo($('.frameList .oUl')[i]);
		}
	}
	$(
		`<div class="conMore">
			<div class="more">
				<a >
				<p class = 'p1'>更多</p>
				<p >框架</p>
				</a>
			</div>
		</div>
	`
	).appendTo($('.frameList'));
	
	
	//**************滑过效果************************
	var oCons = elementsByClassName(document, 'conListPer');
	var oH3s = elementsByClassName(document, 'oH3');
	var oConJgs = elementsByClassName(document, 'conJg');
	var oImgs = elementsByClassName(document, 'img01');
	var oUls = elementsByClassName(document, 'oUl');
	var oNones = elementsByClassName(document, 'perNone');
	// console.log(oCons);
	for (var i = 0; i < oCons.length; i++) {
		oCons[i].index = i;
		oCons[i].onmouseover = function() {
			oH3s[this.index].style.opacity = '0';
			oConJgs[this.index].style.opacity = '0';
			oH3s[this.index].style.opacity = '0';
			oImgs[this.index].style.opacity = '0.2';
			oUls[this.index].style.opacity = '0';
			oNones[this.index].style.display = 'block';
		}
		oCons[i].onmouseout = function() {
			oH3s[this.index].style.opacity = '1';
			oConJgs[this.index].style.opacity = '1';
			oH3s[this.index].style.opacity = '1';
			oImgs[this.index].style.opacity = '1';
			oUls[this.index].style.opacity = '1';
			oNones[this.index].style.display = 'none';
		}
	}
	
	$('.header .li1').click(function(){
		location.assign('./store.html');
	})
	$('#hid2 .li1').click(function(){
		location.assign('./store.html');
	})
	$('#navUl li').click(function(){
		location.assign('./list.html');
	})
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})
	$('.conListPer img').click(function(){
		location.assign('./good_details.html');
	})
	// **************************************侧栏回顶部************************************************
		$('#sidebar  #s3').click(function(){
			scrollTo(0,0);
		})
	
})


