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
    path: '/login'
  });
  this.route('map', {
    path: '/'
  });

  this.route('contacts.show', {
    path: '/contacts/:_id'
  });
});

Router.onBeforeAction(function() {
  //GoogleMaps.load({ libraries: 'places' });
  this.next();
}, { only: ['map'] });
