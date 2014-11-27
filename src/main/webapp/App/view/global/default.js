/**
 * Created by BBBernie on 2014/11/26.
 */
(function(){
	var $lists = $('.bgPictureShow .picUl li');
	var $list = null;
	var length = $lists.length;
	this.myInterval = null;
	console.info($lists);
	var nowItem = '', nowIndex = 0;

	$('.imgPos li').click(function(e){
		var me = this, index = 0;
		//            clearInterval(me.myInterval);
		//list item变。
		$('.imgPos li').removeClass('active');
		$(this).addClass('active');
		//图片变
		index = $(this).attr('data-index');
		$($lists).removeClass('show');
		$($lists).eq(index).addClass('show');
		//            me.startInterval();
	});

	$('.navbox li').hover(function(e){
		console.info($(this).find(':first-child').eq(0).hasClass('jishugongyi'));
		if($(this).find(':first-child').eq(0).hasClass('jishugongyi') || $(this).find(':first-child').eq(0).hasClass('diaofa')){
			$(this).find('div').show();
		}
	}, function(){
//		$('.navbox .lit').hide();
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