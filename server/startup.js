Meteor.startup(function () {
  console.log('Start debug de Push');
  Push.debug = true;
  //teamsport:ajkajkkja@teamsport.meteorlab.fr:27017/teamsport
  Meteor.absoluteUrl.defaultOptions.rootUrl = 'https://teamsport.meteorlab.fr';
/*  process.env.ROOT_URL = 'https://teamsport.meteorlab.fr';
  ROOT_URL=https://teamsport.meteorlab.fr DDP_DEFAULT_CONNECTION_URL=https://teamsport.meteorlab.fr
  process.env.MOBILE_ROOT_URL = 'https://teamsport.meteorlab.fr';
  process.env.MOBILE_DDP_URL = 'https://teamsport.meteorlab.fr';
  process.env.MONGO_URL = 'mongodb://teamsport:ajkajkkja@teamsport.meteorlab.fr:27017/teamsport';
  //Meteor.absoluteUrl({rootUrl: "https://teamsport.meteorlab.fr"});
  process.env.MONGO_OPLOG_URL = 'mongodb://teamsport:ajkajkkja@teamsport.meteorlab.fr:27017/teamsport';
  //MONGO_URL=mongodb://teamsport:ajkajkkja@teamsport.meteorlab.fr:27017/teamsport
  //MONGO_URL=mongodb://teamsport.meteorlab.fr:27017/teamsport
  //MONGO_URL=mongodb://teamsport:ajkajkkja@teamsport.meteorlab.fr:27017/teamsport meteor build ~/build-output-directory --server=https://teamsport.meteorlab.fr
    //MONGO_URL=mongodb://teamsport.meteorlab.fr:27017/teamsport meteor build ~/build-output-directory3 --server=https://teamsport.meteorlab.fr
  //console.log(process);*/
  //ROOT_URL=https://teamsport.meteorlab.fr DDP_DEFAULT_CONNECTION_URL=https://teamsport.meteorlab.fr
  //meteor build ~/build-final --server=https://teamsport.meteorlab.fr
    console.log(__meteor_runtime_config__.ROOT_URL);
    console.log('PORT> ' + process.env.PORT);
    console.log('ROOT_URL> ' + process.env.ROOT_URL);
    console.log('MONGO_URL> ' + process.env.MONGO_URL);
    console.log('MAIL_URL> ' + process.env.MAIL_URL);
    console.log('DDP_DEFAULT_CONNECTION_URL> ' + process.env.DDP_DEFAULT_CONNECTION_URL);

});
