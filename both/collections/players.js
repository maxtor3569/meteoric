Schema = {};

Schema.UserProfile = new SimpleSchema({
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
  loc: {
    type: Object,
    index: '2dsphere',
    label: "Location",
    optional: true
  },
  "loc.type": {
    type: String,
    allowedValues: ["Point"],
    label: "Start location type"
  },
  "loc.coordinates": {
    type: [Number],
    minCount: 2,
    maxCount: 2,
    decimal: true
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

Schema.User = new SimpleSchema({
  emails: {
    type: [Object]
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },

  createdAt: {
    type: Date,
    optional: true,
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
    type: Schema.UserProfile,
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



});

Meteor.users.attachSchema(Schema.User);
