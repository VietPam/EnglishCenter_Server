const express = require('express');
const config = require('./src/config/index');
const cors = require("cors");
const route = require('./src/routes');

const app = express();
app.use(cors());
app.options('*',cors());
app.use(express.urlencoded({
    extended: false,
}))
// Middleware để phân tích các yêu cầu JSON
app.use(express.json());

// Route cơ bản
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

route(app);

async function startServer() {
    const PORT = config.app.port;
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
}

startServer();