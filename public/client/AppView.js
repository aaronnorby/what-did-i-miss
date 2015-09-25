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


// 'click .atc': this.swap('atc'),
//     'click .me': this.swap('me'),
//     'click .fa': this.swap('fa'),
//     'click .han': this.swap('han'),
//     'click .lusa': this.swap('lusa'),
//     'click .wesat': this.swap('wesat'),
//     'click .wesun': this.swap('wesun')
