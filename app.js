const express = require('express');
const router = require('./rotas/index');//chamando minhas rotas externamente
//definindo rotas
// const router = express.Router();
// router.get('/', (req, res)=>{
//     res.send('Olá Estranho!')

// });

//fim das rotas

const app = express();//inicializando o servidor
app.use('/', router);
//app.use('/admin', adminRouter);

module.exports = app;
