define(['text!../tpl/indexTpl.tpl', '../data/Data', 'lazyload'], function (tpl, data) {
	return Backbone.View.extend({
		events: {

		},
		initialize: function () {
			this.$el.html(tpl);
		}
	});
});
