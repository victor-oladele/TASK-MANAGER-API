const express = require('express')
const router = express.Router()
const taskcontroller = require('../controller/taskcontroller')



router.route('/')
      .get(taskcontroller.getalltask)
      .post(taskcontroller.createtask)


router.route('/:id')
      .get(taskcontroller.getsingletask)
      .delete(taskcontroller.deletetask)
      .patch(taskcontroller.updatetask)


      module.exports = router