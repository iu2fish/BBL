/**
 *
 * @authors iu2fish wfenng@gmail.com
 * @date    2014-11-27 22:19:45
 * @version 0.0.1
 */

var app = app || {};


var TodoList = Backbone.collection.extend({
  model: app.Todo,
  completed: function() {
    return this.fillter(function (todo) {
      return todo.get('completed');
    });
  },

  remaining: function() {
    return this.without.apply(this, this.completed());
  },

  nextOrder: function() {
    if(!this.length){
      return 1;
    }
    return this.last().get('order') + 1；
  }，
  comparator:function(todo) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();
