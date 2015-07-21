Template.userAccounts.events({
  'submit #signIn': function(e, t) {
    e.preventDefault();

    var email = e.target.email.value,
    password = e.target.password.value
    ;
    Meteor.loginWithPassword(email, password, function(err){
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        new Error('Did not work');
      }else{
        Router.go('map');
      }
    });
  }
  });
