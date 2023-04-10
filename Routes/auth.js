const router = require('express').Router();
const ParkingField = require('../controllers/userController');

const {AccountLogin, createAccount} = ParkingField

router.post('/createAccount', createAccount);
router.post('/login', AccountLogin);

module.exports = router;
