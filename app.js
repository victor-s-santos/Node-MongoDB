const express = require('express');
const mustache = require('mustache-express');
//flash message
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
//
const router = require('./rotas/index');//chamando minhas rotas externamente
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler')
const app = express();//inicializando o servidor


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//tornando public um diretorio estatico
app.use(express.static(__dirname + '/public'));

//habilitando cookie
app.use(cookieParser(process.env.SECRET));

//habilitando sessao
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));
app.use(flash());

app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.teste = "apenas um teste";
    res.locals.flashes = req.flash();
    next();
});


app.use('/', router);
 

app.use(errorHandler.notFound)

app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');
module.exports = app;
