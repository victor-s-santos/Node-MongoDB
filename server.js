const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

//db connection
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error)=>{
    console.error(`Algo de errado não está certo ${error.message}`)
})
//Models
//require('./models/Post');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), ()=>{
    console.log(`Servidor inicializado com sucesso na porta ${server.address().port}`)
});