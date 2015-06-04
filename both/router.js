Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('contacts', {
    path: '/contacts'
  });
  this.route('map', {
    path: '/'
  });

  this.route('contacts.show', {
    path: '/contacts/:_id'
  });
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['map'] });
