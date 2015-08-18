getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "vi";
};

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ libraries: 'places' });
  });
  Status.setTemplate('semantic_ui');

  Push.addListener('token', function (token) {
    //alert(JSON.stringify(token));
    PUSH_TOKEN = token;
    Meteor.call('raix:push-update', {
      appName: "main", // Teamsport
      token: token,
      userId: ""
    }, function(err, result){
      if (err) {
        console.log("ERROR: I am inside raix:push-update call")
      } else {
        console.log("Succesfully added: " + result)
      }
    });

  });
  Accounts.onLogin(function (user) {
    console.log("Setting userId for Push setting");
    Push.appCollection.update({
      token: PUSH_TOKEN
    }, {$set: { userId: user.user._id }});
  });
  TAPi18n.setLanguage(getUserLanguage())
  .done(function () {
    Session.set("showLoadingIndicator", false);
  })
  .fail(function (error_message) {
    // Handle the situation
    console.log(error_message);
  });
  /*Meteor.call('getMongoUrlEnv', function(err, results) {
  alert(results);
});
*/
}
