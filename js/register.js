$(function() {

	// 导航栏滑过显示
	$('#hid1  .li3').hover(function() {
			var index = $(this).index();
			$(' .li3 .isShow').eq(index - 1).css('display', 'block');
		},
		function() {
			var index = $(this).index();
			$('.li3 .isShow').eq(index - 1).css('display', 'none');
		})


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


	// 判断手机号
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
					var i = 59;
					var flag = false;
					if (!flag) {
						flag = true;
						setInterval(function() {
							$('#inp3').val(i-- + 's');
						}, 1000);
					}
				});
			}
		}
		//判断验证码
		$('#inp2').change(function() {
			var inp2 = $('#inp2').val();
				var re = /^\d{4}$/;
				var re1 = /\D/;
				if (re.test(inp2)) {
					$('#butt').css({
						background: '#313131',
						color: '#fff',
					});
				} else {
					alert('请输入正确的四位数字验证码');
				}
			})
			// 注册
			$('#butt').click(function() {
				console.log('欢迎用户' + $('#inp1').val() + '加入造作家庭');
				location.assign('./login.html');
			
			});
		});
		$('#hid1 li').click(function(){
			location.assign('./list.html');
		})
		$('.hidNav .logo').click(function(){
			location.assign('./index.html');
		})
		

})
