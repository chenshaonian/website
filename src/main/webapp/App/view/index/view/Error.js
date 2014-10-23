/**
 * Created by BBBernie on 2014/9/15.
 */
define([
	'text!../tpl/errorTpl.tpl'
], function (errorTpl) {
	return Backbone.View.extend({
		events    : {
			'click #closeBtn' :'closeBtnClicked'
		},
		initialize: function () {
			var me = this;
			me.$el.html(errorTpl)
		},
		closeBtnClicked  :function(){

		}
	})

})