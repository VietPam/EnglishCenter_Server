const Level = require('../models/level.model');


exports.levels = async (req, res) => {
    try {
        const levels = await Level.find();
        res.status(200).send(levels)
    } catch (error) {
        res.status(500).send('Server error: ' + error);
    }
}

exports.getLevel = async (req, res) => {
    try {
        const id = req.query.id;
        const level = await Level.findById(id);
        res.status(200).send(level)
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: ' + error);

    }
};



