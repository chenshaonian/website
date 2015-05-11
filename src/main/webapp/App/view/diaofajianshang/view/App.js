define([
	'require',
	'text!../tpl/tpl.html',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'click .content-main-nav-item': 'navClick',
//			'click #peidaiyanshi1': 'peidaiyanshiShow',
//			'click #peidaiyanshi2': 'peidaiyanshiShow',
			'click .layoverdiv':'layoverdiv'
		},
		initialize: function () {
			this.renderView();
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
					case 'zhubozaoxing':
						me.showView('zhubozaoxing');
						break;
					case 'zengbudiaofa':
						me.showView('zengbudiaofa');
						break;
					case 'shishangdiaofa':
						me.showView('shishangdiaofa');
						break;
					case 'peidaiyanshi':
						me.showView('peidaiyanshi');
						break;
					default :
						me.showView('zhubozaoxing');
				}
			});
			$(window).on('resize', me.initializeNavPosition)
		},
		initializeNavPosition  :function(){
			var me = this;
			console.log('resize nav pos')
			var clientHeight = document.documentElement.clientHeight;
			var navHeight = $('.navbox').height();
			var peidaiyanshiHeigh = clientHeight - navHeight - 30 ;
			$('.content-main-nav').css({top: navHeight});
			$('.headSubDiv').css({top: navHeight});
			if(peidaiyanshiHeigh < 600){
				return;
			}else {
				$('.peidaiyanshi-main').css({height: peidaiyanshiHeigh+'px'});
			}
		},
		peidaiyanshiShow  :function(e){
			var me = this;
			var $el = $(e.currentTarget)[0];
			var id = $el.id || '';
			console.info(id);
			if(id == 'peidaiyanshi1'){
				require([
					'text!../tpl/peidaiyanshi1.tpl'
				], function(peidaiyanshi1){
					me.$el.append(peidaiyanshi1)
				})
			}else if(id == 'peidaiyanshi2'){
				require([
					'text!../tpl/peidaiyanshi2.tpl'
				], function(peidaiyanshi2){
					me.$el.append(peidaiyanshi2);
				})
			}
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
			var maskId = (id || '') + 'mask';
			me.$('.content-main-nav-item').removeClass('clicked');
			me.$('.content-main-nav-mask-item').removeClass('clicked');
			$('#'+id).addClass('clicked');
			$('#'+maskId).addClass('clicked');
			$('#'+articleId).siblings().hide();
			$('#'+articleId).show();
		},
		layoverdiv  :function(){
			var me = this;
			$('.videoFrame').remove();
		},
		renderView  :function(){
			var me = this;
			me.$el.html(tpl);
		}
	});
});
