if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ libraries: 'places' });
  });
  Status.setTemplate('semantic_ui');
  /*Meteor.call('getMongoUrlEnv', function(err, results) {
    alert(results);
  });
  */
}
