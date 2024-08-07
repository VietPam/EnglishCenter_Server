const mongoose = require('mongoose');
const config = require("./index.js");

async function connect() {
    try {      
        await mongoose.connect(config.db.uri);
        console.log("Connected Database MongoDB "+ mongoose.connection.name);
    } catch (error) {
        console.error(error.message);
        process.exit();
    }
}

module.exports = connect;