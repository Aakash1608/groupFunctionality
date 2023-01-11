const router = require('express').Router();
const {userController} = require('../controller/userController');
const {registerController} = require('../controller/registerController')
const { verifyToken } = require('../middleware/verifyToken')
const { loginController } = require('../controller/loginController')
const { createGroup, joinGroup } = require('../controller/groupController')

router.post('/', verifyToken, createGroup)
router.post('/join', verifyToken, joinGroup)

module.exports = router