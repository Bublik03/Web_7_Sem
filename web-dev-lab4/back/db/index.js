var mongoClient = require('mongodb').MongoClient;
var conf = require('../config');

const client = new mongoClient(conf.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = client.connect().then(c => c.db(conf.db).collection(conf.collection)).catch(err => {console.log(err); process.exit(2)});