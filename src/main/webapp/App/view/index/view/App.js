define([
	'require',
	'text!../tpl/indexTpl.tpl',
	'../router/Router'
], function (require, tpl, Router) {

	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'click .movieShow': 'movieShow',
			'mouseenter  .contentDiv':'contentDivEnter',
			'mouseleave .contentDiv':'contentDivLeave',
			'click .layoverdiv':'layoverdiv'
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
						require(['./Index'], function (view) {
							console.info('require view');
							view = new view();
							me.$el.html(view.$el);
						});
						break;
				}
			})
		},

		layoverdiv  :function(){
			var me = this;
			$('.videoFrame').remove();
		},
		movieShow  :function(){
			var me = this;
			require([
				'text!../tpl/movieTpl.tpl'
			], function(movieTpl){
				$('.content').append(movieTpl);
			})
		},
		renderView  :function(){
			var me = this;
//			console.info('renderview');
//			me.$el.html(tpl);
		},
		contentDivEnter  :function(e){
			var me = this;
			var currTarget = $(e.currentTarget).find('div:first');
			currTarget.animate({
				top: -180
			},300);
			console.info(currTarget);
		},
		contentDivLeave  :function(e){
			var me = this;
			var currTarget = $(e.currentTarget).find('div:first');
//			if(currTarget.is(':animated')){
//				console.info('isanimate');
//				return false;
//			}
			console.info(currTarget);
			currTarget.animate({
				top: 0
			},300);
		}
	});
});
