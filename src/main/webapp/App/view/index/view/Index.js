/**
 * Created by BBBernie on 2014/9/12.
 */
define([
	'text!../tpl/indexTpl.tpl',
	'mockjax'
], function (indexTpl) {

	return Backbone.View.extend({
		events          : {
			'click .imgPos li':'imgLiClick'
		},
		initialize      : function () {
			var me = this;
			me.initializeVar();
			me.initializeEl();
			me.myRender();
			me.startInterval();
		},
		initializeVar   : function () {
			var me = this;

		},
		initializeEl    : function () {
			var me = this;
		},
		myRender  :function(){
			var me = this;
			me.$el.html(indexTpl);
		},
		imgLiClick  :function(e){
			var me = this, index;
			var currentTarget = e.currentTarget;
			var $lists = $('.bgPictureShow .picUl li');
			//list item变。
			$(currentTarget).siblings().removeClass('img_active');
			$(currentTarget).addClass('img_active');
			//图片变
			index = $(currentTarget).attr('data-index');
			$($lists).removeClass('show');
			$($lists).eq(index).addClass('show');
		},
		startInterval  :function(){
			var me = this;
			var $lists = me.$('.bgPictureShow .picUl li');
			var $lists_pos = me.$('.imgPos li');
			var $list = null;
			var length = $lists.length || 0;
			var nowIndex = 0;
			setInterval(function () {
				console.info('startinte');

				//获得当前图片位置
				$.each($lists, function (i, v) {
					if ($(v).hasClass('show')) {
						return nowIndex = i;
//					}else {
//						nowIndex = 0;
					}
				});
console.info(nowIndex);
				//开始切换图片
				if (nowIndex < 2) {
					$($lists).eq(nowIndex).removeClass('show');
					$($lists).eq(nowIndex + 1).addClass('show');
					$($lists_pos).eq(nowIndex).removeClass('img_active');
					$($lists_pos).eq(nowIndex + 1).addClass('img_active');
				} else {
					$($lists).eq(nowIndex).removeClass('show');
					$($lists).eq(0).addClass('show');
					$($lists_pos).eq(nowIndex).removeClass('img_active');
					$($lists_pos).eq(0).addClass('img_active');
				}
			}, 5000)
		}
	})
});