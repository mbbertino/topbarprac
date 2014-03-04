
var TopBarView = Backbone.View.extend({
	className: 'topbar',

	template: _.template($('#topbar-template').text()),

	initialize: function(){
		this.listenTo(this.model, 'change', this.render);

		$('body').prepend( this.el );
		this.render();

		// thislets this view listen to changes made in the user model in our main-view.js
	},

	render: function () {
		this.$el.html( this.template({user: this.model}))
	}
})