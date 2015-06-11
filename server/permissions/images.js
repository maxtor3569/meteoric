Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  },
  download: function(userId) {
    return true;
  }
});
