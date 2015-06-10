Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  download: function(userId) {
    return true;
  }
});

Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('players', function() {
  return Meteor.users.find();
});

Meteor.publish('sports', function() {
  console.log(Sports.find());
  return Sports.find();
});

Meteor.publish('player', function(_id) {
  return Meteor.users.find({_id: _id});
});
