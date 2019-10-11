
const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const router = express.Router();
const imageMiddleware = require('../middlewares/imageMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//rota inicial
router.get('/', homeController.index)

//rota login
router.get('/users/login', userController.login);
router.post('/users/login', userController.loginAction);
router.get('/users/logout', userController.logout);
//rota registro
router.get('/users/signup', userController.signup);
router.post('/users/signup',userController.signupAction);

//rota adicionar post
router.get('/post/add', authMiddleware.isLogged, postController.add);
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