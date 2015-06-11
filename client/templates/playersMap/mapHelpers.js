Template.map.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      if(Geolocation.latLng()!= null)
      {
        var lat = Geolocation.latLng().lat;
        var lng = Geolocation.latLng().lng;

        GoogleMaps.maps.exampleMap.instance.setCenter(new google.maps.LatLng(lat,lng));
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat,lng),
          map: GoogleMaps.maps.exampleMap.instance
        });
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

Template.map.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('games');
    this.subscription = Meteor.subscribe('images');
  }.bind(this));
};

Template.map.rendered = function() {
    this.subscription = Meteor.subscribe('games');
    this.subscription = Meteor.subscribe('images');

    this.markerObserve = Games.find({}).observe({
        added: function(m) {
          var image_profile = null;
          var picture_id = null;
          if(Meteor.users.findOne({_id: m.user}))
            var picture_id = Meteor.users.findOne({_id: m.user}).profile.picture;

          Meteor.subscribe('images', function(){
            image_profile = Images.findOne({_id : picture_id});//XFpQzWJkXvtzqdAXj
            if(image_profile != null)
            {
              GoogleMaps.ready('exampleMap', function(map) {
                var marker = new google.maps.Marker({
                  position: new google.maps.LatLng('40','40'),
                  map: GoogleMaps.maps.exampleMap.instance,
                  icon: image_profile.url({store: 'thumbs_maps'})
                });
              });


            }
          });




        }
    });
};

Template.map.destroyed = function() {
    this.markerObserve.stop();
}
