/**
 * Created by Bernie-pc on 15-4-11.
 */
define([
    'require',
	'text!../tpl/shishangqianyanSub.html',

    'text!../tpl/news_lirengushi_1.html',
    'text!../tpl/news_lirengushi_2.html',
    'text!../tpl/news_meifamiji_1.html',
    'text!../tpl/news_meifamiji_2.html',
    'text!../tpl/news_meifamiji_3.html',
    'text!../tpl/news_meifamiji_4.html',
    'text!../tpl/news_meifamiji_5.html',
    'text!../tpl/news_meifamiji_6.html',
    'text!../tpl/news_shishangyizhuang_1.html',
    'text!../tpl/news_shishangyizhuang_2.html',
    'text!../tpl/news_zhiganzhuangrong_1.html',
    'text!../tpl/news_zhiganzhuangrong_2.html',
],function (require, shishangqianyanSub,
            news_lirengushi_1,
            news_lirengushi_2,
            news_meifamiji_1,
            news_meifamiji_2,
            news_meifamiji_3,
            news_meifamiji_4,
            news_meifamiji_5,
            news_meifamiji_6,
            news_shishangyizhuang_1,
            news_shishangyizhuang_2,
            news_zhiganzhuangrong_1,
            news_zhiganzhuangrong_2
    ){
	return Backbone.View.extend({
		className: 'content',
		events: {
//			'click .content-main-nav-item': 'clickItem'
			'click #meifamiji2': 'clickMeifamiji',
			'click #shishangyizhuang2': 'clickShishangyizhuang',
			'click #zhiganzhuangrong2': 'clickZhiganzhuangrong',
			'click #lirengushi2': 'clickLirengushi',
			'click .newsItem': 'showDetailNews',
			'click .close-btn':'closeNews',
            'click .article-introduction-item': 'clickArticleItem'

		},
		initialize: function (data) {
			var me = this;
			me.id = data.nextid + '2'|| '';
			this.initializeVar();
			this.initializeEl();
//			this.initializeEvent();
//			this.initializeRouter();
//			this.initializeNavPosition();
			me.showView();
		},
		initializeVar: function () {
			var me = this;
		},
		initializeEl: function () {
			var me = this;
		},
		initializeRouter: function () {
			var me = this;
			me.router = new Backbone.Router.extend({
				initialize: function () {
					Backbone.history.start();
				},
				routes: {
					"*": "main",
					'!:id': 'initView'
				},
				initView: function (router) {
					me.trigger('init', arguments[0]||'');
				},
				main: function () {
					me.trigger('init', arguments[0]||'');
				}
			});
		},
		initializeEvent  :function(){
			var me = this;
			var view;
			me.on('init', function(router){
				console.log('int', router)
				switch (router) {
					case 'shishangqianyan/meifamiji':
						me.showView('meifamiji');
						break;
					case 'shishangqianyan/shishangyishang':
						me.showView('shishangyishang');
						break;
					case 'shishangqianyan/zhiganzhuangrong':
						me.showView('zhiganzhuangrong');
						break;
					case 'shishangqianyan/lirengushi':
						me.showView('lirengushi');
						break;
					default :
						me.showView('meifamiji');
				}
			})
		},
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
		},
		clickItem: function (e){
			var $el = $(e.currentTarget);
			console.log('id', $el.id);
		},
		clickMeifamiji: function (){
			var me = this;
			me.contentShow('meifamiji2');

		},
		clickShishangyizhuang: function (){
			var me = this;
			console.log('123')
			me.contentShow('shishangyizhuang2');
		},
		clickZhiganzhuangrong: function (){
			var me = this;
			me.contentShow('zhiganzhuangrong2');
		},
		clickLirengushi: function (){
			var me = this;
			me.contentShow('lirengushi2');
		},
		showView: function(id) {
			var me = this;
			me.$el.html(shishangqianyanSub);
			setTimeout(function(){
				me.contentShow(me.id)
			}, 100);
		},
		contentShow: function (id){
			var me = this;
			me.id = id;
			var showNavId = id + 'mask';
			var showContentId = id + '-main';
			console.log(',showContentId', showContentId)
			console.log(',showNavId', showNavId)
			$('#'+showNavId).addClass('clicked').siblings().removeClass('clicked');
			$('#'+showContentId).show().siblings().hide();
//			me.getNews();
		},
		getNews: function(){
			var me = this;
			var url = 'getNewsList/'+me.id.substr(0, me.id.length-1) || '';
			me.showDetailNews();
//			$.ajax({
//				url:url,
//				success: function(data){
//
//				},
//				error:function(){
//
//				}
//			})
		},
        clickArticleItem: function (e){
            var me = this;
            var $el = $(e.currentTarget);
            var contentId = $el.data('contentId');
            console.log(contentId)
            var tplId = 'news_'+contentId;
            switch (tplId) {
                case 'news_lirengushi_1': me.$el.append(news_lirengushi_1);break;
                case 'news_lirengushi_2': me.$el.append(news_lirengushi_2);break;
                case 'news_meifamiji_1': me.$el.append(news_meifamiji_1);break;
                case 'news_meifamiji_2': me.$el.append(news_meifamiji_2);break;
                case 'news_meifamiji_3': me.$el.append(news_meifamiji_3);break;
                case 'news_meifamiji_4': me.$el.append(news_meifamiji_4);break;
                case 'news_meifamiji_5': me.$el.append(news_meifamiji_5);break;
                case 'news_meifamiji_6': me.$el.append(news_meifamiji_6);break;
                case 'news_shishangyizhuang_1': me.$el.append(news_shishangyizhuang_1);break;
                case 'news_shishangyizhuang_2': me.$el.append(news_shishangyizhuang_2);break;
                case 'news_zhiganzhuangrong_1': me.$el.append(news_zhiganzhuangrong_1);break;
                case 'news_zhiganzhuangrong_2': me.$el.append(news_zhiganzhuangrong_2);break;
                default : me.$el.append(news_lirengushi_1);break;
            }
//            require(['text!../tpl/'+tplId], function (view) {
//                console.info('require view');
//                view = new view();
//                me.$el.html(view.$el);
//            });
            me.$el.append('news_' + contentId)
        },
		showDetailNews: function(e){
			var me  = this;
            var $el = $(e.currentTarget);
            var contentId = $el.data('contentId');
            console.log(e)
			me.$el.append('content_' + contentId)
		},
		closeNews: function(){
			console.log('213')
			$('.news-wrap').remove();
		}
	})
})