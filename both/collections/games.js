Games = new Meteor.Collection('games');

Schemas = {};

Schemas.Games = new SimpleSchema({
    content: {
        type: String
    },
    sport: {
        type: String
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
        optional: true

    },
    user: {
        type: String
    }

});
Games.attachSchema(Schemas.Games);
