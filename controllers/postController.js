const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.add = (req, res) =>{
    res.render('postAdd');
};

exports.addAction = (req, res) => {
    res.json( req.body );
};
//requisicao get -> recebe como query
//requisicao post -> recebe como o corpo da requisicao pelo body