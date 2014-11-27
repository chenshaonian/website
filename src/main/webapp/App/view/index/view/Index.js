/**
 * Created by BBBernie on 2014/9/12.
 */
define([
	'text!../tpl/indexTpl.tpl',
	'mockjax'
], function (indexTpl) {

	return Backbone.View.extend({
		events          : {

		},
		initialize      : function () {
			var me = this;
			me.initializeVar();
			me.initializeEl();
			me.myRender();
		},
		initializeVar   : function () {
			var me = this;

		},
		initializeEl    : function () {
			var me = this;
		},
		myRender  :function(){
			var me = this;
			me.$el.html(indexTpl);
		}
	})
});