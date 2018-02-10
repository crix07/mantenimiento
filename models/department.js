const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  nombre_largo: { type: String, required: true },
  nombre_corto: { type: String, required: true }
})


module.exports = mongoose.model('Department', DepartmentSchema)
