var StoryView = Backbone.View.extend({

  render: function() {
    
    this.$el.html(this.model.get('title'));
    return this.el;
  }
});
