Games = new Meteor.Collection('Games');

Schemas = {};

Schemas.Games = new SimpleSchema({
    content: {
        type: String
    },
    sport: {
        type: String,
        optional:true
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

    place: {
        type: String,
        optional:false,
        autoform: {
           afFieldInput: {
             type: "text",
             id: "autocomplete-address"
           }
         }

    },
    user: {
        type: String,
        optional: true
    }

});

Games.attachSchema(Schemas.Games);
