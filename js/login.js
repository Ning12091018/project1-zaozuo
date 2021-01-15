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

	// 导航栏滑过显示
	$('#hid1  .li3').hover(function() {
			var index = $(this).index();
			$(' .li3 .isShow').eq(index - 1).css('display', 'block');
		},
		function() {
			var index = $(this).index();
			$('.li3 .isShow').eq(index - 1).css('display', 'none');
		});

	//选项卡
	var oDiv = document.getElementById('login');
	var oBs = document.getElementsByTagName('button');
	oDiv.onclick = function(e) {

		var e = event || window.event;
		if (e.target.tagName.toLocaleLowerCase() != 'button') {
			return;
		}
		var oDivs = elementsByClassName(oDiv, 'login1');
		// console.log(oDivs)
		for (var i = 0; i < oBs.length; i++) {
			oBs[i].className = '';
			oBs[i].index = i;
			oDivs[i].style.display = 'none';
		}
		e.target.className = 'active';
		if (e.target.index != 0) {
			oBs[0].style.color = '#A0A0A0';
		} else {
			oBs[0].style.color = '#313131';
		}

		oDivs[e.target.index].style.display = 'block';
	}

	// input点击改变外边框
	$('#inp1').focus(function() {
		$(this).parent().css('border-bottom', '1px solid #313131');
	});
	$('#inp1').blur(function() {
		$(this).parent().css('border-bottom', '1px solid #A0A0A0');
	});
	$('#inp2').focus(function() {
		$(this).parent().css('border-bottom', '1px solid #313131');
	});
	$('#inp2').blur(function() {
		$(this).parent().css('border-bottom', '1px solid #A0A0A0');
	});
	$('#numInp1').focus(function() {
		$(this).parent().css('border-bottom', '1px solid #313131');
	});
	$('#numInp1').blur(function() {
		$(this).parent().css('border-bottom', '1px solid #A0A0A0');
	});
	$('#numInp2').focus(function() {
		$(this).parent().css('border-bottom', '1px solid #313131');
	});
	$('#numInp2').blur(function() {
		$(this).parent().css('border-bottom', '1px solid #A0A0A0');
	});
	//****************************** 快捷登录************************************
	// 判断手机号
	// var flag = false;
	$('#inp1').change(function() {
		var inp1 = $('#inp1').val();
		// console.log(inp1);
		// input值不为空显示删除键
		if (inp1 != '') {
			$('.xx').css('display', 'inline-block');
			// 点击删除清空内容
			$('#ph_num .xx').click(function() {
				$('#inp1').val('');
			});
			//手机号判断，输入正确才能获取验证码
			var re = /^1\d{10}$/;
			var re1 = /\D/;
			if (re1.test(inp1)) {
				alert('请勿输入除数字外的字符');

			} else if (inp1.length != 11) {
				alert('手机号长度不正确，请输入正确的手机号');
			} else if (re.test(inp1)) {
				$('#inp3').css({
					background: '#313131',
					color: '#fff',
				});

				// 手机号输入正确，发送验证码
				$('#inp3').click(function() {
					$(this).css({
						background: '#D2D2D2',
					});
					$('#inp3').val('已发送');
					// flag =true;
				});
			}
		}
		//判断验证码
		var flag =false ;
		$('#inp2').change(function() {
			var inp2 = $('#inp2').val();
			// console.log(inp2);
			var re = /^\d{4}$/;
			var re1 = /\D/;
			if (re.test(inp2)) {
				$('#butt').css({
					background: '#313131',
					color: '#fff',
				});
				flag = true;
			} else {
				alert('请输入正确的四位数字验证码');
			}
		})
		//登录
		$('#butt').click(function() {
			console.log('欢迎用户' + $('#inp1').val() + '加入造作家庭');
			location.assign('./personal.html');
		
		});
		
	});
	
	// ***********************密码登录*************************************
	$('#numInp1').change(function() {
		var numInp1 = $('#numInp1').val();
		if (numInp1 != '') {
			//显示删除键
			$('#num .xx').css('display', 'inline-block');
			// 点击删除清空内容
			$('#num .xx').click(function() {
				$('#numInp1').val('');
			});

			// 手机号判断
			var re = /^1\d{10}$/;
			var re1 = /\D/;
			if (re1.test(numInp1)) {
				alert('请勿输入除数字外的字符');

			} else if (numInp1.length != 11) {
				alert('手机号长度不正确，请输入正确的手机号');
			} else if (re.test(numInp1)) {
				$('#inp3').css({
					background: '#313131',
					color: '#fff',
				})
			}
		}

	});

	//判断密码
	$('#numInp2').change(function() {
		var numInp2 = $('#numInp2').val();
		if (numInp2 != '') {
			//显示删除键
			$('#pw .xx').css('display', 'inline-block');
			// 点击删除清空内容
			$('#pw .xx').click(function() {
				$('#numInp2').val('');
			});
		if (numInp2.length > 6 && numInp2.length < 16) {
			$('#butt1').css({
				background: '#313131',
				color: '#fff',
			});
		} else {
			alert('请输入6-16位');
		}}
	});
	//登录
	$('#butt1').click(function() {
		console.log('欢迎用户' + $('#numInp1').val() + '回到造作世界');
		console.log('用户密码是' + $('#numInp2').val());
		location.assign('./personal.html');

	});
	$('#hid1 li').click(function(){
		location.assign('./list.html');
	})
	$('.hidNav .logo').click(function(){
		location.assign('./index.html');
	})

})
