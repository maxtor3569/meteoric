Template.map.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      //load all current players position
      GoogleMaps.ready('exampleMap', function(map) {
        var players = Meteor.users.find();
        players.forEach(function(entry) {
            //console.log(entry);
            if(entry.profile.loc)
            {
              var lat = entry.profile.loc.coordinates[0];
              var lng = entry.profile.loc.coordinates[1];
              var picture_id = entry.profile.picture;

              image_profile = Images.findOne({_id : picture_id});//XFpQzWJkXvtzqdAXj
              map.instance.setCenter(new google.maps.LatLng(lat,lng));
              if(image_profile)
              {
                var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(lat,lng),
                  map: map.instance,
                  user: entry,
                  icon: image_profile.url({store: 'thumbs_maps'})
                });
              }
              else
              {
                var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(lat,lng),
                  map: map.instance,
                  user: entry
                });
              }

              new google.maps.event.addListener(marker, 'click', function() {
                IonModal.open('_markerDialog',entry);
              });

            }
        });

      });


      // Map initialization options
      return {
        center: new google.maps.LatLng(33,33),
        zoom: 15
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

    /*this.markerObserve = Games.find({}).observe({
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
                game: m._id,
                icon: image_profile.url({store: 'thumbs_maps'})
              });

              map.instance.fitBounds(map.instance.getBounds());
              //new google.maps.event.clearListeners(map); not work
              //  map.instance.setCenter(new google.maps.LatLng(place.lat,place.lon));
              //map.instance.setZoom(15);

              new google.maps.event.addListener(marker, 'click', function() {
                IonModal.open('_markerDialog',this.game);
              });


            });


          }
        });


      }
    });*/
    this.markerObserve = Places.find({}).observe({
      added: function(m) {


            GoogleMaps.ready('exampleMap', function(map) {
              //console.log(m);
              var place = Places.findOne({_id: m._id});
              //console.log(place);
              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(place.lat,place.lon),
                map: map.instance,
                place_sport: m._id,

              });

              map.instance.fitBounds(map.instance.getBounds());
              //new google.maps.event.clearListeners(map); not work
              //  map.instance.setCenter(new google.maps.LatLng(place.lat,place.lon));
              //map.instance.setZoom(15);

              /*new google.maps.event.addListener(marker, 'click', function() {
                IonModal.open('_markerDialog',this.game);
              });*/


            });


          }

    });

});

Template.map.rendered = function() {
  this.subscription = Meteor.subscribe('games');
  this.subscription = Meteor.subscribe('images');
  this.subscription = Meteor.subscribe('sports');
  this.subscription = Meteor.subscribe('places');
  this.subscription = Meteor.subscribe('players');
  Tracker.autorun(function () {
    if(Geolocation.latLng()!= null)
    {
      var lat = Geolocation.latLng().lat;
      var lng = Geolocation.latLng().lng;
      if(Meteor.user())
      {
        var coords = [lat,lng];
        var loc = {type:"Point",coordinates:coords};
        Meteor.users.update(
          { _id: Meteor.userId() }, { $set: { 'profile.loc': loc }} );
      }
    }
  });


};

Template.map.destroyed = function() {
  this.markerObserve.stop();
}
