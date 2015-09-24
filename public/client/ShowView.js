var ShowView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.html('').append(
        this.collection.map(function(story) {
          return new StoryView({model: story}).render();
        })
    );     
    return this.el;
  }
});



