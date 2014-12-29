define([
	'require',
	'text!../tpl/indexTpl.tpl',
	'../router/Router',
	'kindeditor'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'mouseenter  .contentDiv':'contentDivEnter',
			'mouseleave .contentDiv':'contentDivLeave'
		},
		initialize: function () {
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
			this.renderView();
			setTimeout(this.startNote(),1000);
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
		renderView  :function(){
			var me = this;
//			console.info('renderview');
			me.$el.html(tpl);
		},
		startNote  :function(){
			var me = this;
//			console.info('startnote');
//			KindEditor.ready(function(K) {
//				window.editor = K.create('#editor_id');
//			});
////			$('#summernote').summernote();//			$('.summernote').summernote();
		},
		contentDivEnter  :function(e){
			var me = this;
			var currTarget = $(e.currentTarget).find('div:first');
//			if(currTarget.is(':animated')){
//				console.info('isanimate');
//				return false;
//			}
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
