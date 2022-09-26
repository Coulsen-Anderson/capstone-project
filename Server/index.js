const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getWorkouts,
} = require('./controller')

app.get('/getWorkouts', getWorkouts)

app.listen(4321, () => console.log('workout on port 4321'))