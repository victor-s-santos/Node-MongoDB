
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home', {
        'nome': req.query.nome
    });
});

// router.get('/posts/:id', (req, res)=>{
//     let id = req.params.id;
//     res.send(`id do post enviado: ${id}`);
// });

// router.get('/sobre', (req, res)=>{
//     res.send('Nova página');
// })


module.exports = router;