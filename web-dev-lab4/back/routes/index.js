var router = require('express').Router();

require('./favorites')(router);
require('./weather')(router);

module.exports = router;