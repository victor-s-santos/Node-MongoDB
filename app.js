const express = require('express');
//definindo rotas

const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Olá Estranho!')

});//rota inicial

//fim das rotas

const app = express();//inicializando o servidor
app.use('/', router);
//app.use('/admin', adminRouter);

module.exports = app;
