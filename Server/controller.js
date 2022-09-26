const workouts = require('./db.json')

module.exports = {
    getWorkouts: (req, res) => {
        res.status(200).send(workouts)
    }
}