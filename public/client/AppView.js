var AppView = Backbone.View.extend({
  template: Handlebars.compile(Templates.app),

  initialize: function () {
    this.showview = new ShowView({collection: this.model.get('show')});
    this.headerView = new ShowHeaderView({model: this.model.get('title')});
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

    var title = $(e.currentTarget).find('a').html();
    this.model.get('title').set({"name": title});
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('#show').append(this.headerView.render()).append(this.showview.render());
    return this.el;
  }
});
