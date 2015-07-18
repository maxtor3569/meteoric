Meteor.users.allow({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc){
        return true;
    },
    remove: function(userId, doc){
        return true;
    }
});
//this is working?^^ delete on refresh wow..
/*
Meteor.users.insert({
 email: 'maxtor3569@gmail.com',
 password: 'ddsds'
}, function(error, result){
 // or try function(error, result) and still get nothing
  console.log('result: ' + result);
 console.log('error: ' + error);
 //console.log('_id: ' + _id); //this._id doesn't work either
});
*/
