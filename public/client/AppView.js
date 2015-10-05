var AppView = Backbone.View.extend({
  template: Handlebars.compile(Templates.app),

  initialize: function () {
    this.showview = new ShowView({collection: this.model.get('show')});
  },

  events: {
    'click .menu-item': 'swap'
  },


  swap: function(e) {
    var id = $(e.currentTarget).data('showid');
    this.model.get('show').url = '/api/stories/' + id;
    this.model.get('show').fetch();
    $('.selected').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('#show').append(this.showview.render());
    return this.el;
  }
});
