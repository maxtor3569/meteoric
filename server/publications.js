Meteor.publish('players', function() {
  return Meteor.users.find();
});

Meteor.publish('player', function(_id) {
  return Meteor.users.find({_id: _id});
});
