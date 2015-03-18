define([
	'require',
	'text!../tpl/tpl.html',
	'text!../tpl/shishangqianyan.html',
	'../router/Router'
], function (require, tpl, shishangqianyan, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
		},
		initialize: function () {
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
			this.initializeNavPosition();
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
		},
		initializeEvent  :function(){
			var me = this;
		},
		initializeNavPosition  :function(){
			var me = this;
		},
		renderView  :function(){
            var me = this;
            me.$el.html(tpl)

		}
	});
});
