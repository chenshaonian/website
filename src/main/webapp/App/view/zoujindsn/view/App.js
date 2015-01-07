define([
	'require',
	'text!../tpl/tpl.html',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'click .catalog-item': 'itemClick',
			'click #cooperation-support': 'cooperationsClick',
			'click #cooperation-line': 'cooperationsClick',
			'click #cooperation-standard': 'cooperationsClick',
			'click #cooperation-return': 'cooperationsClick',
			'click .movies':'showMovie'
		},
		initialize: function () {
			console.info('init app');
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
				console.info(router);
				switch (router) {
					case 'pinpaijianjie':
						me.renderItem('pinpaijianjie');
						break;
					case 'pinpaiyingpian':
						me.renderItem('pinpaiyingpian');
						break;
					case 'jiamenghezuo':
						me.renderItem('jiamenghezuo');
						break;
					case 'lianxiwomen':
						me.renderItem('lianxiwomen');
						break;
					default :
						me.renderItem('pinpaijianjie');
				}
			})
		},
		movieShow  :function(){
			var me = this;
			require([
				'text!../tpl/movieTpl.tpl'
			], function(movieTpl){
				$('.content').append(movieTpl);
			})
		},
		cooperationsClick  :function(e){
			var me = this;
			var $el = $(e.currentTarget);
			var elId = $el[0].id;
			var contentDiv = elId+'-content';
			$el.siblings().removeClass('cooperation-click');
			$el.addClass('cooperation-click');
			$('#'+contentDiv).siblings().hide();
			$('#'+contentDiv).show();

		},
		itemClick  :function(e){
			var me = this;
			var $el = $($(e.currentTarget)[0]);
			var elId= $el[0].id;
			var router = '#!' + elId;
			me.router.navigate(router, {trigger: true});
		},
		renderItem  :function(id){
			var me = this;
			var elId = id||'';
			var contentId = elId+'-main';
			me.$('.catalog-item').removeClass('item-atived');
			$('#'+elId).addClass('item-atived');
			me.$('.content-article').hide();
			me.$('#'+contentId).show();
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
