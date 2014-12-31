'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-skeleton',
  included: function(app) {
    this._super.included(app);
    var skeletonCSSpath   = 'vendor/skeleton/css/';
    app.import(path.join(skeletonCSSpath, 'normalize.css'));
    app.import(path.join(skeletonCSSpath, 'skeleton.css'));
  }
};
