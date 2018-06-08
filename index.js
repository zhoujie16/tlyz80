$('.envelope-click').on('tap', function() {
	console.log('body tap')
	$('.envelope-click').remove();
	//背景渐变
	//首页渐出
	$('.hello-80').animate({
		opacity: 0
	}, 1500, function() {
		$('.introduce').animate({
			opacity: 1
		}, 1500, function() {
			$('.envelope-cover').addClass('active')
			setTimeout(function() {
				$('.envelope-cover').animate({
					bottom: '171px'
				}, 300);
			}, 400)
			setTimeout(function() {
				$('.envelope-cover').css('z-index', -1);
				//抽出信件
				$('.letter').animate({
					top: '6px'
				}, 3000);
			}, 2000);

		});
	})

});

$('.btn-1').on('tap',function(){
	console.log('点击激活校友身份');
	$('.view1').hide();
	$('.envelope-warp').hide();
	$('.view2').show();
});

$('.btn-2').on('tap',function(){
	console.log('点击确定激活');
});
