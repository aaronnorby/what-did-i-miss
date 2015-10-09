var ShowHeaderView = Backbone.View.extend({
  template: Handlebars.compile(Templates.title),

  initialize: function() {
    this.model.on('change', this.render, this);    
  },

  model: ShowHeader,

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.el;
  }

});
