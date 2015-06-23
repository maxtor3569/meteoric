Template.map.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {

      if(Geolocation.latLng()!= null)
      {
        var lat = Geolocation.latLng().lat;
        var lng = Geolocation.latLng().lng;

        GoogleMaps.maps.exampleMap.instance.setCenter(new google.maps.LatLng(lat,lng));
        /*var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat,lng),
          map: GoogleMaps.maps.exampleMap.instance
        });*/
      }

      // Map initialization options
      return {
        center: new google.maps.LatLng(33,33),
        zoom: 8
      };
    }
  },
  images: function() {


  }

});

Template.map.onCreated(function() {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('games');
    this.subscription = Meteor.subscribe('images');
    this.subscription = Meteor.subscribe('sports');
    this.subscription = Meteor.subscribe('places');

  }.bind(this));

  this.markerObserve = Games.find({}).observe({
      added: function(m) {
        //console.log('oberseve added in');
        var image_profile = null;
        var picture_id = null;
        if(Meteor.users.findOne({_id: m.user}))
          var picture_id = Meteor.users.findOne({_id: m.user}).profile.picture;

        Meteor.subscribe('images', function(){
          //console.log('images subscirbe in');
          image_profile = Images.findOne({_id : picture_id});//XFpQzWJkXvtzqdAXj
          if(image_profile != null)
          {
            GoogleMaps.ready('exampleMap', function(map) {
              //console.log(m);
              var place = Places.findOne({_id: m.place});
              //console.log(place);
              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(place.lat,place.lon),
                map: map.instance,
                icon: image_profile.url({store: 'thumbs_maps'})
              });

              map.instance.fitBounds(map.instance.getBounds());
              //new google.maps.event.clearListeners(map); not work
              map.instance.setCenter(new google.maps.LatLng(place.lat,place.lon));
              map.instance.setZoom(15);


            });


          }
        });


      }
  });


});

Template.map.rendered = function() {
    this.subscription = Meteor.subscribe('games');
    this.subscription = Meteor.subscribe('images');
    this.subscription = Meteor.subscribe('sports');
    this.subscription = Meteor.subscribe('places');


};

Template.map.destroyed = function() {
    this.markerObserve.stop();
}
