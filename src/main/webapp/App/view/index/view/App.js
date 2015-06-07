define([
	'require',
	'text!../tpl/indexTpl.tpl',
	'../router/Router',
    'text!../tpl/news_xinwendongtai_1.html',
    'text!../tpl/news_xinwendongtai_2.html',
    'text!../tpl/news_xinwendongtai_3.html',
    'text!../tpl/news_xinwendongtai_4.html',
], function (require, tpl, Router,
             news_xinwendongtai_1,
             news_xinwendongtai_2,
             news_xinwendongtai_3,
             news_xinwendongtai_4) {

	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
//			'click .movieShow': 'movieShow',
//			'mouseenter  .contentDiv':'contentDivEnter',
//			'mouseleave .contentDiv':'contentDivLeave',
            'click .news-list-item': 'clickNewsItem',
            'click .close-btn':'closeNews',
            'click .layoverdiv':'layoverdiv'
		},
		initialize: function () {
			this.initializeVar();
			this.initializeEl();
			this.initializeEvent();
			this.initializeRouter();
			this.renderView();
			this.initializeNavPosition();
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
        closeNews: function(){
            $('.news-wrap').remove();
        },
        clickNewsItem: function(e) {
            var me = this;
            var $el = $(e.currentTarget);
            var contentId= $el.data('contentId');
            switch (contentId) {
                case 'xinwendongtai_1': me.$el.append(news_xinwendongtai_1);break;
                case 'xinwendongtai_2': me.$el.append(news_xinwendongtai_2);break;
                case 'xinwendongtai_3': me.$el.append(news_xinwendongtai_3);break;
                case 'xinwendongtai_4': me.$el.append(news_xinwendongtai_4);break;
                default: me.$el.append(news_xinwendongtai_1);break;
            }
        },
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
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
			});

//			$(window).on('resize',function(){
//				var windowHeight = $(window).height();
//				var windowWidth = $(window).width();
//				var imgRetio = 1821/839;
//				var retio = windowWidth/windowHeight;
//
//				if (retio > imgRetio) {
//					$('.bgPictureShow .picUl img').css({width: '100%'});
//					console.log('width 100%')
//				} else {
//					$('.bgPictureShow .picUl img').css({height: '100%'});
//					console.log('height 100%')
//				}



//				var clientHeight = document.documentElement.clientHeight;
//				var clientWidth= document.documentElement.clientWidth;
//				var imgOriginRatio = 1821/839;
//				var imgRatio = clientWidth/clientHeight;
//				var imgHeight = $('.imgWrap').height();
//				var imgWidth = $('.imgWrap').width();
//				var navHeight = $('.navbox').height();

//				console.info('clientHeight',clientHeight);
//				console.info('clientWidth',clientWidth);
//				console.info('imgOriginRatio',imgOriginRatio);
//				console.info('imgRatio',imgRatio);
//				console.info('imgWidth',imgWidth);
//				console.info('navbox',navHeight);
//				if(clientHeight-navHeight < 550){
//					console.info('111111111');
//					return;
//				}
//				if(imgWidth == clientWidth && imgRatio < imgOriginRatio){
//					console.info('2222222');
//					var margin = -(clientHeight - 550)/2;
//					var marginValue = margin+'px auto';
//					me.$('.bgPictureShow').css({height: clientHeight-navHeight});
//					$('.bgPictureShow .picUl img').css({margin: marginValue});
//					return;
//				}
//				$('.bgPictureShow').css({height: clientHeight-navHeight});
//				$('.bgPictureShow .picUl img').css({margin: '-10px auto'});
//			});
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
		},
		WindowResize  :function(){
			var me = this;
			var clientHeight = document.documentElement.clientHeight ;
			console.info(clientHeight);
		}
	});
});
