Meteor.publish('contacts', function() {
  return Contacts.find();
});

Meteor.publish('player', function(_id) {
  return Players.find({_id: _id});
});
