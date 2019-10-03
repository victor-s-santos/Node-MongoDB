const express = require('express');
const mustache = require('mustache-express');
const router = require('./rotas/index');//chamando minhas rotas externamente

const app = express();//inicializando o servidor
app.use('/', router);
//app.use('/admin', adminRouter);

app.use(express.json()); //não há mais necessidade de body-parser
module.exports = app;
