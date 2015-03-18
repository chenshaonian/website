define([
	'require',
	'text!../tpl/tpl.html',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
		},
		initialize: function () {
			console.info('init app');
			this.renderView();
			this.initializeVar();
			this.initializeEl();
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
		},
		showMovie  :function(){
			var me = this;
		},
		renderView  :function(){
			var me = this;
			me.$el.html(tpl);
		}
	});
});
