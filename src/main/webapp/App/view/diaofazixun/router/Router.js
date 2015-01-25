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
			'!:type': 'initView',
			'!:type/:id': 'initViewArray'
		},
		initView: function (router) {
			var me = this;
			console.info('initview',router);
			me.view.trigger('init', arguments[0]||'');
		},
		initViewArray: function (router) {
			var me = this;
			console.info('initViewArray',arguments);
			me.view.trigger('init', arguments ||[]);
		},
		main: function () {
			var me = this;
			me.view.trigger('init', arguments[0]||'');
		}
	})
});
