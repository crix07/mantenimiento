const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const routesStaff = require('./routes/staff')
const routesDepartment = require('./routes/department')
// middlewares settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routesStaff)
app.use('/api', routesDepartment)
// routes settings
app.use(express.static(path.join(__dirname, 'client')))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client/index.html'))
})


module.exports = app
