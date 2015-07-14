if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ libraries: 'places' });
  });
}
