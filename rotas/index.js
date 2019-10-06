
const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', homeController.index)
// router.get('/', (req, res)=>{
//     let itens = {
//         'nome': req.query.nome,
//         'idade': req.query.idade,
//         'mostrar': true,
//         lp:[
//             {linguagem:'python', framework:'django'},
//             {linguagem:'javascript', framework:'vuejs'},
//             {linguagem:'php', framework:'Laravel'},
//             {linguagem:'javascript', framework:'react'},
//             {linguagem:'ruby', framework:'on rails'},
//             {linguagem:'python', framework:'flask'}
//         ],
//         aprender:['machine learning', 'deep learning', 
//                 'tensorflow', 'keras',
//                 'pytorch', 'pandas'],
//         hello:'<h1>Olá estranho!</h1>',
//         titulo: 'Título da Página^^'

//     };
//     res.render('home', itens);
// });

// router.get('/posts/:id', (req, res)=>{
//     let id = req.params.id;
//     res.send(`id do post enviado: ${id}`);
// });

// router.get('/sobre', (req, res)=>{
//     res.send('Nova página');
// })

module.exports = router;