const express = require('express');
//definindo rotas
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Olá Estranho!')

});//rota inicial


const app = express();//inicializando o servidor
app.use('/', router);

module.exports = app;
