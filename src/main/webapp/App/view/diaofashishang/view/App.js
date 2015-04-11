define([
	'require',
	'text!../tpl/diaofafengchaomain.html',
	'text!../tpl/shishangqianyanmain.html',
	'../router/Router'

], function (require, diaofafengchaomain, shishangqianyanmain, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'mouseenter .content-img-item':'imgHover',
			'click .arrow-left': 'arrowLeft',
			'click .arrow-right': 'arrowRight',
			'click #meifamiji': 'clickmeifamijiItem',
			'click #shishangyizhuang': 'clickshishangyizhuangItem',
			'click #zhiganzhuangrong': 'clickzhiganzhuangrongItem',
			'click #lirengushi': 'clicklirengushiItem'
		},
		initialize: function () {
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
			this.initializeNavPosition();
		},
		initializeVar: function () {
			var me = this;
		},
		initializeEl: function () {
			var me = this;
		},
		initializeRouter: function () {
			var me = this;
			me.router = new Router(me);
		},
		initializeEvent  :function(){
			var me = this;
			var view;
			me.on('init', function(router){
				switch (router) {
					case 'shishangqianyan':
						me.showView('shishangqianyan');
						break;
					default :
						me.showView('diaofafengchao');
				}
			})
			me.on('news', function (router){
//				switch  (router){
//					case:
//				}
			})
		},
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
		},
		renderView  :function(){
		},
		clickmeifamijiItem: function (){
			var me = this;
			require(['./ShishangqianyanView'], function (view) {
				view = new view({nextid: 'meifamiji'});
				me.$el.html(view.$el);
			});
		},
		clickshishangyizhuangItem: function (){
			var me = this;
			require(['./ShishangqianyanView'], function (view) {
				view = new view({nextid: 'shishangyizhuang'});
				me.$el.html(view.$el);
			});
		},
		clickzhiganzhuangrongItem: function (){
			var me = this;
			require(['./ShishangqianyanView'], function (view) {
				console.info('require view');
				view = new view({nextid: 'zhiganzhuangrong'});
				me.$el.html(view.$el);
			});
		},
		clicklirengushiItem: function (){
			var me = this;

			require(['./ShishangqianyanView'], function (view) {
				console.info('require view');
				view = new view({nextid: 'lirengushi'});
				me.$el.html(view.$el);
			});
		},
		clickShishangqianyanItem: function(e){
			var me = this;
			var $el = $(e.currentTarget);
			var id = $el.id || '';
			console.info($el[0])
			require(['./ShishangqianyanView'], function (view) {
				console.info('require view');
				view = new view();
				me.$el.html(view.$el);
			});
//			var ShishangqianyanView = new ShishangqianyanView();
//			me.$el.html(ShishangqianyanView.html())

		},
		arrowLeft: function () {
			var me = this;
			var $nowContent = $('#wrap .active');
			var index = $nowContent.data('index');
			var nextIndex = index > 1 ? index - 1 : 3;
			console.log(nextIndex)

			$('.fc-content').eq(nextIndex - 1).addClass('active').siblings().removeClass('active');
			console.log($nowContent);
		},
		arrowRight: function () {
			var me = this;
			var $nowContent = $('#wrap .active');
			var index = $nowContent.data('index');
			var nextIndex = index < 3 ? index + 1 : 1;
			console.log(nextIndex)
			$('.fc-content').eq(nextIndex - 1).addClass('active').siblings().removeClass('active');
			console.log($nowContent);
		},
		imgHover  :function(e){
			var me = this;
			var $el = $(e.currentTarget);
			$el.siblings().find('.content-img-item-mask').show();
			$el.find('.content-img-item-mask').hide();
		},
		showView  :function(id){
			var me = this;
			id = id || '';
			if(id == 'shishangqianyan'){
				me.$el.html(shishangqianyanmain);
			}else {
				me.$el.html(diaofafengchaomain);
			}
		}

	});
});
