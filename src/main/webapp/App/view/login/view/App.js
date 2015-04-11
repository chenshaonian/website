define(
		[
			'text!../tpl/tpl.tpl'
		]
		, function (tpl) {
			return Backbone.View.extend({
				events: {
					"click .icon": "open",
					"click .button.delete": "destroy"
				},
				initialize: function () {

				}
			});
		});
