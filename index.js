/**
 * 
 * @authors iu2fish wfenng@gmail.com
 * @date    2014-11-16 16:07:50
 * @version 0.0.1
 */

(function(){
	var Man = Backbone.Model.extend({
		initialize: function () {
			alert('Hey, you creat me!');

			this.bind('change:name', function () {
				var name = this.get('name');
				alert('你改变了name的属性为：'+ name);
			});
			this.bind('error', function (model, error) {
				alert(error);
			});
		},
		defaults: {
			name: 'iu2fish',
			age: '24'
		},
		validate: function (attributes) {
			if (attributes.name == ' ') {
				return 'name 不能为空';
			};
		},
		aboutMe: function () {
			return 'my name is ' + this.get('name') + ' and my age is ' + this.get('age');
		}
	});

	var man = new Man;
	man.set({name:' '})
})(jQuery);