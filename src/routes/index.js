const adminRouter = require('../routes/admin.route');
const courseRouter = require('../routes/course.route');
const classRouter = require('../routes/class.route');
const teacherRouter = require('../routes/teacher.route');
const testRouter = require("./test.route");
function route(app) {
    app.use("/test", testRouter)
    app.use("/admin", adminRouter)
    app.use("/admin/course", courseRouter)
    app.use("/admin/teacher", teacherRouter)
    app.use("/admin/class", classRouter)

}

module.exports = route;