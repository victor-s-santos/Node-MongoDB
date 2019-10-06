const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:'Título Obrigatório!'
    },
    slug: String,
    body:{
        type: String,
        trim: true
    },
    tags:[String]
});

module.exports = mongoose.model('Post', postSchema)
/*
Esquema do post:
Título
Corpo
Tags
Slug
*/