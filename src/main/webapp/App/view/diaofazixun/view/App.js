define([
	'require',
	'text!../tpl/tpl.html',
	'text!../tpl/chanpinzixun.html',
	'text!../tpl/xinwendongtai.html',
	'../router/Router',
	'../mock/mockajax',
	'pagination'

], function (require, tpl, chanpinzixuntpl, xinwendongtaitpl,  Router, mockajax) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'click .content-nav-item': 'navClick'
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
			/**
			 * 每页显示多少条消费历史
			 * @type {number}
			 */
			me.pageSize = 10;
			/**
			 * 当前消费历史为第几页,索引从0开始
			 * @type {number}
			 */
			me.pageNum = 0;
			new mockajax();
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
					case 'xinwendongtai':
						me.showView('xinwendongtai');
						break;
					case 'chanpinzixun':
						me.showView('chanpinzixun');
						break;
					default :
						me.showView('xinwendongtai');
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
			var articleId = (id || '') + '-detail';
			id = id ||'';
			console.info('showview');
			console.info('articleId',articleId);
			me.$('.content-nav-item').removeClass('clicked');
			$('#'+id).addClass('clicked');
			$('#'+articleId).siblings().hide();
			$('#'+articleId).show();
			me.getDataList(id);
		},
		getDataList  :function(id){
			var me = this;
			if(id == 'xinwendongtai'){
				console.info('id',id);
				$.ajax({
					url:'/getXinwendongtaiList',
					method:'post',
					data:{
						pageNum : me.pageNum + 1,
						pageSize: me.pageSize
					},
					dataType: 'json',
					success: function(data){
						console.log(data);
						if(data.status == 0 && data.data){
							var totalPage = data.data.totalPage;
							var dataList = data.data.list;
							me.$('.content-xinwendongtai-right').html(_.template(xinwendongtaitpl, {data: dataList}));
							me.renderPagination(totalPage);
						}else{
							me.$('.content-xinwendongtai-right').html('暂时无法查看新闻动态');
							me.renderPagination(0);
						}
					},
					error: function(err){
						console.log(err);
						me.$('.content-xinwendongtai-right').html('网络错误，请稍后再试');
						me.renderPagination(0);
					}
				})
			}else if(id == 'chanpinzixun'){
				$.ajax({
					url:'/getChanpinzixunList',
					method:'post',
					data:{
						pageNum : me.pageNum + 1,
						pageSize: me.pageSize
					},
					dataType: 'json',
					success: function(data){
						console.log(data);
						if(data.status == 0 && data.data){
							var totalPage = data.data.totalPage;
							var dataList = data.data.list;
							me.$('.content-chanpinzixun-left').html(_.template(xinwendongtaitpl, {data: dataList}));
							me.renderPagination(totalPage);
						}else{
							me.$('.content-chanpinzixun-left').html('暂时无法查看新闻动态');
							me.renderPagination(0);
						}
					},
					error: function(err){
						console.log(err);
						me.$('.content-chanpinzixun-left').html('网络错误，请稍后再试');
						me.renderPagination(0);
					}
				})
			}
		},
		renderView  :function(){
			var me = this;
			me.$el.html(tpl);
		},
		renderPagination          : function (total) {
			var me = this;
			this.$("#pagination").pagination(total, {
				items_per_page: me.pageSize,
				link_to       : 'javascript:;',
				current_page  : me.pageNum,
				callback      : function (page, jq) {
					if (me.pageNum == page) {
					} else {
						me.$('.list_items').remove();
						me.pageNum = page;
					}
					return false;
				}
			});
		}
	});
});
