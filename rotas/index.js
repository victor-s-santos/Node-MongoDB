
const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Olá Estranho!')

});//rota inicial

module.exports = router;