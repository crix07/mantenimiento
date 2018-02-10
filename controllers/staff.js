const Staff = require('../models/staff')

// function Pro() {
//   return Promise.resolve("Mundo")
// }
//
// function Saludar(str){
//   return "hola " + str;
// }
//
// var result = Pro()
//
// console.log(Saludar(result))



function saveStaff(req, res) {
  let staff = new Staff()
  let cedula = req.body.cedula
  console.log(req.body);

  if(!req.body.nombre || !req.body.apellido || !req.body.cedula || !req.body.direccion || !req.body.salario || !req.body.profesion) {
    return res.status(403).send({message: 'Favor de enviar todos los campos'})
  }

  Staff.find({cedula: cedula}, (err, staffExist)=>{
    if(err) return res.status(500).send({message: `error al buscar el empleado ${err}`})

    if(staffExist && staffExist.length >= 1) {
      staffExist.map(staffE => {
        return res.status(401).send({message: `este empleado ya existe, no puedes crear dos empleados con la misma cedula ${staffE.cedula}`})
      })
    }

        staff.nombre = req.body.nombre;
        staff.apellido = req.body.apellido;
        staff.cedula = req.body.cedula
        staff.direccion = req.body.direccion
            let hoy = new Date()
            let dia = hoy.getDate();
            let mes = hoy.getMonth();
            let anio = hoy.getFullYear();
            let fecha = String(`${mes}/${dia}/${anio}`);
        staff.fecha = fecha
        staff.salario = req.body.salario
        staff.profesion = req.body.profesion
        staff.save((err, staffStored)=>{
          if(err) return res.status(500).send({message: `error al guardar el empleado ${err}`})
          if(!staffStored) return res.status(400).send({message: 'no se pudo guardar el empleado'})
          return res.status(200).send({staffStored})
        })
   })

}

function Staffs(req, res) {
  Staff.find({}, (err, staffStoreds)=>{
    if(err) return res.status(500).send({message: `error al buscar los empleados ${err}`})

    if(!staffStoreds) return res.status(404).send({message: 'no hay empleados'})

    return res.status(200).send({staffStoreds})
  })
}

function deleteStaff(req, res) {
  let id = req.params.id;
  console.log(id);
  Staff.remove({_id: id}, (err)=>{
    if(err) return res.status(500).send({message: `error al eliminar el empleados ${err}`})
    return res.status(200).send({message: 'empleado eliminado exitosamente'})
  })
}

function updateStaff(req, res) {
  let staffId = req.params.id
  Staff.findByIdAndUpdate(staffId, req.body, { new: true }, (err, staff)=>{
    if(err) return res.status(500).send({message: `error al actualzar los empleados ${err}`})
    if(!staff) return res.status(400).send({message: 'no se pudo actualizar el empleado'})
    return res.status(200).send({staff})
  })
}

module.exports = {
  saveStaff,
  Staffs,
  deleteStaff,
  updateStaff
}
