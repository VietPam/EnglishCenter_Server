const dotenv = require('dotenv');
dotenv.config();
const config = {
    app: {
        port: process.env.PORT
    }
}

module.exports = config