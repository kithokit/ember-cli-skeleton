'use strict';

module.exports = {
  name: 'ember-cli-skeleton'
   included: function(app) {
     this._super.included(app);
     var skeletonCSSpath   = 'vendor/skeleton/css/';
     app.import(skeletonCSSpath, 'skeleton.css');
     app.import(skeletonCSSpath, 'normailize.css');
   }
};
