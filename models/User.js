const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    instituicao:String
});

module.exports = mongoose.model('User', userSchema);