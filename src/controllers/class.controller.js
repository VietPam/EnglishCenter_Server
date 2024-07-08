const Class = require('../models/class.model')
const Course = require('../models/course.model')
const Student = require('../models/student.model')
const Teacher = require('../models/teacher.model')

exports.createClass = async (req, res, next) => {
    const inforClass = req.body
    if ((inforClass.className && inforClass.course)) {
        const newClass = await new Class(inforClass)
        await newClass.save()
            // await teacher.save()
            .then(() => {
                res.status(200).send(newClass)
            })
            .catch(err => {
                res.status(500).send('Error server', err)
            })
    }
    else {
        res.status(400).send('Vui lòng nhập đầy đủ thông tin');
    }
}
exports.listClass = async (req, res) => {
    try {
        if (req.query.teacher) {
            const listClass = await Class.find({ teacher: req.query.teacher }).populate(['course', 'teachers'])
            res.status(200).send(listClass)
        }
        else if (req.query.course) {
            const listClass = await Class.find({ course: req.query.course }).populate(['course', 'teachers'])
            res.status(200).send(listClass)
        }
        else {
            const listClass = await Class.find({}).populate(['course', 'teachers'])
            res.status(200).send(listClass)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
};