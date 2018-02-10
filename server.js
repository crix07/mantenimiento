const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app')
mongoose.Promise = global.Promise
mongoose.connect(config.db)
  .then(()=>{
    console.log('conexion a la base de datos establecida')
    app.listen(config.port, ()=>{
      console.log(`server is listening on port ${config.port}`)
    })
  })
  .catch(err => {
    console.log(`error al conectar a la base de datos ${err}`)
  })
