Meteor.methods({

    addGame: function (extraFields) {
        // TODO: check if place exist..
        console.log(extraFields.address);
        var id = Places.insert({
            address:extraFields.address,
            lat : extraFields.lat,
            lon : extraFields.lon,
            city: extraFields.city

        })
        Games.insert({
            content: extraFields.msg,
            sport: extraFields.sport,
            dateCreated: moment(),
            place: id,
            user: Meteor.user()._id


        });

    }
});
