/**
 * Created by BBBernie on 2014/10/23.
 */
define([

],function(){
	return Backbone.Router.extend({
		initialize: function (view) {
			var me = this;
			me.view = view;
			console.info('init router');
			Backbone.history.start();
		},
		routes: {
			"": "main",
			'!meifamiji/:id': 'meifamijiView',
			'!shishangyizhuang/:id': 'shishangyizhuangView',
			'!zhiganzhuangrong/:id': 'zhiganzhuangrongView',
			'!lirengushi/:id': 'lirengushiView',
			'!:id': 'initView'
		},
		meifamijiView : function (router){
			var me = this;
			console.info(router)
			me.view.trigger('news', arguments[0]||'');
		},
		shishangyizhuangView : function (router){
			var me = this;
			console.info(router)
			me.view.trigger('news', arguments[0]||'');
		},
		zhiganzhuangrongView : function (router){
			var me = this;
			console.info(router)
			me.view.trigger('news', arguments[0]||'');
		},
		lirengushiView : function (router){
			var me = this;
			console.info(router)
			me.view.trigger('news', arguments[0]||'');
		},
		initView: function (router) {
			var me = this;
			me.view.trigger('init', arguments[0]||'');
		},
		main: function () {
			var me = this;
			me.view.trigger('init', arguments[0]||'');
		}
	})
});
