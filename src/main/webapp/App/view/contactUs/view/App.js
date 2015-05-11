define([
	'require',
	'text!../tpl/tpl.html',
	'../router/Router'
], function (require, tpl, Router) {
	return Backbone.View.extend({
		el: $('#wrap'),
		events: {
            'click #submitBtn': 'submit'
		},
		initialize: function () {
			console.info('init app');
			this.renderView();
			this.initializeVar();
			this.initializeEl();
			this.initializeNavPosition();
		},
		initializeVar: function () {
			var me = this;
		},
		initializeEl: function () {
			var me = this;
		},
		initializeNavPosition  :function(){
			var me = this;
			var navHeight = $('.navbox').height();
			$('.headSubDiv ').css({top: navHeight});
		},
		initializeRouter: function () {
			var me = this;
			me.router = new Router(me);
		},
		initializeEvent  :function(){
			var me = this;
			var view;
		},
        submit: function () {
            var msg = $('#message').val();
            var name = $('#name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            $.ajax({
                url: '/zaixianliuyan/setZaixianliuyanDetail',
                method: 'post',
                data: {
                    name: name,
                    phone: phone,
                    emai: email,
                    message: msg
                },
                success: function (data){
                    if(data.status == 0) {
                        return alert('提交成功，我们会尽快与你联系..');
                    }
                    return alert('提交失败，请稍后再试...')
                },
                error: function(){
                    alert('该功能尚未开放，请直接电话联系我们')
                }
            })
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
