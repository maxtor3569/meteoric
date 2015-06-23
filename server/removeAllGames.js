if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllPosts: function() {

        return Games.remove({});

      }

    });

  });

}
//call like this : Meteor.call('removeAllPosts')
