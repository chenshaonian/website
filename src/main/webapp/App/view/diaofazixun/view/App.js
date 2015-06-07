define([
	'require',
	'text!../tpl/tpl.html',
    'text!../tpl/chanpinzixun.html',
    'text!../tpl/xinwendongtai.html',
    'text!../tpl/newsTpl.html',
	'../router/Router',
	'../mock/mockajax',
    'text!../tpl/news_chanpinzixun_1.html',
    'text!../tpl/news_chanpinzixun_2.html',
    'text!../tpl/news_chanpinzixun_3.html',
    'text!../tpl/news_chanpinzixun_4.html',
    'text!../tpl/news_chanpinzixun_5.html',
    'text!../tpl/news_chanpinzixun_6.html',
    'text!../tpl/news_xinwendongtai_1.html',
    'text!../tpl/news_xinwendongtai_2.html',
    'text!../tpl/news_xinwendongtai_3.html',
    'text!../tpl/news_xinwendongtai_4.html',
    'text!../tpl/news_xinwendongtai_5.html',
    'text!../tpl/news_xinwendongtai_6.html',


    'pagination'

], function (require, tpl, chanpinzixuntpl,  xinwendongtaitpl, newsTpl, Router, mockajax,
             news_chanpinzixun_1,
             news_chanpinzixun_2,
             news_chanpinzixun_3,
             news_chanpinzixun_4,
             news_chanpinzixun_5,
             news_chanpinzixun_6,
             news_xinwendongtai_1,
             news_xinwendongtai_2,
             news_xinwendongtai_3,
             news_xinwendongtai_4,
             news_xinwendongtai_5,
             news_xinwendongtai_6
    ) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
			'click .content-nav-item': 'navClick',
            'click .chanpinzixun-item': 'chanpinzixunClick',
            'click .xinwendongtai-item': 'xinwendongtaiClick',
            'click .close-btn':'closeNews'

//			'mouseenter  .contentDiv':'contentDivEnter',
//			'mouseleave .contentDiv':'contentDivLeave'
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
			/**
			 * 每页显示多少条消费历史
			 * @type {number}
			 */
			me.pageSize = 11;
			/**
			 * 当前消费历史为第几页,索引从0开始
			 * @type {number}
			 */
			me.pageNum = 0;
            me.xinwendongtaimocklist = [
                {
                    id: 'xinwendongtai_1',
                    date: '2015年05月28日',

                    title: '邓小平扮演者江世龙亲临戴丝诺定制造型'
                },{
                    id: 'xinwendongtai_2',
                    date: '2015年04月18日',
                    title: '香港美女主播安娜化身戴丝诺雕发女神'
                },{
                    id: 'xinwendongtai_3',
                    date: '2015年03月08日',
                    title: '戴丝诺携手万科举办百变女人节炫动鹏城'
                },{
                    id: 'xinwendongtai_4',
                    date: '2015年01月20日',
                    title: '戴丝诺联合美薇时尚会所举办名媛发艺沙龙'
                },{
                    id: 'xinwendongtai_5',
                    date: '2015年01月01日',
                    title: '戴丝诺全国连锁构局之缘系浪漫之城珠海'
                },{
                    id: 'xinwendongtai_6',
                    date: '2014年11月11日',
                    title: '戴丝诺全国连锁构局之穿越古都西安'
                }
            ];
            me.chanpinzixunmocklist = [
                {
                    id: 'chanpinzixun_1',
                    date: '2015年05月25日',
                    title: '美国华裔教授发现有望治疗男性脱发的新方法'
                },{
                    id: 'chanpinzixun_2',
                    date: '2015年04月10日',
                    title: '简单按摩手法有助于护发养发'
                },{
                    id: 'chanpinzixun_3',
                    date: '2015年03月16日',
                    title: '50至55岁长白发是身体健康的标志'
                },{
                    id: 'chanpinzixun_4',
                    date: '2015年01月05日',
                    title: '儿童“压力山大”的危害不容忽视'
                },{
                    id: 'chanpinzixun_5',
                    date: '2014年12月08日',
                    title: '脱发解决方案时尚健康大盘点'
                },{
                    id: 'chanpinzixun_6',
                    date: '2014年11月17日',
                    title: '为什么年轻人的头发容易脱发'
                }
            ];
//			new mockajax();
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
			me.on('init', function(router) {
				console.info('init', router);
				if (typeof router != 'string') {
					console.info(router);
					var type = router[0];
					var id = router[1];
					if(type == 'xinwendongtai'){
						me.getDetailList(type, id);
					}else if(type == 'chanpinzixun'){
						me.getDetailList(type, id);
					}

				}else{
					console.info(router);
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
				}
			})
		},
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
		},
        chanpinzixunClick: function (e) {
            var me = this;
            var $el = $(e.currentTarget);
            var contentId= $el.data('itemId');
//            me.$el.append(newsTpl);
//            if(contentId === 'chanpinzixun_1') {
//                alert('chanpinzixun_1111111111111')
//               $('#wrap').append('123');
//            } else if (contentId === 'chanpinzixun_2') {
//                alert('chanpinzixun_2')
//                me.$el.append(news_chanpinzixun_2);
//            }else if (contentId === 'chanpinzixun_3') {
//                return me.$el.append(news_chanpinzixun_3);
//            }else if (contentId === 'chanpinzixun_4') {
//                return me.$el.append(news_chanpinzixun_4);
//            }else if (contentId === 'chanpinzixun_5') {
//                return me.$el.append(news_chanpinzixun_5);
//            }else if (contentId === 'chanpinzixun_6') {
//                return me.$el.append(news_chanpinzixun_6);
//            }
            switch (contentId) {
                case 'chanpinzixun_1':  me.$el.append(news_chanpinzixun_1);break;
                case 'chanpinzixun_2': me.$el.append(news_chanpinzixun_2);break;
                case 'chanpinzixun_3': me.$el.append(news_chanpinzixun_3);break;
                case 'chanpinzixun_4': me.$el.append(news_chanpinzixun_4);break;
                case 'chanpinzixun_5': me.$el.append(news_chanpinzixun_5);break;
                case 'chanpinzixun_6': me.$el.append(news_chanpinzixun_6);break;
                default: me.$el.append(news_chanpinzixun_1);break;
            }

        },
        xinwendongtaiClick: function (e) {
            var me = this;
            var $el = $(e.currentTarget);
            var contentId= $el.data('itemId');
            switch (contentId) {
                case 'xinwendongtai_1': me.$el.append(news_xinwendongtai_1);break;
                case 'xinwendongtai_2': me.$el.append(news_xinwendongtai_2);break;
                case 'xinwendongtai_3': me.$el.append(news_xinwendongtai_3);break;
                case 'xinwendongtai_4': me.$el.append(news_xinwendongtai_4);break;
                case 'xinwendongtai_5': me.$el.append(news_xinwendongtai_5);break;
                case 'xinwendongtai_6': me.$el.append(news_xinwendongtai_6);break;
                default: me.$el.append(news_xinwendongtai_1);break;
            }
        },
        closeNews: function(){
            $('.news-wrap').remove();
        },
		getDetailList  :function(type, id){
			var me = this;
			var ajaxUrl;
			type = type ||'';
			id = id || '';
			ajaxUrl = '/' + type + '/'+ id ;
			return console.info(ajaxUrl);
			$.ajax({
				url: ajaxUrl,
				method:'post',
				data:{

				},
				dataType: 'json',
				success: function(data){
					console.log(data);
				},
				error: function(err){
					console.log(err);
				}
			})
		},
		navClick  :function(e){
			var me = this;
			var $el = $($(e.currentTarget)[0]);
			var elId= $el[0].id;
			var router = '#!' + elId;
			me.initializeVar();
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
							var totalPage = data.totalPage;
							var dataList = data.data.list;
							me.$('.content-xinwendongtai-right').html(_.template(xinwendongtaitpl, {data: dataList}));
							me.renderPagination(totalPage, id);
						}else{
							me.$('.content-xinwendongtai-right').html('暂时无法查看新闻动态');
							me.renderPagination(0, id);
						}
					},
					error: function(err){
						console.log(err);
						me.$('.content-xinwendongtai-right').html(_.template(xinwendongtaitpl, {data: me.xinwendongtaimocklist}));
						me.renderPagination(0, id);
					}
				})
			}else if(id == 'chanpinzixun'){
				$.ajax({
					url:'/getChanpinzixunList1',
					method:'post',
					data:{
						pageNum : me.pageNum + 1,
						pageSize: me.pageSize
					},
					dataType: 'json',
					success: function(data){
						console.log(data);
                        me.$('.content-chanpinzixun-left').html('敬请期待...');
                        return me.renderPagination(0, id);
                        //hardcode 逻辑，先显示无列表
						if(data.status == 0 && data.data){
							var totalPage = data.totalPage;
							var dataList = data.data.list;
							me.$('.content-chanpinzixun-left').html(_.template(chanpinzixuntpl, {data: dataList}));
							console.info('id>>>>>>', id);
							me.renderPagination(totalPage, id);
						}else{
							me.$('.content-chanpinzixun-left').html('暂时无法查看新闻动态');
							me.renderPagination(0, id);
						}
					},
					error: function(err){
						console.log(err);
						me.$('.content-chanpinzixun-left').html(_.template(chanpinzixuntpl, {data: me.chanpinzixunmocklist}));
						me.renderPagination(0, id);
					}
				})
			}
		},
		renderView  :function(){
			var me = this;
			me.$el.html(tpl);
		},
		renderPagination          : function (total, id) {
			var me = this;
			var paginationId;
			console.info(id);
			if(id == 'xinwendongtai'){
				paginationId = 'xw_pagination';
			}else if(id == 'chanpinzixun'){
				paginationId = 'cp_pagination';
			}
			console.info('paginationid',paginationId);
			console.info('total',total);
			this.$("#"+paginationId).pagination(total, {
				items_per_page: me.pageSize,
				link_to       : 'javascript:;',
				current_page  : me.pageNum,
				callback      : function (page, jq) {
					if (me.pageNum == page) {
					} else {
						me.$('.list_items').remove();
						me.pageNum = page;
						me.getDataList(id);
					}
					return false;
				}
			});
		}
	});
});
