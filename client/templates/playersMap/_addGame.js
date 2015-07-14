AutoForm.hooks({
  'new-game-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();

    },

    onError: function(operation, error, template) {
      //alert(error);
    },
    before: {
      // Replace `formType` with the form `type` attribute to which this hook applies
      insert: function(doc) {
          var user = null;
          if(Meteor.user())
            user = Meteor.user()._id;
          else {
            Router.go('userAccounts');
            IonModal.close();
          }
          doc.user = user;

        var id = Places.insert({
            address: document.getElementById('autocomplete-address').value,
            lat : document.getElementById('lat').value,
            lon : document.getElementById('lon').value,
            //city: document.getElementById('lat').value

        })
        doc.place = id;
        // Then return it or pass it to this.result()
        return doc; //(synchronous)
        //return false; (synchronous, cancel)
        //this.result(doc); (asynchronous)
        //this.result(false); (asynchronous, cancel)
      }
    },
  }
});

Template._addGame.rendered = function() {
  var input = document.getElementById('autocomplete-address');
  if(input !=null )
    var autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {

    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    document.getElementById('lat').value = place.geometry.location.A;
    document.getElementById('lon').value = place.geometry.location.F;

    //console.log("place: " + JSON.stringify(place) );
  });
}

Template._addGame.helpers({
  sportOptions: function () {
    return Sports.find().map(function (c) {
      return {label: c.label, value: c._id};
    });
  }
});

Template._addGame.onCreated(function() {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('sports');
  }.bind(this));
});
