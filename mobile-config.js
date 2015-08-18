App.info({
  id: 'com.teamsport.app',
  name: 'Teamsport',
  description: 'Teamsport',
  version: '0.0.1',
  author: 'Maxime Gastaldo',
  email: 'maxtor3569@gmail.com',
  website: 'http://teamsport.vn'
});
/*App.icons({
  'android_ldpi': 'resources/icons/icon-ldpi.png',
  'android_mdpi': 'resources/icons/icon-mdpi.png',
  'android_hdpi': 'resources/icons/icon-hdpi.png',
  'android_xhdpi': 'resources/icons/icon-xhdpi.png'
});*/
App.accessRule("*", {external: false});
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');

App.accessRule('*.gstatic.com/*');
