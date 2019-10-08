const mongoose = require('mongoose');
const slug = require('slug');
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

exports.editAction = async (req, res) => {
    req.body.slug = slug(req.body.title, {lower:true});
    try{
        const post = await Post.findOneAndUpdate(
            {slug:req.params.slug},
            req.body,
            {
                new:true,//retorna novo item atualizado
                runValidators:true//mantem as validacoes definidas no esquema do banco de dados
                
            }
        );
    }catch(error){
        req.flash('error', `Erro ocorrido: ${error.message} `);
        res.redirect('/post/'+req.params.slug+'/edit');
        return;
    };
    req.flash('success', 'A postagem foi atualizada com sucesso!');
    res.redirect('/');
};