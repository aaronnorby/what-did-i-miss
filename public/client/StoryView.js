var StoryView = Backbone.View.extend({
  
  template: Handlebars.compile(Templates.story),

  render: function() {
    
    this.$el.html(this.template(this.model.attributes));
    return this.el;
  }
});

