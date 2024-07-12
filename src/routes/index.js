const adminRouter = require('../routes/admin.route');
const courseRouter = require('../routes/course.route');
const classRouter = require('../routes/class.route');
const teacherRouter = require('../routes/teacher.route');
const studentRouter = require('../routes/student.route');
const scheduleRouter = require('../routes/schedule.route');
const testRouter = require("./test.route");
const roomRouter = require('../routes/room.route');
const registerRouter = require('../routes/register.route');
const authRouter = require('../routes/auth.route');
const attendanceRouter = require('../routes/attendance.route');
const informationRouter = require('../routes/information.route');
const accountRouter = require('../routes/account.route');
const assignmentsRouter = require('../routes/assignment.route');
function route(app) {
    app.use("/test", testRouter)
    app.use("/admin", adminRouter)
    app.use("/admin/course", courseRouter)
    app.use("/admin/teacher", teacherRouter)
    app.use("/admin/class", classRouter)
    app.use("/admin/student", studentRouter)
    app.use("/admin/schedule", scheduleRouter)
    app.use("/admin/room", roomRouter)
    app.use("/admin/register", registerRouter)
    app.use("/auth", authRouter)
    app.use("/attendance", attendanceRouter)
    app.use("/information", informationRouter)
    app.use("/account", accountRouter)
    app.use("/assignment", assignmentsRouter)
}

module.exports = route;