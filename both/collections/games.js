Games = new Meteor.Collection('Games');

Schemas = {};

Schemas.Games = new SimpleSchema({
    content: {
        type: String
    },
    sports: {
        type: [String],
        optional:true,
        autoform: {
          type: "select-checkbox",
          options: function() {
            return Sports.find().map(function(c) {
              return {
                label: c.label,
                value: c._id
              };
            });
          }
        }
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
        type: String,
        optional: true
    }

});

Games.attachSchema(Schemas.Games);
