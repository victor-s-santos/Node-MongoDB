
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    // let nome = req.query.nome;
    // let sobrenome = req.query.sobrenome;
    // res.json({
    //     nomecompleto: + nome + " " + sobrenome
    // })
    //res.send(`Olá ${req.query.nome}, como vai você?`)
    res.json(req.query);

});//rota inicial

router.get('/posts/:id', (req, res)=>{
    let id = req.params.id;
    res.send(`id do post enviado: ${id}`);
});

router.get('/sobre', (req, res)=>{
    res.send('Nova página');
})


module.exports = router;