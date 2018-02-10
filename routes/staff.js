const express = require('express');
const router = express.Router()
const { saveStaff, Staffs, deleteStaff, updateStaff } = require('../controllers/staff')

router.post('/save-staff', saveStaff)
router.get('/get-staffs', Staffs)
router.delete('/delete-staff/:id', deleteStaff)
router.put('/update-staff/:id', updateStaff)

module.exports = router
