const mongoose = require('mongoose');

const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_URL,
    MONGO_INITDB_PORT
} = process.env;

const uri = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${encodeURIComponent(MONGO_INITDB_ROOT_PASSWORD)}@${MONGO_INITDB_URL}:${MONGO_INITDB_PORT}/admin`;


mongoose.connect(uri, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');