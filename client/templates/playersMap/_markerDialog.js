Template._markerDialog.helpers({
  player: function () {
    var template = Template.instance();
    //console.log(template.data);
    var game = Games.findOne({_id: template.data});

    return Meteor.users.findOne({_id: game.user});
    //return ;
  },
  picture: function () {
    var template = Template.instance();
    var game = Games.findOne({_id: template.data});
    return Images.findOne(Meteor.users.findOne({_id: game.user}).profile.picture); // Where Images is an FS.Collection instance
  },
  game: function () {
    var template = Template.instance();
    return Games.findOne({_id: template.data});

  }
});
Template._markerDialog.events({
  'click [data-action=route]': function (event,template) {
        event.preventDefault();
        //console.log(template);
        var lat = Geolocation.latLng().lat;
        var lng = Geolocation.latLng().lng;
        var game = Games.findOne({_id: template.data});
        var place = Places.findOne({_id: game.place});
        var map = GoogleMaps.maps.exampleMap;

        var directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map.instance);
        var directionsService = new google.maps.DirectionsService();
        var start = new google.maps.LatLng(lat, lng);
        //var end = new google.maps.LatLng(38.334818, -181.884886);
        var end = new google.maps.LatLng(place.lat, place.lon);
        /*
    var startMarker = new google.maps.Marker({
            position: start,
            map: map,
            draggable: true
        });
        var endMarker = new google.maps.Marker({
            position: end,
            map: map,
            draggable: true
        });
    */
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(start);
        bounds.extend(end);
        map.instance.fitBounds(bounds);

        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map.instance);
            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
        });

  }

});
