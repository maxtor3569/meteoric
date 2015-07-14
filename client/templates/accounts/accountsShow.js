Template.playersShow.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('player', Router.current().params._id);
    this.subscription = Meteor.subscribe('sports');
    this.subscription = Meteor.subscribe('images');
  }.bind(this));
};

Template.playersShow.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.playersShow.helpers({
  player: function () {
    //console.log(Meteor.users.findOne({_id: Router.current().params._id}));
    return Meteor.users.findOne({_id: Router.current().params._id});
  },
  get_sport_label: function(id)
  {
    return  Sports.findOne({_id: id}).label;
  },

  picture: function () {
    return Images.findOne(Meteor.users.findOne({_id: Router.current().params._id}).profile.picture); // Where Images is an FS.Collection instance
  },

  activeLabel: function () {
    if (this.details.active) {
      return '<i class="ion-checkmark-circled"></i> Active';
    } else {
      return '<i class="ion-minus-circled"></i> Inactive';
    }
  }
});

Template.playersShow.events({
  'click [data-action=fake]': function (event, template) {
    event.preventDefault();
    alert('Gotcha!');
  }
});
