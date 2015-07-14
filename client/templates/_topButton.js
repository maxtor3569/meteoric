Template._topButton.helpers({
  player: function () {
    var template = Template.instance();
    //console.log(template.data);
    var game = Games.findOne({_id: template.data});

    return Meteor.users.findOne({_id: game.user});
    //return ;
  },
  picture: function () {
    var template = Template.instance();
    var game = Games.findOne({_id: template.data});
    return Images.findOne(Meteor.users.findOne({_id: game.user}).profile.picture); // Where Images is an FS.Collection instance
  },

});
