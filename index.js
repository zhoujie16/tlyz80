var $helloLogo = $('.hello-logo');
var $helloPaner = $('.hello-paner');
var $helloAddressDate = $('.hello-address-date');
var $evenlope = $('.envelope-warp')
var $header80Year = $('.header-80year')
var $activeBtn1 = $('.btn-1')
var $activeBtn2 = $('.btn-2')
var $activeForm = $('.student-form')
var $finger = $('.finger')

function pageInit() {
	showAnimate($helloLogo)
	showAnimate($helloPaner)
	showAnimate($helloAddressDate)
	showAnimate($evenlope)
	$('.envelope-click').on('tap', function() {
		$('.envelope-click').remove();
		hideAnimate($helloLogo);
		hideAnimate($helloPaner);
		hideAnimate($helloAddressDate);
		mui.later(function() {
			showAnimate($header80Year)
			showAnimate($activeBtn1);
			mui.later(function() {
				$finger.show()
				$finger.css('animation', 'fingerAnimate 1s linear infinite')
			}, 800)

			mui.later(function() {
				$('.envelope-cover').addClass('active')
				setTimeout(function() {
					$('.envelope-cover').animate({
						bottom: '8.55rem'
					}, 300);
				}, 400)
				setTimeout(function() {
					$('.envelope-cover').css('z-index', -1);
					//抽出信件
					$('.letter').animate({
						top: '0.3rem'
					}, 2000);
				}, 2000);
			}, 500)
		}, 500)

	});

	$('.btn-1').on('tap', function() {
		console.log('点击激活校友身份');
		hideAnimate($evenlope)
		hideAnimate($activeBtn1)
		$finger.css('animation', 'initial')
		$finger.hide()
		mui.later(function() {
			showAnimate($activeForm)
			showAnimate($activeBtn2)
			mui.later(function() {
				$finger.show()
				$finger.css('animation', 'fingerAnimate 1s linear infinite')
			}, 800)
		}, 500);
	});

	$('.btn-2').on('tap', function() {
		console.log('点击确定激活');
		//mui.toast('点击了确定激活')
		mui.alert('激活操作')
	});
	$('.music-btn').on('tap', function() {
		console.log('点击音乐播放');
		document.getElementById("music").play();
	})
}

function showAnimate($obj) {
	var class_s = $obj.attr('an-show')
	var class_h = $obj.attr('an-hide')
	$obj.show().removeClass(class_h).addClass(class_s);
}

function hideAnimate($obj) {
	var class_s = $obj.attr('an-show')
	var class_h = $obj.attr('an-hide')
	$obj.removeClass(class_s).addClass(class_h);
}