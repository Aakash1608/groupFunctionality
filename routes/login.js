const router = require('express').Router();
const {userController} = require('../controller/userController');
const {registerController} = require('../controller/registerController')
const { verifyToken } = require('../middleware/verifyToken')
const { loginController } = require('../controller/loginController')

router.get('/', verifyToken, userController)
router.post('/register', registerController)
router.post('/login', loginController)

module.exports = router