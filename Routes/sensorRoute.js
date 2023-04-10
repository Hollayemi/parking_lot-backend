const {
        addSensorNode, 
        deleteSensorNode,
        updateSensorNode,
        getSensorNode
    } = require('../controllers/sensorNodeController');
const {
    createParkingField
} = require('../controllers/parkingFieldController');
const { verifyTokenAndAuthorization } = require('../models/verification');
const router = require('express').Router();


router.post('/create-field', verifyTokenAndAuthorization, createParkingField)
router.post('/addSensorNode', verifyTokenAndAuthorization, addSensorNode)
router.get('/get-sensors', verifyTokenAndAuthorization, getSensorNode)
router.patch('/deleteSensorNode/:id', verifyTokenAndAuthorization, deleteSensorNode)
router.post('/updateSensorNode', updateSensorNode)

module.exports = router
