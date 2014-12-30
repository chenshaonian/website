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
})();