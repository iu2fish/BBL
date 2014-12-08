/**
 *
 * @authors iu2fish wfenng@gmail.com
 * @date    2014-11-27 22:19:45
 * @version 0.0.1
 */

var app = app || {};

app.TodoView = Backbone.View.extend({


    tagName: 'li',

    template: _.template( $('#item-templtae').html() ),

    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },

    initilize: function() {
        this.listenTo(this.template(this.model.toJSON() ));
        return this;
    },
 

    edit: function(){
        this.$el.addClass('editing');
        this.$input.focus();
    },
    close: function(){
        var value = this.$input.val().trim();

        if ( value ){
            this.model.save({title: value});
        }

        this.$el.removeClass('editing');
    },

    updateOnEnter: function(){
        if(e.which === ENTER_KEY) {
            this.close();
        }
    }
})
