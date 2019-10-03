
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home');
});

// router.get('/posts/:id', (req, res)=>{
//     let id = req.params.id;
//     res.send(`id do post enviado: ${id}`);
// });

// router.get('/sobre', (req, res)=>{
//     res.send('Nova página');
// })


module.exports = router;