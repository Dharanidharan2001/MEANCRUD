const express = require('express');
const employeecont = require('./../controller/employeecont')

var router = express.Router();


router.route('/getall').get(employeecont.getallemployees)
router.route('/create').post(employeecont.createemployee)

router.route('/:id').get(employeecont.getemployeebyid)
router.route('/update/:id').put(employeecont.updateemployee)
router.route('/delete/:id').delete(employeecont.deleteemployee)

module.exports = router;