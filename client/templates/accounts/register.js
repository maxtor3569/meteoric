Template.signup.helpers({
  userSchema: function () {
    return Schema.User;
  },


});
//testing purpose
Template.signup.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('players');
  }.bind(this));
};

Template.signup.events({
  'submit #signUp': function(e, t) {
    e.preventDefault();

    var email = e.target.email.value,
    password = e.target.password.value
    ;
    var profile = {firstName:e.target.firstName.value,lastName:e.target.lastName.value};

    Accounts.createUser(
      {
        email: email,
        password: password,
        profile: profile
      }, function(err) {
        if (err)
        console.log(err);
        else
          Router.go('map');
      });
      return false;
    }
  });
