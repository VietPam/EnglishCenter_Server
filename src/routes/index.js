const adminRouter = require('../routes/admin.route');
const courseRouter = require('../routes/course.route');
const classRouter = require('../routes/class.route');
const teacherRouter = require('../routes/teacher.route');
const studentRouter = require('../routes/student.route');
const scheduleRouter = require('../routes/schedule.route');
const testRouter = require("./test.route");
function route(app) {
    app.use("/test", testRouter)
    app.use("/admin", adminRouter)
    app.use("/admin/course", courseRouter)
    app.use("/admin/teacher", teacherRouter)
    app.use("/admin/class", classRouter)
    app.use("/admin/student", studentRouter)
    app.use("/admin/schedule", scheduleRouter)

}

module.exports = route;