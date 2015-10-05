var Show = Backbone.Collection.extend({
  // hardcode All Things Considered for testing
  url: '/',

  initialize: function() {
    this.fetch();
  },

  model: StoryModel
});
