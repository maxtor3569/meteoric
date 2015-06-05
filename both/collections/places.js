Schemas = {};
Places = new Meteor.Collection('places');

Schemas.Places = new SimpleSchema({

    name : {
        type: String,
        optional : true
    },

    address: {
        type: String
    },

    lat: {
        type: String
    },

    lon: {
        type: String
    },

    city: {
        type: String,
        optional : true
    },

    website: {
        type: String,
        optional : true

    },

    contactPhone: {
        type: String,
        optional : true

    },

    contactName: {
        type: String,
        optional : true

    },

    price: {
        type: String,
        optional : true

    },

    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },


});

Places.attachSchema(Schemas.Places);
