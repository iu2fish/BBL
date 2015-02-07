
var Workspace = Backbone.Router.extend({
	routes:{
		'*filter':'setFillter'
	},
	setFilter: function () {
		window.app.Todos.trigger('filter');
	}
});

app.TodoRouter = new Workspace();
Backbone.history.start();