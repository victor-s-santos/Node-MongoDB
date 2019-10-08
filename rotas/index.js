
const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const router = express.Router();
//rota inicial
router.get('/', homeController.index)

//rota usuarios
router.get('/users/login', userController.login);
router.get('/users/signup', userController.signup); 
//rota adicionar post
router.get('/post/add', postController.add);
router.post('/post/add', postController.addAction);
//rota editar post
router.get('/post/:slug/edit', postController.edit);
router.post('/post/:slug/edit', postController.editAction);
//rota visualizar post
router.get('/post/:slug', postController.show);
module.exports = router;