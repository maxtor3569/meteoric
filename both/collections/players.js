Schemas.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true
  },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    optional: true,
    label: 'Profile picture'
  },
  photos: {
    type: [Object],
    optional: true,
    blackbox: false

  },
  "photos.$.image": {
    type: String
  },
  "photos.$.active": {
    type: Boolean
  },

  firstTour: {
    type: Number,
    optional: true
  },

  sports: {
    type: [String],
    optional: true,
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

  rates: {
    type: [Object],
    optional: true

  },

  rateAverage: {
    type: Number,
    decimal: true,
    optional: true
  },

  "rates.$.created_at": {
    type: Date
  },

  "rates.$.rate": {
    type: Number
  },

  comments: {
    type: [Object],
    optional: true

  },

  "comments.$.created_at": {
    type: Date
  },

  "comments.$.user": {
    type: String
  },

  "comments.$.comment": {
    type: String
  },

  /*country: {
   type: Schema.UserCountry,
   optional: true
   }*/
});

var userSchemaObj = {
  _id: {
    type: String,
    optional: true
  },
  email: {
       type: String,
       regEx: SimpleSchema.RegEx.Email
   },
   password: {
     type: String,
     label: "Password",
     min: 6
   },


  /*"roles": {
    type: [String],
    optional: true
  },*/

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
  profile: {
    type: Schemas.UserProfile,
    optional: true
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true
  },

  teams: {
    type: [Object],
    minCount: 0,
    maxCount: 3,
    optional: true
  },

  friends: {
    type: [String],
    optional: true,
    blackbox: true

  },

  status: {
    type: Object,
    optional: true,
    blackbox: true
  }



};


Schemas.User = new SimpleSchema(userSchemaObj);

Meteor.users.attachSchema(Schemas.User);
