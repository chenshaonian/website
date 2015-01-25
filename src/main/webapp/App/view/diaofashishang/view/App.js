define([
	'require',
	'text!../tpl/tpl.html',
	'text!../tpl/shishangqianyan.html',
	'../router/Router'
], function (require, tpl, shishangqianyan, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'mouseenter .content-img-item':'imgHover'
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
		},
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
		},
		renderView  :function(){
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
				me.$el.html(shishangqianyan);
			}else {
				me.$el.html(tpl);
			}
		}
	});
});
