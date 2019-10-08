const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.add = (req, res) =>{
    res.render('postAdd');
};

exports.addAction = async (req, res) => {
    const post = new Post(req.body);
    try{
        await post.save();
    } catch(error){
        req.flash('error', `Erro ocorrido: ${error.message} `);
        res.redirect('/post/add');
        return;
    }
    
    req.flash('success', 'Post enviado com sucesso!');

    res.redirect('/');
};

exports.edit = async (req, res) => {
    //1. Pegar as informacoes do dado post;
    const post = await Post.findOne({slug:req.params.slug});//item especifido
    //2. Carregar o formulario de edicao;
    res.render('postEdit', {post:post});
};
