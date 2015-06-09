Template._contactsEdit.helpers({
  player: function () {
    var template = Template.instance();
    console.log(template.data);
    return Meteor.users.findOne({_id: template.data.id});
  }
});

AutoForm.hooks({
  'contacts-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
