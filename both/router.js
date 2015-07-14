Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('playerList', {
    path: '/players'
  });

  this.route('players.show', {
    path: '/player/:_id'
  });
  this.route('userAccounts', {
    path: '/login',
    onBeforeAction: function () {
      if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
          Router.go('userAccounts');
        }
        else{
          this.next();
          //Router.go('userAccounts');
        }
      }
    }
  });
  this.route('signup', {
    path: '/signup',
    onBeforeAction: function () {
      if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
          Router.go('userAccounts');
        }
        else{
          this.next();
          //Router.go('userAccounts');
        }
      }
    }
  });
  this.route('signOut', {
     path: '/logout',
     onBeforeAction: function () {
       if (Meteor.userId()) {
         Meteor.logout()
       }
       this.next();
     },
     onAfterAction: function () {
       this.redirect('/');
     }
   });
  this.route('map', {
    path: '/'
  });

  this.route('contacts.show', {
    path: '/contacts/:_id'
  });

  this.route('messages', {
    path: '/messages'
  });
});

Router.onBeforeAction(function() {
  //GoogleMaps.load({ libraries: 'places' });
  this.next();
}, { only: ['map'] });
