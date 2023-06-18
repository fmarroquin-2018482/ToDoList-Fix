'use strict'

const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 3200;
const taskRoutes = require('../src/taks/task.routes');

const app = express()
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.use('/task', taskRoutes);

exports.initServer = ()=>{
    app.listen(port)
    console.log(`Server http running in port ${port}`);
}
