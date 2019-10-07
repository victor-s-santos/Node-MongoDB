const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.add = (req, res) =>{
    res.render('postAdd');
};

exports.addAction = async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    req.flash('success', 'Post enviado com sucesso!');

    res.redirect('/');
};
//requisicao get -> recebe como query
//requisicao post -> recebe como o corpo da requisicao pelo body