const express = require('express')
const router = express.Router()
const controller = require('../controlers/calculadora')


router.get('/soma', controller.soma)
router.get('/sub', controller.sub)

router.get('/mul/:a/:b', controller.mul)
router.get('/div/:a/:b', controller.div)

module.exports = router