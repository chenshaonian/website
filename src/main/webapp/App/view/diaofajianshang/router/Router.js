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
			'!:id': 'initView'
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
