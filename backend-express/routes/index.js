//import express
const express = require('express')

//init express router
const router = express.Router();

//import verifyToken
const verifyToken = require('../middlewares/auth');

//import register controller
const registerController = require('../controllers/RegisterController');

const loginController = require('../controllers/LoginController');

const userController = require('../controllers/UserController');

//import validate register
const { validateRegister, validateLogin } = require('../utils/validators/auth');
const { verify } = require('jsonwebtoken');

//define route for register
router.post('/register', validateRegister, registerController.register);

router.post('/login', validateLogin, loginController.login);

router.get('/admin/users', verifyToken, userController.findUsers);

//export router
module.exports = router