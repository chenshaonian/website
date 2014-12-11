/**
 * Created by BBBernie on 2014/11/26.
 */
(function () {
	var $lists = $('.bgPictureShow .picUl li');
	var $list = null;
	var length = $lists.length || 0;
	console.info($lists);
	var nowIndex = 0;
	var inerTime ;
	var currSubDiv;

	$('.imgPos li').click(function (e) {
		var me = this, index;
		//list item变。
		$('.imgPos li').removeClass('active');
		$(this).addClass('active');
		//图片变
		index = $(this).attr('data-index');
		$($lists).removeClass('show');
		$($lists).eq(index).addClass('show');
	});
	$('.weixin').hover(function(){
		$('.weixinHide').show();
	}, function(){
		$('.weixinHide').hide();
	});
	$('.email').hover(function(){
		$('.emailHide').show();
	}, function(){
		$('.emailHide').hide();
	});

	$('.headSubDiv').mouseenter(function (e) {
		console.info('headSubDiv mouse enter');
		if (inerTime) {
			clearTimeout(inerTime);
		}
		console.info('show');
		if (currSubDiv) {
			$('.' + currSubDiv).show();
		}
	});
	$('.headSubDiv').mouseleave(function () {
		$('.headSubDiv').hide().removeClass('headSubDivShow');
		console.info('hide');
	});

	$('.headNavWrap a').hover(function (e) {
		var className = $(e.currentTarget)[0].className || 'shouye';
		currSubDiv = className;
		$('.headSubDiv').hide();
		if(inerTime){
			clearTimeout(inerTime);
		}
		switch (className) {
			case 'diaofashishang':
				console.info('diaofashishang');
				$('.subdiaofashishang').show().addClass('headSubDivShow');
				break;
			case 'diaofazhishi':
				console.info('diaofazhishi');
				$('.subdiaofazhishi').show().addClass('headSubDivShow');
				break;
			case 'diaofaanli':
				console.info('diaofaanli');
				$('.subdiaofaanli').show().addClass('headSubDivShow');
				break;
			case 'shipinxinshang':
				console.info('shipinxinshang');
				$('.subshipinxinshang').show().addClass('headSubDivShow');
				break;
			case 'zoujindsn':
				console.info('zoujindsn');
				$('.subzoujindsn').show().addClass('headSubDivShow');
				break;
			case 'shouye':
				console.info('shouye');
				break;
		}
	}, function (e) {
		console.info('mouse out');
		inerTime = setTimeout(function () {
			if ($('.headSubDiv').hasClass('headSubDivShow')) {
				$('.headSubDiv').hide().removeClass('headSubDivShow');
			}
		}, 150);
	});

	startInterval();
	function startInterval() {
		this.myInterval = setInterval(function () {
			//获得当前图片位置
			$.each($lists, function (i, v) {
				if ($(v).hasClass('show')) {
					nowIndex = i;
					$list = v;
					return false;
				}
				nowIndex = 0;
				$list = $lists.eq(0);
			});
			//开始切换图片
			if (nowIndex < 9) {
				$($lists).eq(nowIndex).removeClass('show');
				$($lists).eq(nowIndex + 1).addClass('show');
			} else {
				$($lists).eq(nowIndex).removeClass('show');
				$($lists).eq(0).addClass('show');
			}
		}, 5000)
	}
})();