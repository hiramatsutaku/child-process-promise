'use strict';

if (require('node-version').major >= 4) {
    module.exports = require('./lib-es5');
} else {
    module.exports = require('./lib-es5');
}
