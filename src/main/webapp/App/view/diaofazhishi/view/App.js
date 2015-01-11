define([
	'require',
	'text!../tpl/tpl.html',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'click .content-main-nav-item': 'navClick'
//			'mouseenter  .contentDiv':'contentDivEnter',
//			'mouseleave .contentDiv':'contentDivLeave'
		},
		initialize: function () {
			this.renderView();
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
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
					case 'jishuguanzhan':
						me.showView('jishuguanzhan');
						break;
					case 'dingzhiliucheng':
						me.showView('dingzhiliucheng');
						break;
					case 'gongyijianbie':
						me.showView('gongyijianbie');
						break;
					default :
						me.showView('jishuguanzhan');
				}
			})
		},
		navClick  :function(e){
			var me = this;
			var $el = $($(e.currentTarget)[0]);
			var elId= $el[0].id;
			var router = '#!' + elId;
			me.router.navigate(router, {trigger: true});
		},
		showView  :function(id){
			var me = this;
			var articleId = (id || '') + '-main';
			console.info('showview');
			console.info('articleId',articleId);
			me.$('.content-main-nav-item').removeClass('clicked');
			$('#'+id).addClass('clicked');
			$('#'+articleId).siblings().hide();
			$('#'+articleId).show();
		},
		renderView  :function(){
			var me = this;
			me.$el.html(tpl);
		}
	});
});
