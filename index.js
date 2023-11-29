const app = require('./app');
const dotenv = require('dotenv').config();


app.listen(process.env.RUNNING_PORT, function () {
    console.log("This is running from port" + " " + process.env.RUNNING_PORT)
})