define([
	'require',
	'text!../tpl/tpl.html',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
//			'mouseenter  .contentDiv':'contentDivEnter',
//			'mouseleave .contentDiv':'contentDivLeave'
		},
		initialize: function () {
			console.info('init app');
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
			this.renderView();
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
					case 'help':
						alert('help');
						break;
					default :
						alert('news id: '+router)
						console.info();
//						require(['./Index'], function (view) {
//							console.info('require view');
//							view = new view();
							me.$el.html(tpl);
//						});
//						break;
				}
			})
		},
		renderView  :function(){
			var me = this;
//			console.info('renderview');
//			me.$el.html(tpl);
//		},
//		contentDivEnter  :function(e){
//			var me = this;
//			var currTarget = $(e.currentTarget).find('div:first');
//			if(currTarget.is(':animated')){
//				console.info('isanimate');
//				return false;
//			}
//			currTarget.animate({
//				top: -180
//			},300);
//			console.info(currTarget);
//		},
//		contentDivLeave  :function(e){
//			var me = this;
//			var currTarget = $(e.currentTarget).find('div:first');
//			if(currTarget.is(':animated')){
//				console.info('isanimate');
//				return false;
//			}
//			console.info(currTarget);
//			currTarget.animate({
//				top: 0
//			},300);
		}
	});
});
