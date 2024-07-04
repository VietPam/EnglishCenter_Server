const testRouter = require("./test.route");
function route(app) {
    app.use("/test", testRouter)
}

module.exports = route;