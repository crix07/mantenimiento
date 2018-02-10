const Department = require('../models/department');

function addDepartment(req, res) {
  let department = new Department()
  department.nombre_largo = req.body.name
  department.nombre_corto = req.body.surname
  department.save((err, departmentStored)=>{
    if(err) return res.status(500).send({message: `error al guardar el departamento ${err}`})
    if(!departmentStored) return res.status(400).send({message: 'no se ha cuardado el departamento'})
    return res.status(200).send({departmentStored})
  })

}

function updateDepartment(req, res) {
  let departId = req.params.id
  Department.findByIdAndUpdate(departId, req.body, { new:true }, (err, newDepartment)=>{
    if(err) return res.status(500).send({message: `error al guardar el departamento ${err}`})
    if(!newDepartment) return res.status(400).send({message: 'no se ha actualizado el departamento'})
    return res.status(200).send({newDepartment})
  })
}

function getAll(req, res) {
  Department.find({},  (err, departs)=>{
    if(err) return res.status(500).send({message: `error al bucar el departamento ${err}`})
    if(!departs) return res.status(404).send({message: 'no hay departamentos creados'})

    return res.status(200).send({departs})
  })
}


function deleteDepart(req, res) {
  let departId = req.params.id
  Department.remove({_id: departId}, (err)=>{
    if(err) return res.status(500).send({message: `error al eliminar ${err}`})
    return res.status(200).send({message: 'departamento eliminado'})
  })
}


module.exports = {
  addDepartment,
  updateDepartment,
  getAll,
  deleteDepart
}
