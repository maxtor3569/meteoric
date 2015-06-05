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

});

Template.map.rendered = function() {
    this.markerObserve = Games.find({}).observe({
        added: function(m) {
            //placeMarker(m.location)  // obviously depends on the structure of Markers documents
        }
    });
};

Template.map.destroyed = function() {
    this.markerObserve.stop();
}
