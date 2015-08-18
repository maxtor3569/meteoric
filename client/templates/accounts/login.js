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
        //console.log(err);
        if(err.reason == 'Incorrect password' || err.error == 400)
          jQuery('#errors-login').html('Mật khẩu hoặc email là sai');
        if(err.reason =='User not found')
          jQuery('#errors-login').html('Người sử dụng không được tìm thấy');
      }else{
        Router.go('map');
      }
    });
  }
  });
