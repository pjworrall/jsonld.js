/**
 * jsonld.js library.
 *
 * @author Dave Longley
 *
 * Copyright 2010-2017 Digital Bazaar, Inc.
 */

module.exports = require('./jsonld');

// There is no process object to refer to when not running in node. This assumes it is running in node
// because it is a node package but Meteorjs uses node packages for the client side too. Anyhow,
// I fudged it to work for me in a fork.

//if(require('semver').gte(process.version, '8.6.0')) {
  //module.exports = require('./jsonld');
//} else {
  //module.exports = require('../dist/node6/lib/jsonld');
//}
