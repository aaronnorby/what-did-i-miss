var AppView = Backbone.View.extend({
  template: Handlebars.compile(Templates.app),

  initialize: function () {
    this.showview = new ShowView({collection: this.model.get('show')});
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('#show').append(this.showview.render());
    return this.el;
  }
});
