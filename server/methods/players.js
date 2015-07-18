Meteor.methods({
  autoFormCreateUser: function (formDoc, e) {
      check(formDoc, Schemas.User);
      console.log(formDoc);

      return Accounts.createUser(formDoc);
  },
  autoFormCreateUserStep2: function (formDoc, e) {
    return;
  }
});
