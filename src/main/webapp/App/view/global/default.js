/**
 * Created by BBBernie on 2014/11/26.
 */
(function(){
	var $lists = $('.bgPictureShow .picUl li');
	var $list = null;
	var length = $lists.length||0;
	console.info($lists);
	var nowIndex = 0;

	$('.imgPos li').click(function(e){
		var me = this, index;
		//list item变。
		$('.imgPos li').removeClass('active');
		$(this).addClass('active');
		//图片变
		index = $(this).attr('data-index');
		$($lists).removeClass('show');
		$($lists).eq(index).addClass('show');
	});

	$('.navbox li').hover(function(e){
		if($(this).find(':first-child').eq(0).hasClass('diaofashishang') || $(this).find(':first-child').eq(0).hasClass('diaofazhishi')){
//			$(this).find('div').show();
			$('.headSubDiv').show();
		}
	}, function(){
		if(!$('.headSubDiv').hover()) {
//		$(this).find('div').hide();
			$('.headSubDiv').hide();
		}
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