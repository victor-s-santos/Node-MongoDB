
const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const router = express.Router();
const imageMiddleware = require('../middlewares/imageMiddleware');

//rota inicial
router.get('/', homeController.index)

//rota login
router.get('/users/login', userController.login);
router.post('/users/login', userController.loginAction);
//rota registro
router.get('/users/signup', userController.signup);
router.post('/users/signup',userController.signupAction);

//rota adicionar post
router.get('/post/add', postController.add);
router.post('/post/add', 
    imageMiddleware.upload,
    imageMiddleware.resize,    
    postController.addAction
);
//rota editar post
router.get('/post/:slug/edit', postController.edit);
router.post('/post/:slug/edit',
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.editAction);
//rota visualizar post
router.get('/post/:slug', postController.show);
module.exports = router;