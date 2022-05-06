const mongoose = require('mongoose');
const config = require('../config');

const uri = config.serverInfo.dbConnectionString;

console.log(uri)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});



var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db
