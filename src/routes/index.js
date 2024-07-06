const adminRouter = require('../routes/admin.route');
const testRouter = require("./test.route");
function route(app) {
    app.use("/test", testRouter)
    app.use("/admin", adminRouter)

}

module.exports = route;