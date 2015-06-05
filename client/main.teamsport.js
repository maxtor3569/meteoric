Template.map.created = function() {
  var games = Games.find();

  if (games.count())
  {
    games.forEach(function (row) {
      //console.log(row.lat);
      var infowindow = new google.maps.InfoWindow({
        content: row.name
      });
      var position = new google.maps.LatLng(row.lat, row.lon);
      var userObj = Meteor.users.findOne({_id: row.user});
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var marker = new google.maps.Marker({
        position: position,
        map: map.instance,
        icon: iconBase + 'schools_maps.png'
      });

      google.maps.event.addListener(marker, 'click', function() {
        $('#modal-action').modal('show');
      });

    });
  }

}
