const mongoose = require('mongoose');
const Schema = mongoose.Schema

const StaffSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: String, required: true },
  direccion: { type: String, required: true },
  fecha: { type: String, required: true },
  salario: { type: String, required: true },
  profesion: { type: String, required: true },
  department: { type: Schema.ObjectId, ref: 'Department' }
})


module.exports = mongoose.model('Staff', StaffSchema)
