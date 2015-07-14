AutoForm.addHooks(['signIn'], {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
        this.event.preventDefault();
        console.log('in');
        var email = updateDoc.$set.email;
        var password = updateDoc.$set.password;
        var that = this;

        Meteor.loginWithPassword(email, password, function(err){
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        that.done(new Error('Did not work'));
      }else{
        // The user has been logged in.
        that.done();
      }
    });
    },
  onSuccess: function (operation, result, template) {
    Router.go('map');
  },
  onError: function(operation, error, template) {
    //alert('Error');
    //console.log(error);
  }
});
