Template.layout.events({
  'click [data-action=addGame]': function (event, template) {
      event.preventDefault();
      if(Geolocation.latLng()!= null)
      {
        var lat = Geolocation.latLng().lat;
        var lng = Geolocation.latLng().lng;
      }
      else {
        lat = 0;
        lng = 0;
      }
      var params = {
          msg : 'd',
          address : 'sdqdqs',
          lat : lat,
          lon : lng,
          city : '',
          sport: 'fd',

      };

      Meteor.call('addGame', params, function(err2) {
          if (err2) {
              alert(err2);
          } else {

          }
      });

      /*var marker = new google.maps.Marker({
          position: new google.maps.LatLng( lat, lon ),
          map: map.instance
      });
      var latLng = marker.getPosition();
      map.instance.setCenter(latLng);
      map.instance.setZoom(18);*/

  }

})
