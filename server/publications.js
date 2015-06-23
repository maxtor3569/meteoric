Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('players', function() {
  return Meteor.users.find();
});

Meteor.publish('sports', function() {
  return Sports.find();
});

Meteor.publish('player', function(_id) {
  return Meteor.users.find({_id: _id});
});

Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('places', function() {
  return Places.find();
});
