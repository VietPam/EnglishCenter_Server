const Schedule = require('../models/schedule.model')
const Student = require('../models/student.model')


exports.getSchedules = async(req,res)=>{
    const id = req.query.id;
    const role = req.query.role;
    let  listSchedule; 
    try {
        if(role === 'Student'){
            const student = await Student.findById(id);
            const classes = student.class;   
            listSchedule = await Schedule.find({ class: { $in: classes }}).populate('class')
        }
        else{
            listSchedule = await Schedule.find({teacher:id}).populate('class');
        }

        const schedules = await listSchedule.map((schedule) => {
            return {
                title: schedule.class?.className,
                teacher: schedule.teacher,
                startDate: schedule.startDate,
                endDate: schedule.endDate,
                room: schedule.room,
                class: schedule.class?._id,
                id: schedule._id,
            }
        })
        res.status(200).send(schedules);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

