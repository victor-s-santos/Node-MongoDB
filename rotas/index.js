
const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', homeController.index)
//router.get('rota', controller);
router.get('/users/login', userController.login);
router.get('/users/signup', userController.signup); 

module.exports = router;