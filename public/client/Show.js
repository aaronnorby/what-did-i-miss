var Show = Backbone.Collection.extend({
  // hardcode All Things Considered for testing
  url: '/api/stories/2',

  initialize: function() {
    this.fetch();
  },

  model: StoryModel
});
