const app = require('./app');

require('dotenv').config({path:'variables.env'});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), ()=>{
    console.log(`Servidor inicializado com sucesso na porta ${server.address().port}`)
});