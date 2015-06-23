Template.playerList.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('player', Router.current().params._id);
    this.subscription = Meteor.subscribe('sports');
    this.subscription = Meteor.subscribe('images');
  }.bind(this));
};
Template.playerList.helpers({
  players: function () {
    return Meteor.users.find();
  },
  picture: function (id_player) {
    var player = Meteor.users.findOne({_id: id_player});
    var image = Images.findOne(player.profile.picture);

    if(image)
      return image.url();
    //return  // Where Images is an FS.Collection instance
  },
});
