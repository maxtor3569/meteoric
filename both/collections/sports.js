Schemas = {};
Sports = new Meteor.Collection('Sports');

Schemas.Sports = new SimpleSchema({

    label : {
        type: String,
        optional : true
    },

});

Sports.attachSchema(Schemas.Sports);
