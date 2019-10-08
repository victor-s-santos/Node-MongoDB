
const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/', homeController.index)
//router.get('rota', controller);
router.get('/users/login', userController.login);
router.get('/users/signup', userController.signup); 
router.get('/post/add', postController.add);
router.post('/post/add', postController.addAction);
router.get('/post/:slug/edit', postController.edit);
module.exports = router;