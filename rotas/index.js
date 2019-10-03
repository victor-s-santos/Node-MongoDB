
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Olá Estranho!')

});//rota inicial
router.get('/sobre', (req, res)=>{
    res.send('Nova página');
})


module.exports = router;