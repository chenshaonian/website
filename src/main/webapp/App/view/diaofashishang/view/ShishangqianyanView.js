/**
 * Created by Bernie-pc on 15-4-11.
 */
define([
	'text!../tpl/shishangqianyanSub.html',
	'text!../tpl/newsTpl.html'
],function (shishangqianyanSub, newsTpl){
	console.log(123);
	return Backbone.View.extend({
		className: 'content',
		events: {
//			'click .content-main-nav-item': 'clickItem'
			'click #meifamiji2': 'clickMeifamiji',
			'click #shishangyizhuang2': 'clickShishangyizhuang',
			'click #zhiganzhuangrong2': 'clickZhiganzhuangrong',
			'click #lirengushi2': 'clickLirengushi',
			'click .newsItem': 'showDetailNews',
			'click .close-btn':'closeNews'

		},
		initialize: function (data) {
			var me = this;
			me.id = data.nextid + '2'|| '';
			this.initializeVar();
			this.initializeEl();
//			this.initializeEvent();
//			this.initializeRouter();
//			this.initializeNavPosition();
			me.showView();
		},
		initializeVar: function () {
			var me = this;
		},
		initializeEl: function () {
			var me = this;
		},
		initializeRouter: function () {
			var me = this;
			me.router = new Backbone.Router.extend({
				initialize: function () {
					Backbone.history.start();
				},
				routes: {
					"*": "main",
					'!:id': 'initView'
				},
				initView: function (router) {
					me.trigger('init', arguments[0]||'');
				},
				main: function () {
					me.trigger('init', arguments[0]||'');
				}
			});
		},
		initializeEvent  :function(){
			var me = this;
			var view;
			me.on('init', function(router){
				console.log('int', router)
				switch (router) {
					case 'shishangqianyan/meifamiji':
						me.showView('meifamiji');
						break;
					case 'shishangqianyan/shishangyishang':
						me.showView('shishangyishang');
						break;
					case 'shishangqianyan/zhiganzhuangrong':
						me.showView('zhiganzhuangrong');
						break;
					case 'shishangqianyan/lirengushi':
						me.showView('lirengushi');
						break;
					default :
						me.showView('meifamiji');
				}
			})
		},
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
		},
		clickItem: function (e){
			var $el = $(e.currentTarget);
			console.log('id', $el.id);
		},
		clickMeifamiji: function (){
			var me = this;
			me.contentShow('meifamiji2');

		},
		clickShishangyizhuang: function (){
			var me = this;
			console.log('123')
			me.contentShow('shishangyizhuang2');
		},
		clickZhiganzhuangrong: function (){
			var me = this;
			me.contentShow('zhiganzhuangrong2');
		},
		clickLirengushi: function (){
			var me = this;
			me.contentShow('lirengushi2');
		},
		showView: function(id) {
			var me = this;
			me.$el.html(shishangqianyanSub);
			setTimeout(function(){
				me.contentShow(me.id)
			}, 100);
		},
		contentShow: function (id){
			var me = this;
			me.id = id;
			var showNavId = id + 'mask';
			var showContentId = id + '-main';
			console.log(',showContentId', showContentId)
			console.log(',showNavId', showNavId)
			$('#'+showNavId).addClass('clicked').siblings().removeClass('clicked');
			$('#'+showContentId).show().siblings().hide();
			me.getNews();
		},
		getNews: function(){
			var me = this;
			var url = 'getNewsList/'+me.id.substr(0, me.id.length-1) || '';
			me.showDetailNews();
//			$.ajax({
//				url:url,
//				success: function(data){
//
//				},
//				error:function(){
//
//				}
//			})
		},
		showDetailNews: function(){
			var me  = this;
			me.$el.append(newsTpl)
		},
		closeNews: function(){
			console.log('213')
			$('.news-wrap').remove();
		}
	})
})