const express = require('express');
const router = express.Router()
const { addDepartment, updateDepartment, getAll, deleteDepart } = require('../controllers/department')

router.post('/add-department', addDepartment)
router.put('/udpate-department/:id', updateDepartment)
router.get('/get-all', getAll)
router.delete('/delete-depart/:id', deleteDepart)


module.exports = router
