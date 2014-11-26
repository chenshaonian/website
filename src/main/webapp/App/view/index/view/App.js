define([
	'require',
	'text!../tpl/indexTpl.tpl',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {

		},
		initialize: function () {
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
			this.renderView();
		},
		initializeVar: function () {
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
//						require(['./Index'], function (view) {
//							view = new view();
//							$('.Bookinginterface_box').html(view.$el);
//						});
						break;
				}
			})
		},
		renderView  :function(){
			var me = this;
			console.info('renderview');
			me.$el.html(tpl);
		}
	});
});
