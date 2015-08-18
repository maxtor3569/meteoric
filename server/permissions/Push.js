Push.allow({
  send: function(userId, notification) {
    // Allow all users to send to everybody - For test only!
    return true;
  },
  // needed? probably not
  /*insert: function(userId, doc){
      return true;
  },
  update: function(userId, doc){
      return true;
  },
  remove: function(userId, doc){
      return true;
  }*/
});
Push.debug = true;
