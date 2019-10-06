const express = require('express');
const mustache = require('mustache-express');
const router = require('./rotas/index');//chamando minhas rotas externamente
const helpers = require('./helpers');

const app = express();//inicializando o servidor

app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.teste = "apenas um teste";
    next();
});

app.use('/', router);
app.use(express.json()); 

app.use((req, res, next) => {
    res.send('O endereço que você informou não foi encontrado!')
})

app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');
module.exports = app;
