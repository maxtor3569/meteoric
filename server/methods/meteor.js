Meteor.methods({
  getMongoUrlEnv: function(){
    return process.env.MONGO_URL;
  }
});
